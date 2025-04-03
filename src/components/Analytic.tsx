"use client";
import { motion } from "framer-motion";

export function StatsSection() {
    const stats = [
        { number: "50+", label: "Projects" },
        { number: "200+", label: "Happy Clients" },
        { number: "500+", label: "Reviews" },
        { number: "75+", label: "Awards" },
    ];

    return (
        <section className="relative bg-[#0B0F1A] py-24 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-[#111827] to-[#0B0F1A] opacity-90" />

            <div className="container mx-auto px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 text-center"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative space-y-4 p-8 rounded-xl bg-[#111827]/60 backdrop-blur-lg border border-gray-700 shadow-xl transition-all duration-500 hover:scale-105 hover:shadow-blue-500/50"
                        >
                            {/* Glowing Number */}
                            <h3 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#93C5FD] to-[#60A5FA] drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-all duration-500">
                                {stat.number}
                            </h3>

                            {/* Label */}
                            <p className="text-gray-300 text-lg md:text-xl font-semibold tracking-wide uppercase group-hover:text-white transition-all duration-300">
                                {stat.label}
                            </p>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 bg-[#3B82F6]/10 group-hover:bg-[#3B82F6]/30 blur-2xl opacity-20 rounded-xl transition-all duration-500 -z-10" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Floating Light Effects */}
            <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#3B82F6]/20 blur-[180px] opacity-30 -z-10 animate-pulse" />
            <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-[#60A5FA]/20 blur-[180px] opacity-30 -z-10 animate-pulse" />

            {/* Subtle Animated Background */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-cyan-400/20 to-transparent blur-2xl opacity-20"
                animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            />
        </section>
    );
}
