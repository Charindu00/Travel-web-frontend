import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Star } from "lucide-react";

export default function DestinationCard({ destination, index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-white dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
        >
            <div className="relative h-56 overflow-hidden">
                <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-semibold text-dark-800 dark:text-white">
                        {destination.rating}
                    </span>
                </div>
            </div>

            <div className="p-5">
                <div className="flex items-center gap-1.5 text-dark-500 dark:text-dark-400 text-sm mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>{destination.country}</span>
                </div>
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">
                    {destination.name}
                </h3>
                <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed mb-4">
                    {destination.shortDescription}
                </p>
                <Link
                    to={`/destinations`}
                    className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold text-sm hover:gap-2 transition-all no-underline"
                >
                    View Details
                    <span className="ml-1">→</span>
                </Link>
            </div>
        </motion.div>
    );
}
