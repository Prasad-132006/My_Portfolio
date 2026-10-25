import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { isConfiguredUrl, withHttps } from '../utils/links';
import { reveal, useMotionSafe } from '../utils/motion';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const { initial, viewport } = useMotionSafe();

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.message.trim()) {
      errs.message = 'Please include a message.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name}\n${formData.email}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  const fieldClass = (hasError) =>
    `w-full border-0 border-b bg-transparent px-0 py-3 text-sm text-ink placeholder:text-muted/70 focus:outline-none focus:ring-0 ${
      hasError ? 'border-red-500' : 'border-line focus:border-accent'
    }`;

  const github = isConfiguredUrl(personalInfo.github) ? withHttps(personalInfo.github) : null;
  const linkedin = isConfiguredUrl(personalInfo.linkedin) ? withHttps(personalInfo.linkedin) : null;
  const leetcode = isConfiguredUrl(personalInfo.leetcode) ? withHttps(personalInfo.leetcode) : null;

  return (
    <section id="contact" className="section-space border-t border-line">
      <div className="page-pad">
        <p className="label">06 / Contact</p>
        <motion.h2
          variants={reveal}
          initial={initial}
          whileInView="visible"
          viewport={viewport}
          className="mt-6 max-w-[12ch] text-[clamp(2.4rem,7vw,5.2rem)] font-medium leading-[0.95] tracking-[-0.04em]"
        >
          LET&apos;S BUILD SOMETHING USEFUL.
        </motion.h2>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div
            variants={reveal}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-5"
          >
            <p className="max-w-sm text-muted leading-relaxed">
              Have a project, role, or idea? Write directly or use the form — it opens your email client
              with the message ready to send.
            </p>

            {personalInfo.email && !personalInfo.email.includes('PLACEHOLDER') && (
              <a href={`mailto:${personalInfo.email}`} className="link-underline mt-8 text-lg tracking-tight">
                {personalInfo.email}
              </a>
            )}

            <div className="mt-10 flex flex-col items-start gap-4">
              {github && (
                <a href={github} target="_blank" rel="noopener noreferrer" className="link-underline label">
                  GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="link-underline label">
                  LinkedIn <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {leetcode && (
                <a href={leetcode} target="_blank" rel="noopener noreferrer" className="link-underline label">
                  LeetCode <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </motion.div>

          <motion.form
            variants={reveal}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-8 lg:col-span-7"
          >
            <div>
              <label htmlFor="contact-name" className="label">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className={fieldClass(errors.name)}
              />
              {errors.name && <p className="mt-2 text-xs text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="contact-email" className="label">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className={fieldClass(errors.email)}
              />
              {errors.email && <p className="mt-2 text-xs text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="label">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="What should we build?"
                className={`${fieldClass(errors.message)} resize-none`}
              />
              {errors.message && <p className="mt-2 text-xs text-red-500">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="label bg-accent px-6 py-3 text-on-accent transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Open email to send
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
