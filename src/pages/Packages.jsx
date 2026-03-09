import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import PackageCard from "../components/PackageCard";
import { tourPackages } from "../data/mockData";

export default function Packages() {
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
                        Tour Packages
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-primary-100 text-lg max-w-2xl mx-auto"
                    >
                        Choose from our carefully crafted tour packages designed to give you
                        the best travel experiences.
                    </motion.p>
                </div>
            </section>

            {/* Packages Grid */}
            <section className="py-20 bg-dark-50 dark:bg-dark-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="Choose Your Adventure"
                        title="All Tour Packages"
                        description="Find the perfect package that matches your dream vacation. Each includes handpicked accommodations and exclusive experiences."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {tourPackages.map((pkg, i) => (
                            <PackageCard key={pkg.id} pkg={pkg} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
