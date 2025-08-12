"use client";

import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";
import TargetCursor from '../../components/ui/TargetCursor';
import FaultyTerminal from '../../components/ui/FaultyTerminal';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      )
      .then(
        () => {
          setStatus("✅ Thanks for the message, I'll be in touch!");
          setFormData({ name: "", email: "", message: "" });
        },
        () => {
          setStatus("❌ Failed to send message. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <section className="relative min-h-screen  pt-32 px-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="w-full h-full absolute inset-0 z-0 pointer-events-none ">
  <FaultyTerminal
    scale={1.5}
    gridMul={[2, 1]}
    digitSize={1.2}
    timeScale={1}
    pause={false}
    scanlineIntensity={1}
    glitchAmount={1}
    flickerAmount={1}
    noiseAmp={1}
    chromaticAberration={0}
    dither={0}
    curvature={0}
    tint="#B6E1FA"
    mouseReact={true}
    mouseStrength={0.5}
    pageLoadAnimation={false}
    brightness={0.4}
  />
</div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor={true}
      />
      <div className="relative max-w-3xl mx-auto text-center z-9">
       <div className="text-white">
       <motion.h1 className="text-4xl font-bold mb-6 text-white">Get in Touch</motion.h1>
        <motion.p className="text-lg  text-white mb-8">
          Have a project in mind or just want to connect? Drop me a message below.
        </motion.p>
       </div>

        <motion.form
          onSubmit={sendEmail}
          className="flex flex-col pb-10 gap-4 max-w-md mx-auto bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 rounded-lg p-6 shadow-lg"
        >
          {/* Name */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            />
          </div>

          {/* Message */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-gray-400" />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full pl-10 p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white mb-10 py-3 rounded-lg hover:bg-blue-700 transition font-semibold disabled:opacity-50 disabled:cursor-not-allowed cursor-target"
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>

          {status && <p className="mt-2 text-sm">{status}</p>}
        </motion.form>
      </div>
    </section>
  );
}
