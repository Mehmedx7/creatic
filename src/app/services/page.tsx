"use client";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

export default function ServicesPage() {
    return (
        <>
            <Header />
            <main className="relative bg-[#080E1A] text-white py-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
                {/* Enhanced Aura & Glow Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/15 via-cyan-500/10 to-transparent blur-[180px] -z-10" />
                <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-blue-500/20 blur-[130px] animate-pulse -z-10" />
                <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-400/20 blur-[130px] animate-pulse -z-10" />

                {/* HERO SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center space-y-6"
                >
                    <h1 className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg">
                        Transform Your Vision
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        We craft **cutting-edge solutions** tailored to your needs—unlocking potential, driving growth, and delivering results.
                    </p>
                </motion.div>

                {/* SERVICES GRID */}
                <section className="relative bg-[#0B1224] py-32 mt-16 px-6 sm:px-12 lg:px-24 text-white overflow-hidden rounded-lg shadow-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto text-center space-y-12"
                    >
                        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg">
                            Our Expertise
                        </h2>
                        <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            We merge **innovation, strategy, and technology** to build impactful solutions that drive business success.
                        </p>

                        {/* Animated Feature Cards */}
                        <div className="grid md:grid-cols-3 gap-10">
                            {[
                                { title: "Web Development", desc: "Modern, scalable, and lightning-fast web solutions." },
                                { title: "UI/UX Design", desc: "Designing seamless, user-centric digital experiences." },
                                { title: "Brand Strategy", desc: "Crafting unique brand identities that stand out." },
                                { title: "E-Commerce Solutions", desc: "Building optimized platforms for high conversions." },
                                { title: "SEO & Growth", desc: "Maximizing online visibility and audience reach." },
                                { title: "Custom Software", desc: "Bespoke solutions tailored to business growth." }
                            ].map((service, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.07 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-8 bg-[#111a33] rounded-2xl shadow-2xl text-center transform transition-all border border-transparent hover:border-blue-400"
                                >
                                    <h3 className="text-2xl font-semibold text-blue-400 drop-shadow-md">{service.title}</h3>
                                    <p className="text-gray-400 mt-3">{service.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* WHY CHOOSE US SECTION */}
                <section className="relative bg-[#0E152A] text-white py-32 px-6 sm:px-12 lg:px-24 overflow-hidden rounded-lg shadow-xl mt-16">
                    <div className="absolute inset-0 bg-gradient-to-tl from-blue-500/20 via-cyan-400/15 to-transparent blur-[150px] -z-10" />

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto text-center space-y-12"
                    >
                        <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg">
                            Why Choose Us?
                        </h2>
                        <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            We **don’t just offer services—we engineer transformations** that drive measurable impact.
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
                                    className="p-10 bg-[#1A2248] rounded-2xl shadow-lg text-center transform transition-all border border-transparent hover:border-cyan-400"
                                >
                                    <h3 className="text-4xl font-extrabold text-blue-400 drop-shadow-lg">{stat.value}</h3>
                                    <p className="text-gray-400 mt-3">{stat.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
