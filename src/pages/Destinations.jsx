import { motion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import DestinationCard from "../components/DestinationCard";
import { destinations } from "../data/mockData";

export default function Destinations() {
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
                        Explore Destinations
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-primary-100 text-lg max-w-2xl mx-auto"
                    >
                        Discover breathtaking locations around the world and find your
                        perfect travel escape.
                    </motion.p>
                </div>
            </section>

            {/* Destinations Grid */}
            <section className="py-20 bg-dark-50 dark:bg-dark-950">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        subtitle="Our Destinations"
                        title="Popular Travel Spots"
                        description="Browse through our collection of stunning destinations from every corner of the globe."
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {destinations.map((dest, i) => (
                            <DestinationCard key={dest.id} destination={dest} index={i} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
