import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Sun, Moon, Plane } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/destinations" },
    { name: "Packages", path: "/packages" },
    { name: "Contact", path: "/contact" },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-md border-b border-dark-200/50 dark:border-dark-700/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 no-underline">
                        <Plane className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                        <span className="text-2xl font-extrabold tracking-tight bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                            Wanderlust
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                className={({ isActive }) =>
                                    `text-sm font-medium transition-colors no-underline ${isActive
                                        ? "text-primary-600 dark:text-primary-400"
                                        : "text-dark-600 dark:text-dark-300 hover:text-primary-600 dark:hover:text-primary-400"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 rounded-lg bg-dark-100 dark:bg-dark-800 text-dark-600 dark:text-dark-300 hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors border-none cursor-pointer"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>

                        <button
                            onClick={() => setMobileOpen(!mobileOpen)}
                            className="md:hidden p-2 rounded-lg text-dark-600 dark:text-dark-300 border-none bg-transparent cursor-pointer"
                            aria-label="Toggle menu"
                        >
                            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="md:hidden bg-white dark:bg-dark-900 border-t border-dark-200 dark:border-dark-700">
                    <div className="px-4 py-3 space-y-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.name}
                                to={link.path}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `block px-3 py-2 rounded-lg text-sm font-medium transition-colors no-underline ${isActive
                                        ? "bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
                                        : "text-dark-600 dark:text-dark-300 hover:bg-dark-50 dark:hover:bg-dark-800"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
