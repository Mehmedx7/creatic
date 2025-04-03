"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export function TestimonialsSection() {
  return (
    <section className="relative py-24 bg-[#0B0F1A] overflow-hidden px-6 sm:px-12 lg:px-24">
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 right-1/4 w-[250px] h-[250px] bg-blue-500/10 blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[250px] h-[250px] bg-cyan-400/10 blur-[120px] -z-10 animate-pulse" />

      <div className="container mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-6 mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight">
            WHAT <span className="text-blue-400">OUR</span> CLIENTS SAY?
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-12"
        >
          {[
            {
              text: "This agency is truly one of a kind. They have transformed our brand and online presence like no one else!",
              name: "John Doe",
              title: "CEO, Amazing Corp",
            },
            {
              text: "I thought being on the 10th page of Google was a joke... until they put us on the 1st. Truly magical!",
              name: "Jane Smith",
              title: "Founder, Unbelievable Solutions",
            },
            {
              text: "Working with this team has been a game-changer. They bring new ideas and energy that keep us ahead of the competition.",
              name: "Alice Cooper",
              title: "Marketing Director, Global Innovations",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-[#1E2530] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-2 relative"
              initial={{ opacity: 0, y: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Quote Icons */}
              <div className="absolute top-4 left-4 text-blue-400 text-4xl">
                <FaQuoteLeft />
              </div>
              <div className="absolute bottom-4 right-4 text-blue-400 text-4xl">
                <FaQuoteRight />
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-300 text-lg italic mb-6">{testimonial.text}</p>
              <p className="mt-4 text-white font-bold text-xl">{testimonial.name}</p>
              <p className="text-gray-400 text-sm">{testimonial.title}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Highlighted Testimonial */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-3xl mx-auto text-center text-gray-400 mt-20"
        >
          <p className="italic text-xl leading-relaxed">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: 1,
                ease: "easeInOut",
              }}
              className="text-blue-400"
            >
              &quot;Their creativity is beyond what we expected—always one step ahead.&quot;
            </motion.span>
          </p>
          <motion.div
            className="mt-4 text-blue-400 text-lg font-semibold"
            animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
          >
            - Mark Anderson, CEO at Future Tech
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Animated Glow Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-transparent blur-3xl opacity-30"
        animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
    </section>
  );
}
