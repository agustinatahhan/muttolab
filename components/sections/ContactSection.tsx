"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sendContactEmail, EmailFormData } from "@/lib/email";
import AnimateIn from "@/components/ui/AnimateIn";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const [form, setForm] = useState<EmailFormData>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await sendContactEmail(form);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm text-black placeholder-gray-400 outline-none transition-all duration-200 focus:border-primary focus:ring-2 focus:ring-primary/10";

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
              ¿Lista para dar el{" "}
              <span style={{ color: "#ff6634" }}>siguiente paso</span>?
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-10">
              Contanos sobre tu proyecto y te ayudamos a encontrar la mejor
              solución tecnológica para tu negocio. Respondemos en menos de 24
              horas.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-5">
              {[
                {
                  label: "Email",
                  value: "muttolab@gmail.com",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  value: "@muttolab",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-primary shrink-0"
                    style={{ background: "#ffece5" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">{item.label}</p>
                    <p className="text-sm font-medium text-black">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateIn>

          {/* Right: form */}
          <AnimateIn direction="right" delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 flex flex-col gap-5"
            >
              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Mensaje
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Contanos sobre tu proyecto..."
                  required
                  rows={5}
                  className={`${inputClass} resize-none`}
                />
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

              {/* Feedback */}
              {status === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-600 text-center font-medium"
                >
                  ¡Mensaje enviado! Te respondemos pronto 🎉
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-500 text-center font-medium"
                >
                  Hubo un error. Por favor, intentá de nuevo.
                </motion.p>
              )}
            </form>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
