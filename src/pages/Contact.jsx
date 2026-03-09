import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Clock, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

const contactInfo = [
    { icon: MapPin, label: "Address", value: "123 Travel Street, Colombo 03, Sri Lanka" },
    { icon: Phone, label: "Phone", value: "+94 11 234 5678" },
    { icon: Mail, label: "Email", value: "hello@wanderlust.com" },
    { icon: Clock, label: "Hours", value: "Mon - Fri: 9:00 AM - 6:00 PM" },
];

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        // UI only - no backend
    };

    return (
        <>
            {/* Page Hero */}
            <section className="relative py-24 bg-gradient-to-br from-primary-600 to-primary-800 dark:from-primary-800 dark:to-dark-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-primary-100 text-lg max-w-2xl mx-auto"
                    >
                        Have questions about a trip? Our travel experts are ready to help you plan your
                        perfect getaway.
                    </motion.p>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20 bg-dark-50 dark:bg-dark-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left - Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                                Contact Information
                            </h2>
                            <p className="text-dark-500 dark:text-dark-400 mb-8">
                                Reach out to us through any of the following channels. We typically respond
                                within 24 hours.
                            </p>

                            <div className="space-y-5 mb-10">
                                {contactInfo.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-start gap-4 bg-white dark:bg-dark-800 rounded-xl p-4 shadow-sm"
                                    >
                                        <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center shrink-0">
                                            <item.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-dark-900 dark:text-white text-sm">
                                                {item.label}
                                            </h4>
                                            <p className="text-dark-500 dark:text-dark-400 text-sm">
                                                {item.value}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Social Links */}
                            <h4 className="font-semibold text-dark-900 dark:text-white mb-3">
                                Follow Us
                            </h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-lg bg-white dark:bg-dark-800 shadow-sm flex items-center justify-center text-dark-500 hover:bg-primary-600 hover:text-white transition-all no-underline"
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </a>
                                ))}
                            </div>

                            {/* Map */}
                            <div className="mt-10 rounded-2xl overflow-hidden shadow-md">
                                <iframe
                                    title="Location Map"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63371.80393555961!2d79.82118805555074!3d6.921836839498731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo%2C%20Sri%20Lanka!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                                    width="100%"
                                    height="250"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </motion.div>

                        {/* Right - Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-lg p-8">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Send className="w-8 h-8 text-green-600 dark:text-green-400" />
                                        </div>
                                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                                            Message Sent!
                                        </h3>
                                        <p className="text-dark-500 dark:text-dark-400">
                                            Thank you for reaching out. We'll get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setSubmitted(false);
                                                setFormData({ name: "", email: "", subject: "", message: "" });
                                            }}
                                            className="mt-6 text-primary-600 dark:text-primary-400 font-semibold cursor-pointer bg-transparent border-none"
                                        >
                                            Send Another Message
                                        </button>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-6">
                                            Send Us a Message
                                        </h3>
                                        <form onSubmit={handleSubmit} className="space-y-5">
                                            <div>
                                                <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="John Doe"
                                                    className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-600 bg-dark-50 dark:bg-dark-700 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                                                    Email Address
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="john@example.com"
                                                    className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-600 bg-dark-50 dark:bg-dark-700 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                                                    Subject
                                                </label>
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                    required
                                                    placeholder="Tour inquiry"
                                                    className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-600 bg-dark-50 dark:bg-dark-700 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-dark-700 dark:text-dark-300 mb-1.5">
                                                    Message
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    required
                                                    rows={5}
                                                    placeholder="Tell us about your travel plans..."
                                                    className="w-full px-4 py-3 rounded-xl border border-dark-200 dark:border-dark-600 bg-dark-50 dark:bg-dark-700 text-dark-900 dark:text-white placeholder-dark-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                                />
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3.5 rounded-xl font-semibold transition-colors cursor-pointer border-none flex items-center justify-center gap-2"
                                            >
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
}
