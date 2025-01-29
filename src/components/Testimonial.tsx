"use client";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

export function TestimonialsSection() {
  return (
    <section className="relative py-20 bg-[#0B0F1A] overflow-hidden">
      <div className="absolute top-1/4 right-1/4 w-[200px] h-[200px] bg-blue-500/10 blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 left-1/4 w-[200px] h-[200px] bg-cyan-400/10 blur-[120px] -z-10 animate-pulse" />

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            WHAT <span className="text-blue-400">OUR</span> CLIENTS SAY?
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8 sm:gap-16"
        >
          <motion.div
            className="w-full sm:w-1/3 bg-[#1E2530] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-[5deg] relative"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-4 left-4 text-blue-400 text-5xl">
              <FaQuoteLeft />
            </div>
            <div className="absolute bottom-4 right-4 text-blue-400 text-5xl">
              <FaQuoteRight />
            </div>
            <p className="text-gray-300 text-lg italic mb-4">
              This agency is truly one of a kind. They have transformed our brand and online presence like no one else!
            </p>
            <p className="mt-4 text-white font-bold">John Doe</p>
            <p className="text-gray-400">CEO, Amazing Corp</p>
          </motion.div>

          <motion.div
            className="w-full sm:w-1/3 bg-[#1E2530] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-[5deg] relative"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-4 left-4 text-blue-400 text-5xl">
              <FaQuoteLeft />
            </div>
            <div className="absolute bottom-4 right-4 text-blue-400 text-5xl">
              <FaQuoteRight />
            </div>
            <p className="text-gray-300 text-lg italic mb-4">
              I thought being on the 10th page of Google was a joke... until they put us on the 1st. Truly magical!
            </p>
            <p className="mt-4 text-white font-bold">Jane Smith</p>
            <p className="text-gray-400">Founder, Unbelievable Solutions</p>
          </motion.div>

          <motion.div
            className="w-full sm:w-1/3 bg-[#1E2530] p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:rotate-[5deg] relative"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute top-4 left-4 text-blue-400 text-5xl">
              <FaQuoteLeft />
            </div>
            <div className="absolute bottom-4 right-4 text-blue-400 text-5xl">
              <FaQuoteRight />
            </div>
            <p className="text-gray-300 text-lg italic mb-4">
              Working with this team has been a game-changer. They bring new ideas and energy that keep us ahead of the competition.
            </p>
            <p className="mt-4 text-white font-bold">Alice Cooper</p>
            <p className="text-gray-400">Marketing Director, Global Innovations</p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="max-w-3xl mx-auto text-center text-gray-400 mt-16"
        >
          <p className="italic text-lg">
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
              Their creativity is beyond what we expected—always one step ahead.
            </motion.span>
            <motion.div
              className="mt-4 text-blue-400 text-lg"
              animate={{ scale: [1, 1.05, 1], opacity: [0.8, 1, 0.8] }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
              }}
            >
              - Mark Anderson, CEO at Future Tech
            </motion.div>
          </p>
        </motion.div>
      </div>

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-transparent blur-3xl opacity-30"
        animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
      />
    </section>
  );
}
