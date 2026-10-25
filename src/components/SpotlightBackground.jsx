import { useEffect, useRef } from 'react';

/** A decorative page-wide light that stays independent from React renders. */
export default function SpotlightBackground() {
  const layerRef = useRef(null);

  useEffect(() => {
    const layer = layerRef.current;
    if (!layer) return undefined;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 768px)');
    let frame = 0;
    let x = window.innerWidth * 0.5;
    let y = window.innerHeight * 0.32;
    let targetX = x;
    let targetY = y;
    let active = false;

    const render = () => {
      x += (targetX - x) * 0.09;
      y += (targetY - y) * 0.09;
      layer.style.setProperty('--spotlight-x', `${x}px`);
      layer.style.setProperty('--spotlight-y', `${y}px`);
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.5) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    const onPointerMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const enable = () => {
      const shouldTrack = finePointer.matches && !reducedMotion.matches;
      layer.classList.toggle('spotlight-tracking', shouldTrack);
      if (shouldTrack && !active) {
        window.addEventListener('pointermove', onPointerMove, { passive: true });
        active = true;
      } else if (!shouldTrack && active) {
        window.removeEventListener('pointermove', onPointerMove);
        active = false;
        window.cancelAnimationFrame(frame);
        frame = 0;
      }
    };

    enable();
    finePointer.addEventListener('change', enable);
    reducedMotion.addEventListener('change', enable);
    return () => {
      finePointer.removeEventListener('change', enable);
      reducedMotion.removeEventListener('change', enable);
      window.removeEventListener('pointermove', onPointerMove);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={layerRef} className="spotlight-background" aria-hidden="true" />;
}
