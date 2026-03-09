import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Globe, Shield, Headphones, Award } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import DestinationCard from "../components/DestinationCard";
import PackageCard from "../components/PackageCard";
import TestimonialCard from "../components/TestimonialCard";
import { destinations, tourPackages, testimonials, stats } from "../data/mockData";

const heroImages = [
    "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
    "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=80",
    "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1600&q=80",
    "https://images.unsplash.com/photo-1518684079-3c830dcef090?w=1600&q=80",
];

const features = [
    {
        icon: Globe,
        title: "500+ Destinations",
        description: "Explore curated destinations across every continent on the planet.",
    },
    {
        icon: Shield,
        title: "Best Price Guarantee",
        description: "We match any competitor's price so you always get the best deal.",
    },
    {
        icon: Headphones,
        title: "24/7 Support",
        description: "Our travel experts are available around the clock to assist you.",
    },
    {
        icon: Award,
        title: "Award Winning",
        description: "Recognized as a top travel agency for 5 consecutive years.",
    },
];

export default function Home() {
    const [currentImage, setCurrentImage] = useState(0);

    const nextImage = useCallback(() => {
        setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, []);

    useEffect(() => {
        const interval = setInterval(nextImage, 5000);
        return () => clearInterval(interval);
    }, [nextImage]);

    return (
        <>
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Slideshow Background */}
                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
                    />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900/70 via-dark-900/50 to-dark-900/80" />

                {/* Slide Indicators */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                    {heroImages.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentImage(i)}
                            className={`w-2.5 h-2.5 rounded-full border-none cursor-pointer transition-all duration-300 ${i === currentImage
                                    ? "bg-white w-8"
                                    : "bg-white/40 hover:bg-white/70"
                                }`}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>

                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/20"
                    >
                        ✈️ Your Adventure Starts Here
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight mb-6"
                    >
                        Discover the World's{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                            Most Beautiful
                        </span>{" "}
                        Destinations
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                        className="text-lg md:text-xl text-dark-200 mb-10 max-w-2xl mx-auto"
                    >
                        Unforgettable journeys crafted by travel experts. Explore exotic
                        destinations with our premium tour packages.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center"
                    >
                        <Link
                            to="/packages"
                            className="inline-flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors no-underline"
                        >
                            Explore Packages
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <Link
                            to="/destinations"
                            className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-3.5 rounded-xl font-semibold transition-colors border border-white/30 no-underline"
                        >
                            View Destinations
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Stats Bar */}
            <section className="bg-primary-600 dark:bg-primary-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-white">
                                    {stat.value}
                                </div>
                                <div className="text-primary-100 text-sm mt-1">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-20 bg-dark-50 dark:bg-dark-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, i) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="text-center p-6"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-4">
                                    <feature.icon className="w-7 h-7 text-primary-600 dark:text-primary-400" />
                                </div>
                                <h3 className="font-bold text-dark-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-dark-500 dark:text-dark-400 text-sm">
                                    {feature.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Destinations */}
            <section className="py-20 bg-white dark:bg-dark-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="Top Destinations"
                        title="Popular Travel Destinations"
                        description="Explore our handpicked selection of the world's most captivating destinations."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {destinations.slice(0, 4).map((dest, i) => (
                            <DestinationCard key={dest.id} destination={dest} index={i} />
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link
                            to="/destinations"
                            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all no-underline"
                        >
                            View All Destinations <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Featured Packages */}
            <section className="py-20 bg-dark-50 dark:bg-dark-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="Tour Packages"
                        title="Featured Tour Packages"
                        description="Choose from our expertly curated tour packages for an unforgettable journey."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tourPackages.slice(0, 3).map((pkg, i) => (
                            <PackageCard key={pkg.id} pkg={pkg} index={i} />
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link
                            to="/packages"
                            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold hover:gap-3 transition-all no-underline"
                        >
                            View All Packages <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 bg-white dark:bg-dark-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="Testimonials"
                        title="What Our Travelers Say"
                        description="Read real stories from travelers who explored the world with us."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {testimonials.map((t, i) => (
                            <TestimonialCard key={t.id} testimonial={t} index={i} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80')",
                    }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-dark-900/80" />
                </div>

                <div className="relative z-10 max-w-3xl mx-auto text-center px-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Ready for Your Next Adventure?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-dark-200 mb-8"
                    >
                        Start planning your dream trip today. Our travel experts will help
                        you create unforgettable memories.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors no-underline"
                        >
                            Start Planning <ArrowRight className="w-5 h-5" />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </>
    );
}
