"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sendContactEmail, EmailFormData } from "@/lib/email";
import AnimateIn from "@/components/ui/AnimateIn";

type Status = "idle" | "loading" | "success" | "error";

type FormErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(form: EmailFormData): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) {
    errors.name = "El nombre es obligatorio.";
  }
  if (!form.email.trim()) {
    errors.email = "El email es obligatorio.";
  } else if (!EMAIL_REGEX.test(form.email.trim())) {
    errors.email = "Ingresá un email válido (ej: nombre@dominio.com).";
  }
  if (!form.message.trim()) {
    errors.message = "El mensaje es obligatorio.";
  } else if (form.message.trim().length < 10) {
    errors.message = "El mensaje debe tener al menos 10 caracteres.";
  }
  return errors;
}

export default function ContactSection() {
  const [form, setForm] = useState<EmailFormData>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Revalidate field as user types (only if already touched)
    if (touched[name]) {
      setErrors(validate({ ...form, [name]: value }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Mark all fields as touched and run full validation
    setTouched({ name: true, email: true, message: true });
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus("loading");
    try {
      await sendContactEmail(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
      setErrors({});
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-white border rounded-xl px-4 py-3.5 text-sm text-black placeholder-gray-400 outline-none transition-all duration-200 ${
      touched[field] && errors[field]
        ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/10"
        : "border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/10"
    }`;

  const contactItems = [
    {
      label: "Email",
      value: "muttolab@gmail.com",
      href: "mailto:muttolab@gmail.com",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      value: "@muttolab",
      href: "https://instagram.com/muttolab",
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <rect x="2" y="2" width="20" height="20" rx="5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="4" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="contacto" className="bg-secondary/20">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left: copy */}
          <AnimateIn direction="left">
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">
              Hablemos
            </span>
            <h2 className="section-title mt-3 mb-6">
              ¿Listo para dar el{" "}
              <span style={{ color: "#ff6634" }}>siguiente paso</span>?
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-10">
              Contanos sobre tu proyecto y te ayudamos a encontrar la mejor
              solución tecnológica para tu negocio. Respondemos en menos de 24
              horas.
            </p>

            <div className="flex flex-col gap-5">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 group w-fit"
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-primary shrink-0 transition-colors duration-200 group-hover:bg-primary group-hover:text-white"
                    style={{ background: "#ffece5" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-black group-hover:text-primary transition-colors duration-200">
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </AnimateIn>

          {/* Right: form */}
          <AnimateIn direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              noValidate
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col gap-5"
            >
              {/* Name */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Nombre <span className="text-primary">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Tu nombre"
                  className={inputClass("name")}
                />
                <AnimatePresence>
                  {touched.name && errors.name && (
                    <motion.p
                      key="name-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Email <span className="text-primary">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="tu@email.com"
                  className={inputClass("email")}
                />
                <AnimatePresence>
                  {touched.email && errors.email && (
                    <motion.p
                      key="email-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Message */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Mensaje <span className="text-primary">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  placeholder="Contanos sobre tu proyecto..."
                  rows={5}
                  className={`${inputClass("message")} resize-none`}
                />
                <AnimatePresence>
                  {touched.message && errors.message && (
                    <motion.p
                      key="message-error"
                      initial={{ opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -4 }}
                      transition={{ duration: 0.2 }}
                      className="mt-1.5 text-xs text-red-500 flex items-center gap-1"
                    >
                      <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                      </svg>
                      {errors.message}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full justify-center text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {status === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  "Enviar mensaje"
                )}
              </button>

              <AnimatePresence>
                {status === "success" && (
                  <motion.p
                    key="success"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-green-600 text-center font-medium"
                  >
                    ¡Mensaje enviado! Te respondemos pronto 🎉
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    key="error"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-red-500 text-center font-medium"
                  >
                    Hubo un error. Por favor, intentá de nuevo.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </AnimateIn>

        </div>
      </div>
    </section>
  );
}
