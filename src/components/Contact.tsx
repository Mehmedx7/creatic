"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export function ContactSection() {
    return (
        <section className="relative py-24 bg-[#0B0F1A] overflow-hidden px-8 sm:px-16 lg:px-32">
            {/* Soft Background Glows */}
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500/10 blur-[150px] -z-10 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-400/10 blur-[150px] -z-10 animate-pulse" />

            {/* Contact Content */}
            <div className="container mx-auto">
                <div className="grid md:grid-cols-2 gap-24 items-center">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >
                        <h2 className="text-5xl font-extrabold text-white text-center sm:text-left">
                            Let’s Connect
                        </h2>
                        <p className="text-gray-400 text-lg text-center sm:text-left leading-relaxed">
                            Have questions or an exciting project in mind? We’d love to hear from you!
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: <MapPin />, text: "123 Main Street, City, Country" },
                                { icon: <Phone />, text: "+123 456 7890" },
                                { icon: <Mail />, text: "info@example.com" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center space-x-4 text-gray-400 hover:text-blue-400 transition-all duration-300"
                                    whileHover={{ scale: 1.08 }}
                                >
                                    <div className="text-blue-400 text-2xl">{item.icon}</div>
                                    <span className="text-lg">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="relative z-10"
                    >
                        <div className="space-y-6 bg-[#141A26] p-8 rounded-2xl shadow-lg border border-gray-700">
                            <Input
                                placeholder="Your Name"
                                className="bg-gray-900/70 border border-gray-700 text-white rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                            <Input
                                placeholder="Your Email"
                                className="bg-gray-900/70 border border-gray-700 text-white rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                            <Textarea
                                placeholder="Your Message"
                                className="bg-gray-900/70 border border-gray-700 text-white rounded-lg px-5 py-3 h-36 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                            />
                            <Button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg py-3 transition-all duration-300 transform hover:scale-105">
                                Send Message
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Subtle Animated Glow Overlay */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-400/15 to-transparent blur-[200px] opacity-30"
                animate={{ scale: [1, 1.02, 1], opacity: [0.2, 0.3, 0.2] }}
                transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
        </section>
    );
}
