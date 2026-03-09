import { motion } from "framer-motion";

export default function SectionHeader({ subtitle, title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
        >
            {subtitle && (
                <span className="text-accent-500 font-semibold text-sm uppercase tracking-widest">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-dark-900 dark:text-white">
                {title}
            </h2>
            {description && (
                <p className="mt-4 text-dark-500 dark:text-dark-400 max-w-2xl mx-auto text-lg">
                    {description}
                </p>
            )}
        </motion.div>
    );
}
