import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

export default function TestimonialCard({ testimonial, index = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="bg-white dark:bg-dark-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
        >
            <Quote className="w-10 h-10 text-primary-100 dark:text-primary-900/50 absolute top-4 right-4" />

            <div className="flex items-center gap-4 mb-4">
                <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-200 dark:ring-primary-800"
                />
                <div>
                    <h4 className="font-semibold text-dark-900 dark:text-white text-sm">
                        {testimonial.name}
                    </h4>
                    <p className="text-dark-500 dark:text-dark-400 text-xs">
                        {testimonial.location}
                    </p>
                </div>
            </div>

            <div className="flex gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating
                                ? "text-yellow-500 fill-yellow-500"
                                : "text-dark-300"
                            }`}
                    />
                ))}
            </div>

            <p className="text-dark-600 dark:text-dark-300 text-sm leading-relaxed mb-3">
                "{testimonial.review}"
            </p>

            <span className="text-xs text-primary-600 dark:text-primary-400 font-medium">
                {testimonial.tour}
            </span>
        </motion.div>
    );
}
