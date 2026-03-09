import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, DollarSign } from "lucide-react";

export default function PackageCard({ pkg, index = 0 }) {
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
                    src={pkg.image}
                    alt={pkg.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-accent-500 text-white rounded-full px-4 py-1.5 font-bold text-sm shadow-lg">
                    ${pkg.price}
                </div>
            </div>

            <div className="p-5">
                <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-2">
                    {pkg.name}
                </h3>
                <div className="flex items-center gap-4 mb-3 text-sm text-dark-500 dark:text-dark-400">
                    <span className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                        <DollarSign className="w-4 h-4" />
                        From ${pkg.price}
                    </span>
                </div>
                <p className="text-dark-500 dark:text-dark-400 text-sm leading-relaxed mb-4">
                    {pkg.shortDescription}
                </p>
                <Link
                    to={`/packages/${pkg.id}`}
                    className="inline-block w-full text-center bg-primary-600 hover:bg-primary-700 text-white py-2.5 rounded-xl font-semibold text-sm transition-colors no-underline"
                >
                    View Details
                </Link>
            </div>
        </motion.div>
    );
}
