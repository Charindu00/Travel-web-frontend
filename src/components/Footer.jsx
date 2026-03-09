import { Link } from "react-router-dom";
import {
    Plane,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
} from "lucide-react";

const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Tour Packages", path: "/packages" },
    { name: "Contact Us", path: "/contact" },
];

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "Youtube" },
];

export default function Footer() {
    return (
        <footer className="bg-dark-900 dark:bg-dark-950 text-dark-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand */}
                    <div>
                        <Link to="/" className="flex items-center gap-2 no-underline mb-4">
                            <Plane className="w-8 h-8 text-primary-400" />
                            <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent">
                                Wanderlust
                            </span>
                        </Link>
                        <p className="text-dark-400 text-sm leading-relaxed">
                            Discover the world with us. We craft unforgettable travel
                            experiences to the most stunning destinations across the globe.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2 list-none p-0 m-0">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        to={link.path}
                                        className="text-dark-400 hover:text-primary-400 transition-colors text-sm no-underline"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3 list-none p-0 m-0">
                            <li className="flex items-center gap-3 text-sm text-dark-400">
                                <MapPin className="w-4 h-4 text-primary-400 shrink-0" />
                                123 Travel Street, Colombo, Sri Lanka
                            </li>
                            <li className="flex items-center gap-3 text-sm text-dark-400">
                                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                                +94 11 234 5678
                            </li>
                            <li className="flex items-center gap-3 text-sm text-dark-400">
                                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                                hello@wanderlust.com
                            </li>
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                        <p className="text-dark-400 text-sm mb-4">
                            Stay connected for the latest travel deals and inspiration.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-lg bg-dark-800 dark:bg-dark-900 flex items-center justify-center text-dark-400 hover:bg-primary-600 hover:text-white transition-all no-underline"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-dark-800 text-center text-dark-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Wanderlust. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
