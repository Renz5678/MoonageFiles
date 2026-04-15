import React, { useEffect } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import { ShoppingBag, Menu } from 'lucide-react';
import { motion } from 'motion/react';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
};

export const MainLayout = () => {
    return (
        <div className="min-h-screen relative">
            <div className="film-grain" />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export const Navbar = () => {
    const location = useLocation();

    return (
        <header className="bg-amber-50/70 backdrop-blur-md fixed top-0 w-full z-50 border-b border-outline-variant/10">
            <nav className="flex justify-between items-center px-6 py-8 max-w-screen-2xl mx-auto">
                <Link to="/" className="text-5xl font-headline italic font-bold text-on-surface">
                    Moonage Files
                </Link>

                <div className="hidden md:flex gap-8 items-center">
                    <Link
                        to="/"
                        className={`text-2xl font-headline italic tracking-tight transition-colors duration-300 ${location.pathname === '/' && location.hash === '' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface/70 hover:text-primary'
                            }`}
                    >
                        Insert Gallery
                    </Link>
                    <a href="#the-process" className={`text-2xl font-headline italic tracking-tight transition-colors duration-300 ${location.hash === '#the-process' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface/70 hover:text-primary'
                        }`}>
                        The Process
                    </a>
                    <a href="#pricing" className={`text-2xl font-headline italic tracking-tight transition-colors duration-300 ${location.hash === '#pricing' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface/70 hover:text-primary'
                        }`}>
                        Pricing
                    </a>
                    <a href="#archives" className={`text-2xl font-headline italic tracking-tight transition-colors duration-300 ${location.hash === '#archives' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface/70 hover:text-primary'
                        }`}>
                        Archives
                    </a>
                    <a href="#ratings" className={`text-2xl font-headline italic tracking-tight transition-colors duration-300 ${location.hash === '#ratings' ? 'text-primary border-b-2 border-primary pb-1' : 'text-on-surface/70 hover:text-primary'
                        }`}>
                        Ratings
                    </a>
                </div>

                <div className="flex items-center gap-4">
                    <button className="text-primary hover:opacity-70 transition-opacity">
                        <ShoppingBag size={24} />
                    </button>
                    <button className="text-on-surface md:hidden">
                        <Menu size={24} />
                    </button>
                    <button className="hidden md:block bg-primary text-on-primary px-5 py-2 rounded-lg font-medium shadow-sm hover:opacity-90 transition-all active:scale-95">
                        Order Now
                    </button>
                </div>
            </nav>
        </header>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-surface-container-low w-full py-12 px-8 mt-24">
            <div className="flex flex-col gap-8 max-w-7xl mx-auto items-center text-center">
                <span className="font-headline text-lg italic text-on-surface">Moonage Files</span>
                <div className="flex flex-wrap justify-center gap-6">
                    <a className="font-body font-light tracking-wide text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">DM to Order</a>
                    <a className="font-body font-light tracking-wide text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all underline decoration-secondary-container decoration-2" href="#">Instagram</a>
                    <a className="font-body font-light tracking-wide text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Process</a>
                    <a className="font-body font-light tracking-wide text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all" href="#">Privacy</a>
                </div>
                <p className="font-body font-light tracking-wide text-xs text-primary/60">© 2024 Moonage Files. Hand-tacked with love.</p>
            </div>
        </footer>
    );
};
