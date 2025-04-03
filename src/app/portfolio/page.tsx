"use client";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
    {
        title: "AI-Powered SaaS",
        description: "A cutting-edge AI platform revolutionizing the industry.",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80", // New: AI/tech-themed image
        link: "#"
    },
    {
        title: "E-Commerce Revolution",
        description: "Next-gen online shopping experience with stunning UI.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80", // Kept from my previous suggestion
        link: "#"
    },
    {
        title: "Finance Dashboard",
        description: "Advanced analytics and financial tracking solutions.",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80", // New: Financial charts/analytics
        link: "#"
    },
    {
        title: "Creative Portfolio",
        description: "Minimal yet powerful design for artists & agencies.",
        image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?w=800&q=80", // Unchanged, assumed working
        link: "#"
    },
    {
        title: "Tech Blog & News",
        description: "Latest tech trends & news platform with sleek UI.",
        image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80", // Unchanged, assumed working
        link: "#"
    },
    {
        title: "Mobile App UX",
        description: "Innovative UI/UX for next-gen mobile applications.",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&q=80", // Unchanged, assumed working
        link: "#"
    }
];

export default function PortfolioPage() {
    return (
        <>
            <Header />
            <main className="relative bg-[#090E1A] text-white py-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
                {/* Background Aura Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-cyan-500/10 to-transparent blur-[160px] -z-10" />
                <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-blue-500/30 blur-[140px] animate-pulse -z-10" />
                <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-cyan-400/20 blur-[140px] animate-pulse -z-10" />

                {/* HERO SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center space-y-6"
                >
                    <h1 className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg">
                        Our Masterpieces
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        **From concept to reality** – Explore our finest projects that define excellence and innovation.
                    </p>
                </motion.div>

                {/* PORTFOLIO GRID */}
                <section className="relative bg-[#0B1224] py-32 mt-16 px-6 sm:px-12 lg:px-24 text-white overflow-hidden rounded-lg shadow-xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="max-w-6xl mx-auto text-center space-y-12"
                    >
                        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg">
                            Featured Projects
                        </h2>
                        <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            Our portfolio showcases **high-performance, beautifully designed** projects that push boundaries.
                        </p>

                        {/* Masonry Grid */}
                        <div className="grid md:grid-cols-3 gap-10">
                            {projects.map((project, index) => (
                                <motion.a
                                    key={index}
                                    href={project.link}
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="group relative overflow-hidden rounded-xl shadow-lg bg-[#111a33] transform transition-all border border-transparent hover:border-blue-400"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        width={800}
                                        height={600}
                                        className="w-full h-56 object-cover transition-all group-hover:opacity-75"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />
                                    <div className="absolute bottom-6 left-6 text-left">
                                        <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
                                        <p className="text-gray-300 mt-1">{project.description}</p>
                                    </div>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </section>

                {/* CLIENT TESTIMONIALS */}
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
                            What Our Clients Say
                        </h2>
                        <p className="text-lg text-gray-400 max-w-4xl mx-auto leading-relaxed">
                            **Real impact, real success** – Here’s what our clients say about working with us.
                        </p>

                        {/* Testimonials */}
                        <div className="grid md:grid-cols-3 gap-12">
                            {[
                                { name: "John Doe", feedback: "Absolutely stunning work! The UI is flawless." },
                                { name: "Sarah Smith", feedback: "Their attention to detail is unmatched. A+ service!" },
                                { name: "David Wilson", feedback: "Our project exceeded expectations—truly world-class." }
                            ].map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ scale: 1.07 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-10 bg-[#1A2248] rounded-2xl shadow-lg text-center transform transition-all border border-transparent hover:border-cyan-400"
                                >
                                    <p className="text-gray-300 italic">&quot;{testimonial.feedback}&quot;</p>
                                    <h3 className="text-lg font-bold text-blue-400 mt-4">{testimonial.name}</h3>
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
