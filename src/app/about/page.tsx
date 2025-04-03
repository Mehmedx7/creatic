"use client";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import Header from "@/components/Header";

export default function AboutPage() {
    return (
        <>
            <Header />

            {/* HERO SECTION */}
            <section className="relative bg-[#090E21] text-white py-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
                {/* Neon Aura Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent blur-[160px] -z-10" />
                <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-blue-500/20 blur-[120px] animate-pulse -z-10" />
                <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] animate-pulse -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center space-y-6"
                >
                    <h1 className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        Reimagining Possibilities
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        At the intersection of **technology and creativity**, we engineer solutions that **transcend the ordinary**.
                        Our journey is fueled by innovation, guided by expertise, and driven by a passion for excellence.
                    </p>
                </motion.div>
            </section>

            {/* WHO WE ARE SECTION */}
            <section className="relative bg-[#0B0F1A] py-32 px-6 sm:px-12 lg:px-24 text-white overflow-hidden">
                {/* Background Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/10 to-transparent blur-[160px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto text-center space-y-12"
                >
                    <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                        Who We Are
                    </h2>
                    <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        We are a team of visionaries, designers, and engineers who believe in crafting solutions that redefine **efficiency, engagement, and experience**.
                        By harnessing the power of next-gen technologies, we transform ideas into **scalable and dynamic** realities.
                    </p>

                    {/* Animated Feature Cards */}
                    <div className="grid md:grid-cols-3 gap-10">
                        {[
                            { title: "Innovation", desc: "Redefining the boundaries of what's possible." },
                            { title: "Precision", desc: "Crafting seamless experiences with attention to detail." },
                            { title: "Sustainability", desc: "Building solutions that stand the test of time." }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.06 }}
                                transition={{ duration: 0.3 }}
                                className="p-8 bg-[#111827] rounded-2xl shadow-xl text-center transform transition-all"
                            >
                                <h3 className="text-2xl font-semibold text-blue-400">{feature.title}</h3>
                                <p className="text-gray-400 mt-3">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* OUR PHILOSOPHY SECTION */}
            <section className="relative bg-[#0D1324] text-white py-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
                {/* Soft Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 via-cyan-400/15 to-transparent blur-[150px] -z-10" />

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto text-center space-y-12"
                >
                    <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                        Our Philosophy
                    </h2>
                    <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                        We believe that the future belongs to those who **dare to innovate**.
                        Our philosophy is centered on **pushing boundaries, crafting unique experiences, and delivering solutions that inspire.**
                    </p>

                    {/* Animated Key Metrics */}
                    <div className="grid md:grid-cols-3 gap-12">
                        {[
                            { value: "10+", label: "Years of Experience" },
                            { value: "500+", label: "Projects Delivered" },
                            { value: "100%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.07 }}
                                transition={{ duration: 0.3 }}
                                className="p-10 bg-[#1A2238] rounded-2xl shadow-lg text-center transform transition-all"
                            >
                                <h3 className="text-4xl font-extrabold text-blue-400">{stat.value}</h3>
                                <p className="text-gray-400 mt-3">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            <Footer />
        </>
    );
}
