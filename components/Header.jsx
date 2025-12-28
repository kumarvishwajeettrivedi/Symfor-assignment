'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md z-50 border-b border-gray-100/50 shadow-sm">
            <nav className="container-custom">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="flex items-center gap-2.5 group" aria-label="Campusify Home">
                            <Image src="/icon.png" alt="" width={44} height={44} className="w-11 h-11 rounded-lg" />
                            <span className="font-bold text-3xl tracking-tight text-gray-900 group-hover:text-gray-700 transition-colors uppercase">Campusify</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {['Home', 'Features', 'About Us', 'Resources', 'Careers', 'Contact'].map((item) => (
                            <Link key={item} href="/" className="text-[15px] font-semibold text-gray-600 hover:text-[rgb(50,51,9)] transition-colors relative group">
                                {item}
                            </Link>
                        ))}
                        <Link href="/" className="px-6 py-2.5 bg-[rgb(50,51,9)] text-white text-[15px] font-bold rounded-lg hover:bg-[rgb(40,41,7)] transition-all duration-200 transform hover:scale-105 hover:shadow-lg shadow-md">
                            Request Demo
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2.5 rounded-xl hover:bg-gray-100 transition-colors"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                    >
                        <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-xl animate-in fade-in slide-in-from-top-4 duration-300">
                        <div className="container-custom py-6 space-y-4">
                            {['Home', 'Features', 'About Us', 'Resources', 'Careers', 'Contact'].map((item) => (
                                <Link key={item} href="/" className="block px-4 py-3 rounded-xl text-lg font-semibold text-gray-700 hover:text-[rgb(50,51,9)] hover:bg-gray-50 transition-all">
                                    {item}
                                </Link>
                            ))}
                            <div className="pt-4 px-4">
                                <Link href="/" className="block w-full text-center py-3.5 bg-[rgb(50,51,9)] text-white rounded-xl font-bold hover:bg-[rgb(40,41,7)] shadow-md transition-all">
                                    Request Demo
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
