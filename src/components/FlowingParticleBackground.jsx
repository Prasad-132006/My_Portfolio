import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

/** Page-wide curl-noise particle field, kept outside React's render cycle. */
export default function FlowingParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d', { alpha: true });
    if (!canvas || !ctx) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)');
    const pointer = {
      x: 0, y: 0, targetX: 0, targetY: 0,
      vx: 0, vy: 0, lastX: 0, lastY: 0, lastMoveTime: 0, active: false,
    };
    const particles = [];
    let width = 0;
    let height = 0;
    let dpr = 1;
    let time = 0;
    let lastTime = 0;
    let frame = 0;
    let pointerEnergy = 0;
    let animate = !reducedMotion.matches;
    let lightTheme = false;
    let color = '215, 255, 79';
    let randomState = 1;

    const random = () => {
      randomState = (randomState * 1664525 + 1013904223) >>> 0;
      return randomState / 4294967296;
    };
    const clamp = (value, low, high) => Math.max(low, Math.min(high, value));
    const smooth = (t) => t * t * t * (t * (t * 6 - 15) + 10);
    const smoothDerivative = (t) => 30 * t * t * (t - 1) * (t - 1);
    const fract = (value) => value - Math.floor(value);

    const lattice = (x, y, seed) => {
      const value = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453123;
      return fract(value) * 2 - 1;
    };

    // Smooth value noise plus its analytic gradient, so the curl field changes continuously.
    const noiseWithGradient = (x, y, seed) => {
      const ix = Math.floor(x);
      const iy = Math.floor(y);
      const fx = x - ix;
      const fy = y - iy;
      const sx = smooth(fx);
      const sy = smooth(fy);
      const dsx = smoothDerivative(fx);
      const dsy = smoothDerivative(fy);
      const a = lattice(ix, iy, seed);
      const b = lattice(ix + 1, iy, seed);
      const c = lattice(ix, iy + 1, seed);
      const d = lattice(ix + 1, iy + 1, seed);
      const top = a + (b - a) * sx;
      const bottom = c + (d - c) * sx;
      return {
        value: top + (bottom - top) * sy,
        dx: ((b - a) + ((d - c) - (b - a)) * sy) * dsx,
        dy: (bottom - top) * dsy,
      };
    };

    // A time-warped, multi-scale potential creates broad currents with smaller eddies.
    // Curl(psi) = (dPsi/dy, -dPsi/dx), so paths curve around the field's contours.
    const flowPotential = (x, y, t = time) => {
      let value = 0;
      let dx = 0;
      let dy = 0;
      const addLayer = (a, b, c, d, cell, weight, driftX, driftY, seed) => {
        const sample = noiseWithGradient(
          (a * x + b * y) / cell + t * driftX,
          (c * x + d * y) / cell + t * driftY,
          seed,
        );
        value += sample.value * weight;
        dx += sample.dx * weight * a / cell + sample.dy * weight * c / cell;
        dy += sample.dx * weight * b / cell + sample.dy * weight * d / cell;
      };

      addLayer(0.94, 0.34, -0.22, 0.91, 420, 1.0, 0.019, -0.014, 2);
      addLayer(0.43, 0.90, -0.87, 0.42, 190, 0.30, -0.016, 0.022, 7);
      addLayer(0.82, -0.57, 0.57, 0.82, 88, 0.08, 0.012, 0.018, 13);
      return { value, dx, dy };
    };

    const bands = [
      { axis: 'x', direction: 1, base: 0.105, amplitude: 0.082, detail: 0.032, width: 0.052, speed: 36, phase: 0.3, seed: 21 },
      { axis: 'x', direction: -1, base: 0.32, amplitude: 0.098, detail: 0.034, width: 0.056, speed: 29, phase: 2.1, seed: 37 },
      { axis: 'x', direction: 1, base: 0.82, amplitude: 0.092, detail: 0.032, width: 0.06, speed: 40, phase: 4.2, seed: 53 },
      { axis: 'y', direction: -1, base: 0.9, amplitude: 0.072, detail: 0.03, width: 0.052, speed: 31, phase: 1.2, seed: 69 },
    ];

    const bandPosition = (bandIndex, progress, t = time) => {
      const band = bands[bandIndex];
      const broad = Math.sin(progress * Math.PI * 2 * (band.axis === 'x' ? 0.72 : 0.64) + band.phase + t * 0.085);
      const detail = Math.sin(progress * Math.PI * 2 * 1.73 + band.phase * 1.9 - t * 0.055);
      const organic = noiseWithGradient(progress * 2.8 + t * 0.023, band.seed * 0.17 + t * 0.012, band.seed).value;
      const bend = band.amplitude * broad + band.detail * detail + organic * 0.018;
      if (band.axis === 'x') return { x: progress * width, y: height * (band.base + bend) };
      return { x: width * (band.base + bend), y: progress * height };
    };

    const bandFrame = (bandIndex, progress, t = time) => {
      const band = bands[bandIndex];
      const epsilon = 0.002;
      const point = bandPosition(bandIndex, progress, t);
      const before = bandPosition(bandIndex, progress - epsilon, t);
      const after = bandPosition(bandIndex, progress + epsilon, t);
      const dx = (after.x - before.x) / (epsilon * 2);
      const dy = (after.y - before.y) / (epsilon * 2);
      const length = Math.max(Math.hypot(dx, dy), 1);
      const direction = band.direction;
      const tangentX = dx / length * direction;
      const tangentY = dy / length * direction;
      return {
        ...point,
        tangentX,
        tangentY,
        normalX: -tangentY,
        normalY: tangentX,
      };
    };

    const isQuietTextZone = (x, y) => (
      x < width * 0.72 && y > height * 0.22 && y < height * 0.72
    );

    const makeParticle = (bandIndex, initialProgress) => {
      const band = bands[bandIndex];
      let progress = initialProgress ?? random();
      const phase = random() * Math.PI * 2;
      const sideOffset = (random() + random() + random() - 1.5) * band.width * height;
      let frame = bandFrame(bandIndex, progress, 0);
      let x = frame.x + frame.normalX * sideOffset;
      let y = frame.y + frame.normalY * sideOffset;
      for (let attempt = 0; attempt < 36 && isQuietTextZone(x, y); attempt += 1) {
        progress = random();
        frame = bandFrame(bandIndex, progress, 0);
        x = frame.x + frame.normalX * sideOffset;
        y = frame.y + frame.normalY * sideOffset;
      }
      const speedScale = 0.78 + random() * 0.46;
      const initialSpeed = band.speed * speedScale;
      return {
        band: bandIndex,
        progress,
        sideOffset,
        sideDrift: (random() - 0.5) * 8,
        x,
        y,
        vx: frame.tangentX * initialSpeed,
        vy: frame.tangentY * initialSpeed,
        size: 0.78 + random() * 0.18,
        opacity: 0.68 + random() * 0.16,
        phase,
        speedScale,
      };
    };

    const particleOpacity = (p, x = p.x, y = p.y) => {
      // Keep the headline readable while ensuring the field remains visible there.
      const quiet = isQuietTextZone(x, y) ? 0.72 : 1;
      const depth = 0.9 + Math.sin(p.phase + time * 0.28) * 0.05;
      return p.opacity * quiet * depth * (lightTheme ? 0.5 : 1);
    };

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';
      for (const p of particles) {
        ctx.fillStyle = `rgba(${color}, ${particleOpacity(p)})`;
        ctx.fillRect(p.x, p.y, 1.8, 1.8);
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      randomState = ((Math.floor(width) * 374761393) ^ (Math.floor(height) * 668265263)) >>> 0;
      const count = 420;
      particles.length = 0;
      const bandRatios = [0.28, 0.32, 0.28, 0.12];
      let remaining = count;
      for (let bandIndex = 0; bandIndex < bands.length; bandIndex += 1) {
        const bandCount = bandIndex === bands.length - 1 ? remaining : Math.round(count * bandRatios[bandIndex]);
        remaining -= bandCount;
        for (let i = 0; i < bandCount; i += 1) {
          // Jitter each evenly spaced slot within its own interval: each stream reads as a
          // formation, while neighboring particles never fall into a rigid dotted line.
          const progress = (i + random() * 0.86) / bandCount;
          particles.push(makeParticle(bandIndex, progress));
        }
      }
      drawStatic();
    };

    const draw = (timestamp) => {
      if (!animate) return;
      const dt = lastTime ? Math.min((timestamp - lastTime) / 1000, 0.032) : 0.016;
      lastTime = timestamp;
      time += dt;
      pointerEnergy *= Math.exp(-dt * 1.05);
      pointer.x += (pointer.targetX - pointer.x) * 0.16;
      pointer.y += (pointer.targetY - pointer.y) * 0.16;
      pointer.vx *= Math.exp(-dt * 3.8);
      pointer.vy *= Math.exp(-dt * 3.8);
      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, width, height);

      const pointerSpeed = Math.min(Math.hypot(pointer.vx, pointer.vy), 1200);
      const headingLength = Math.max(Math.hypot(pointer.vx, pointer.vy), 1);
      const headingX = pointer.vx / headingLength;
      const headingY = pointer.vy / headingLength;
      const radius = Math.min(520, Math.max(320, width * 0.36));

      for (const p of particles) {
        const band = bands[p.band];
        const pathLength = band.axis === 'x' ? width : height;
        const nextProgress = p.progress + band.direction * p.speed * p.speedScale * dt / Math.max(pathLength, 1);
        const wrapped = nextProgress < 0 || nextProgress >= 1;
        p.progress = ((nextProgress % 1) + 1) % 1;
        p.sideOffset += p.sideDrift * dt;
        p.sideOffset = clamp(p.sideOffset, -band.width * height * 1.4, band.width * height * 1.4);
        const path = bandFrame(p.band, p.progress);
        const targetX = path.x + path.normalX * p.sideOffset;
        const targetY = path.y + path.normalY * p.sideOffset;
        if (wrapped) {
          p.x = targetX;
          p.y = targetY;
          p.vx = path.tangentX * band.speed * p.speedScale;
          p.vy = path.tangentY * band.speed * p.speedScale;
        }

        const rawField = flowPotential(p.x + p.phase * 7, p.y - p.phase * 5);
        const field = Number.isFinite(rawField.dx) && Number.isFinite(rawField.dy)
          ? rawField
          : { dx: 0, dy: 0 };
        const normalError = (p.x - targetX) * path.normalX + (p.y - targetY) * path.normalY;
        let flowX = path.tangentX * band.speed * p.speedScale
          + path.normalX * clamp(-normalError * 0.82, -38, 38)
          + field.dy * 2200;
        let flowY = path.tangentY * band.speed * p.speedScale
          + path.normalY * clamp(-normalError * 0.82, -38, 38)
          - field.dx * 2200;

        if (pointer.active && finePointer.matches && pointerEnergy > 0.005) {
          const dx = p.x - pointer.x;
          const dy = p.y - pointer.y;
          const distance = Math.hypot(dx, dy);
          if (distance < radius) {
            const radial = 1 - distance / radius;
            const influence = Math.pow(radial, 1.3) * pointerEnergy;
            const inverseDistance = 1 / Math.max(distance, 1);
            const tangentX = -dy * inverseDistance;
            const tangentY = dx * inverseDistance;
            const directionalTurn = 1 + 0.28 * (headingX * dy - headingY * dx) * inverseDistance;
            const swirl = (190 + pointerSpeed * 0.12) * influence * directionalTurn;
            const wake = Math.min(pointerSpeed * 0.12, 110) * influence;
            flowX += tangentX * swirl + headingX * wake;
            flowY += tangentY * swirl + headingY * wake;
          }
        }

        const response = Math.min(1, dt * 4.8);
        p.vx += (flowX * p.speedScale - p.vx) * response;
        p.vy += (flowY * p.speedScale - p.vy) * response;
        const velocity = Math.hypot(p.vx, p.vy);
        if (velocity > 140) {
          p.vx = (p.vx / velocity) * 140;
          p.vy = (p.vy / velocity) * 140;
        }
        p.x += p.vx * dt;
        p.y += p.vy * dt;

        if (!Number.isFinite(p.x) || !Number.isFinite(p.y)
          || !Number.isFinite(p.vx) || !Number.isFinite(p.vy)
          || p.x < -24 || p.x > width + 24 || p.y < -24 || p.y > height + 24) {
          Object.assign(p, makeParticle(p.band));
        }

        const alpha = particleOpacity(p);
        ctx.fillStyle = `rgba(${color}, ${alpha})`;
        ctx.fillRect(p.x, p.y, 1.8, 1.8);
      }

      frame = window.requestAnimationFrame(draw);
    };

    const onPointerMove = (event) => {
      const x = event.clientX;
      const y = event.clientY;
      if (!pointer.active) {
        pointer.x = pointer.targetX = pointer.lastX = x;
        pointer.y = pointer.targetY = pointer.lastY = y;
        pointer.lastMoveTime = event.timeStamp || performance.now();
        pointer.active = true;
        pointerEnergy = 0.7;
        return;
      }
      const moveTime = event.timeStamp || performance.now();
      const elapsed = clamp((moveTime - pointer.lastMoveTime) / 1000, 1 / 120, 0.1);
      const sampleVx = clamp((x - pointer.lastX) / elapsed, -1800, 1800);
      const sampleVy = clamp((y - pointer.lastY) / elapsed, -1800, 1800);
      pointer.vx += (sampleVx - pointer.vx) * 0.48;
      pointer.vy += (sampleVy - pointer.vy) * 0.48;
      pointer.lastX = x;
      pointer.lastY = y;
      pointer.lastMoveTime = moveTime;
      pointer.targetX = x;
      pointer.targetY = y;
      pointerEnergy = Math.min(1, pointerEnergy + 0.32);
    };

    const onPointerLeave = () => { pointer.active = false; };
    const onMotionChange = () => {
      animate = !reducedMotion.matches;
      if (finePointer.matches && !reducedMotion.matches) {
        window.addEventListener('pointermove', onPointerMove, { passive: true });
      } else {
        window.removeEventListener('pointermove', onPointerMove);
      }
      if (animate && !frame) frame = window.requestAnimationFrame(draw);
      if (!animate) {
        window.cancelAnimationFrame(frame);
        frame = 0;
        drawStatic();
      }
    };

    const themeObserver = new MutationObserver(() => {
      lightTheme = document.documentElement.classList.contains('light');
      color = lightTheme ? '93, 121, 0' : '215, 255, 79';
      if (!animate) drawStatic();
    });

    lightTheme = document.documentElement.classList.contains('light');
    color = lightTheme ? '93, 121, 0' : '215, 255, 79';
    resize();
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('resize', resize, { passive: true });
    if (finePointer.matches && !reducedMotion.matches) window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('blur', onPointerLeave);
    document.addEventListener('pointerleave', onPointerLeave);
    reducedMotion.addEventListener('change', onMotionChange);
    finePointer.addEventListener('change', onMotionChange);
    if (animate) frame = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('blur', onPointerLeave);
      document.removeEventListener('pointerleave', onPointerLeave);
      reducedMotion.removeEventListener('change', onMotionChange);
      finePointer.removeEventListener('change', onMotionChange);
      themeObserver.disconnect();
    };
  }, []);

  return createPortal(<canvas ref={canvasRef} className="particle-background" aria-hidden="true" />, document.body);
}
