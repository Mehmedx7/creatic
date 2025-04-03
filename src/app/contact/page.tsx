"use client";

import Header from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export default function ContactPage() {
    return (
        <>
            <Header />
            <main className="relative bg-[#090E1A] text-white py-32 px-6 sm:px-12 lg:px-24 overflow-hidden">
                {/* 🔥 Neon Aura Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-700/30 via-cyan-500/15 to-transparent blur-[180px] -z-10" />
                <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-500/40 blur-[160px] animate-pulse -z-10" />
                <div className="absolute bottom-1/3 right-1/4 w-[350px] h-[350px] bg-cyan-400/30 blur-[160px] animate-pulse -z-10" />

                {/* 🏆 HERO SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto text-center space-y-6"
                >
                    <h1 className="text-6xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg">
                        Get in Touch
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Have a vision? Let’s **turn it into reality**. Whether you have an idea, a project, or just want to say hi, **we’re here for you!** 🚀
                    </p>
                </motion.div>

                {/* 🎯 CONTACT FORM */}
                <section className="relative bg-[#0B1224] py-16 mt-16 px-6 sm:px-12 lg:px-24 text-white overflow-hidden rounded-xl shadow-2xl">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        viewport={{ once: true }}
                        className="max-w-5xl mx-auto space-y-12"
                    >
                        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg text-center">
                            Reach Out Anytime
                        </h2>

                        <div className="grid md:grid-cols-2 gap-12">
                            {/* 📌 Contact Info */}
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2 }}
                                className="space-y-6"
                            >
                                <div className="flex items-center space-x-4">
                                    <MdLocationOn className="text-blue-400 text-3xl" />
                                    <span className="text-lg text-gray-400">123 Innovation Street, Future City</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <MdPhone className="text-blue-400 text-3xl" />
                                    <span className="text-lg text-gray-400">+123 456 7890</span>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <MdEmail className="text-blue-400 text-3xl" />
                                    <span className="text-lg text-gray-400">hello@yourcompany.com</span>
                                </div>

                                {/* 🌍 Social Media */}
                                <div className="flex space-x-6 mt-6">
                                    {[
                                        { icon: FaFacebookF, link: "https://facebook.com" },
                                        { icon: FaTwitter, link: "https://twitter.com" },
                                        { icon: FaInstagram, link: "https://instagram.com" },
                                        { icon: FaLinkedinIn, link: "https://linkedin.com" }
                                    ].map((social, index) => (
                                        <motion.a
                                            key={index}
                                            href={social.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1 }}
                                            className="text-gray-400 hover:text-blue-400 transition-all text-2xl"
                                        >
                                            <social.icon />
                                        </motion.a>
                                    ))}
                                </div>
                            </motion.div>

                            {/* 📝 Interactive Contact Form */}
                            <motion.form
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.2 }}
                                className="bg-[#111a33] p-8 rounded-lg shadow-lg space-y-6"
                            >
                                <div>
                                    <label className="text-gray-400">Your Name</label>
                                    <Input
                                        placeholder="John Doe"
                                        className="bg-gray-800/50 text-white border-gray-700"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-400">Email Address</label>
                                    <Input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="bg-gray-800/50 text-white border-gray-700"
                                    />
                                </div>
                                <div>
                                    <label className="text-gray-400">Message</label>
                                    <Textarea
                                        placeholder="Write your message..."
                                        className="bg-gray-800/50 text-white border-gray-700"
                                    />
                                </div>
                                <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white text-lg py-3 transition-all">
                                    Send Message
                                </Button>
                            </motion.form>
                        </div>
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    );
}
