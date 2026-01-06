'use client';
import { motion } from "framer-motion";
import { Mail, User, MessageSquare } from "lucide-react";
import emailjs from "emailjs-com";
import { useState } from "react";
import FaultyTerminal from '../../components/ui/FaultyTerminal';

export default function ContactClient() {
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
    <section className="relative min-h-screen pt-32 px-6 bg-gradient-to-b from-gray-900 to-gray-800 text-gray-900 dark:text-gray-100">
      <div className="w-full h-full absolute inset-0 z-0 pointer-events-none">
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
      <div className="relative max-w-4xl mx-auto z-10 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get in Touch</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto mb-10">
            Have a project in mind or just want to connect? Drop me a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg text-white"
          >
            <h2 className="text-2xl font-bold mb-6">Let&apos;s Connect</h2>
            <p className="text-blue-100 mb-8">
              I&apos;m always open to discussing new opportunities, creative projects, or potential collaborations.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-blue-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <a href="mailto:lordkign1@gmail.com" className="text-blue-200 hover:text-white transition-colors">
                    lordkign1@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <User className="text-blue-400 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Location</h3>
                  <p className="text-blue-200">Nigeria</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="font-semibold text-lg mb-4">Follow Me</h3>
              <div className="flex space-x-6">
                <a
                  href="https://github.com/lordkign2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/umeh-kingsley-43a322369"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.form
              onSubmit={sendEmail}
              className="flex flex-col gap-6 bg-white/10 dark:bg-black/20 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-lg"
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
                  className="w-full pl-10 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                  className="w-full pl-10 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-400" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full pl-10 p-4 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all font-bold disabled:opacity-50 disabled:cursor-not-allowed cursor-target shadow-lg hover:shadow-xl"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {status && (
                <motion.p
                  className={`mt-2 text-sm font-medium ${status.includes('Thanks') ? 'text-green-400' : 'text-red-400'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {status}
                </motion.p>
              )}
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}