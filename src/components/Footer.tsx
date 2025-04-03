"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdLocationOn, MdPhone, MdEmail } from "react-icons/md";

export function Footer() {
    return (
        <footer className="bg-[#0B0F1A] py-24 border-t border-gray-800 relative overflow-hidden px-8 sm:px-16 lg:px-32">
            {/* Soft Background Glows */}
            <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-blue-500/20 blur-[150px] animate-pulse -z-10" />
            <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-400/15 blur-[150px] animate-pulse -z-10" />

            <div className="container mx-auto text-white relative z-10">
                {/* Brand Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="text-center space-y-8"
                >
                    <h2 className="text-5xl font-extrabold text-blue-400 tracking-wide">
                        CREATIC
                    </h2>
                    <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Building innovative solutions with precision, creativity, and a passion for results.
                    </p>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                        className="flex justify-center gap-6 mt-6"
                    >
                        {[
                            { icon: <FaFacebookF />, href: "https://facebook.com" },
                            { icon: <FaTwitter />, href: "https://twitter.com" },
                            { icon: <FaInstagram />, href: "https://instagram.com" },
                            { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                className="text-gray-400 hover:text-blue-400 transition-all duration-300 text-xl"
                            >
                                {social.icon}
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Footer Content */}
                <div className="grid md:grid-cols-3 gap-12 mt-16 text-gray-400">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-center md:text-left"
                    >
                        <h4 className="text-lg font-semibold text-white">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <MdLocationOn className="text-blue-400" />
                                <span>123 Main Street, City, Country</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <MdPhone className="text-blue-400" />
                                <span>+123 456 7890</span>
                            </div>
                            <div className="flex items-center justify-center md:justify-start space-x-2">
                                <MdEmail className="text-blue-400" />
                                <span>info@example.com</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-center md:text-left"
                    >
                        <h4 className="text-lg font-semibold text-white">Quick Links</h4>
                        <div className="space-y-3">
                            {["About Us", "Services", "Projects", "Contact"].map((link, index) => (
                                <a
                                    key={index}
                                    href={`#${link.toLowerCase().replace(" ", "")}`}
                                    className="block text-lg hover:text-blue-400 transition-all"
                                >
                                    {link}
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        viewport={{ once: true }}
                        className="space-y-6 text-center md:text-left"
                    >
                        <h4 className="text-lg font-semibold text-white">Stay Connected</h4>
                        <p className="text-lg text-gray-400">
                            Sign up for our newsletter to stay updated on our latest projects and news.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                            <Input
                                placeholder="Enter your email"
                                className="bg-gray-800/50 text-white border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <Button className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105">
                                Subscribe
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-16 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
                <p>&copy; 2025 Creatic. All rights reserved.</p>
            </div>
        </footer>
    );
}
