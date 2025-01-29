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
        <section className="relative bg-[#0B0F1A] py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-[#1a1d24] to-[#1a1d24] opacity-80" />

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-16"
                >
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: index * 0.3 }}
                            viewport={{ once: true }}
                            className="group text-center space-y-4 relative"
                        >
                            <h3 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#F1F5F9] to-[#F3F4F6] group-hover:from-[#60A5FA] group-hover:to-[#3B82F6] transition-all duration-500">
                                {stat.number}
                            </h3>
                            <p className="text-[#D1D5DB] text-lg md:text-xl font-semibold opacity-90">
                                {stat.label}
                            </p>
                            <div className="absolute inset-0 bg-[#3B82F6]/5 group-hover:bg-[#3B82F6]/15 blur-xl opacity-20 rounded-lg transition-all duration-300 -z-10" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-[#3B82F6]/20 blur-[150px] opacity-25 -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#60A5FA]/20 blur-[150px] opacity-25 -z-10 animate-pulse" />
        </section>
    );
}
