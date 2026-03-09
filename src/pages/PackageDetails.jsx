import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, DollarSign, CheckCircle, ArrowLeft, MapPin } from "lucide-react";
import { tourPackages } from "../data/mockData";

export default function PackageDetails() {
    const { id } = useParams();
    const pkg = tourPackages.find((p) => p.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(0);
    const [showModal, setShowModal] = useState(false);

    if (!pkg) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">
                        Package Not Found
                    </h2>
                    <Link
                        to="/packages"
                        className="text-primary-600 dark:text-primary-400 font-semibold no-underline"
                    >
                        ← Back to Packages
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Back Button */}
            <div className="bg-white dark:bg-dark-950 pt-6 pb-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        to="/packages"
                        className="inline-flex items-center gap-2 text-dark-500 dark:text-dark-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium text-sm transition-colors no-underline"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Packages
                    </Link>
                </div>
            </div>

            {/* Main Content */}
            <section className="py-8 bg-white dark:bg-dark-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Left - Gallery and Details */}
                        <div className="lg:col-span-2">
                            {/* Image Gallery */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                            >
                                <div className="rounded-2xl overflow-hidden mb-4">
                                    <img
                                        src={pkg.gallery[selectedImage]}
                                        alt={pkg.name}
                                        className="w-full h-72 sm:h-96 md:h-[28rem] object-cover"
                                    />
                                </div>
                                <div className="grid grid-cols-4 gap-3">
                                    {pkg.gallery.map((img, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedImage(i)}
                                            className={`rounded-xl overflow-hidden border-2 transition-all cursor-pointer p-0 ${selectedImage === i
                                                    ? "border-primary-500 ring-2 ring-primary-200"
                                                    : "border-transparent hover:border-dark-300 dark:hover:border-dark-600"
                                                }`}
                                        >
                                            <img
                                                src={img}
                                                alt={`${pkg.name} ${i + 1}`}
                                                className="w-full h-16 sm:h-20 object-cover"
                                            />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Description */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="mt-8"
                            >
                                <h1 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-4">
                                    {pkg.name}
                                </h1>
                                <div className="flex flex-wrap items-center gap-4 mb-6 text-dark-500 dark:text-dark-400">
                                    <span className="flex items-center gap-1.5">
                                        <Clock className="w-5 h-5" />
                                        {pkg.duration}
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <MapPin className="w-5 h-5" />
                                        Multiple Locations
                                    </span>
                                </div>
                                <p className="text-dark-600 dark:text-dark-300 leading-relaxed text-lg">
                                    {pkg.description}
                                </p>
                            </motion.div>

                            {/* Highlights */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="mt-10"
                            >
                                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">
                                    Tour Highlights
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {pkg.highlights.map((item, i) => (
                                        <div
                                            key={i}
                                            className="flex items-start gap-3 bg-dark-50 dark:bg-dark-800 rounded-xl p-4"
                                        >
                                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                                            <span className="text-dark-700 dark:text-dark-300 text-sm">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right - Booking Card */}
                        <div className="lg:col-span-1">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-6 lg:sticky lg:top-24 border border-dark-200 dark:border-dark-700"
                            >
                                <div className="text-center mb-6">
                                    <span className="text-dark-500 dark:text-dark-400 text-sm">
                                        Starting from
                                    </span>
                                    <div className="flex items-center justify-center gap-1 mt-1">
                                        <DollarSign className="w-6 h-6 text-accent-500" />
                                        <span className="text-4xl font-bold text-dark-900 dark:text-white">
                                            {pkg.price}
                                        </span>
                                    </div>
                                    <span className="text-dark-500 dark:text-dark-400 text-sm">
                                        per person
                                    </span>
                                </div>

                                <div className="space-y-3 mb-6 text-sm">
                                    <div className="flex justify-between py-2 border-b border-dark-100 dark:border-dark-700">
                                        <span className="text-dark-500 dark:text-dark-400">Duration</span>
                                        <span className="font-medium text-dark-900 dark:text-white">
                                            {pkg.duration}
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-dark-100 dark:border-dark-700">
                                        <span className="text-dark-500 dark:text-dark-400">Group Size</span>
                                        <span className="font-medium text-dark-900 dark:text-white">
                                            2-15 People
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2 border-b border-dark-100 dark:border-dark-700">
                                        <span className="text-dark-500 dark:text-dark-400">Meals</span>
                                        <span className="font-medium text-dark-900 dark:text-white">
                                            All Inclusive
                                        </span>
                                    </div>
                                    <div className="flex justify-between py-2">
                                        <span className="text-dark-500 dark:text-dark-400">Transport</span>
                                        <span className="font-medium text-dark-900 dark:text-white">
                                            Included
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => setShowModal(true)}
                                    className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3.5 rounded-xl font-semibold transition-colors cursor-pointer border-none text-base"
                                >
                                    Book This Tour
                                </button>

                                <p className="text-center text-dark-400 text-xs mt-3">
                                    No payment required at this stage
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Booking Confirmation Modal */}
            {showModal && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-dark-900/60 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative bg-white dark:bg-dark-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                            Booking Request Sent!
                        </h3>
                        <p className="text-dark-500 dark:text-dark-400 mb-6">
                            Thank you for your interest in the{" "}
                            <strong className="text-dark-900 dark:text-white">{pkg.name}</strong>. Our
                            travel team will contact you within 24 hours to finalize your booking.
                        </p>
                        <button
                            onClick={() => setShowModal(false)}
                            className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-xl font-semibold transition-colors cursor-pointer border-none"
                        >
                            Got It!
                        </button>
                    </motion.div>
                </div>
            )}
        </>
    );
}
