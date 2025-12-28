'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="bg-[#323309] text-white pt-16 pb-8">
            <div className="max-w-[1300px] mx-auto px-8 md:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mb-16">
                    {/* Brand Column - 3 cols */}
                    <div className="lg:col-span-3">
                        <Link href="/" className="flex items-center gap-2 mb-6" aria-label="Campusify Home">
                            <Image src="/icon.png" alt="" width={44} height={44} className="w-11 h-11" />
                            <span className="font-bold text-3xl tracking-tight">CAMPUSIFY</span>
                        </Link>
                        <p className="text-gray-300 text-base leading-relaxed max-w-[220px]">
                            Streamline your campus management with Campsify. Our comprehensive solution ensures efficient operations, enhancing both faculty and student experiences.
                        </p>
                    </div>

                    {/* Features Column - 2 cols */}
                    <div className="lg:col-span-2">
                        <h2 className="font-bold text-white mb-5 text-xl">Features</h2>
                        <ul className="space-y-2.5 text-[17px] text-gray-300">
                            {['Admissions', 'Timetables', 'Attendance', 'Examinations', 'Fee Management', 'Feedback Analysis', 'Result Analysis', 'Attainments', 'Alumni'].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-[#E8C547] transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Column - 2 cols */}
                    <div className="lg:col-span-2">
                        <h2 className="font-bold text-white mb-5 text-xl">Resources</h2>
                        <ul className="space-y-2.5 text-[17px] text-gray-300">
                            {['Blog', 'Support Center', 'FAQs', 'Webinars', 'Case Studies', 'Whitepapers'].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-[#E8C547] transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Column - 2 cols */}
                    <div className="lg:col-span-2">
                        <h2 className="font-bold text-white mb-5 text-xl">Company</h2>
                        <ul className="space-y-2.5 text-[17px] text-gray-300">
                            <li><Link href="#" className="hover:text-[#E8C547] transition-colors">About us</Link></li>
                            <li><Link href="#" className="hover:text-[#E8C547] transition-colors flex items-center gap-2">Careers <span className="bg-[#E8C547] text-[#323309] text-[10px] font-semibold px-2 py-0.5 rounded-full">Hiring</span></Link></li>
                            {['Press & Media', 'Partners', 'Contact Us', 'Sitemap', 'Testimonials', 'Request Demo'].map((item) => (
                                <li key={item}><Link href="#" className="hover:text-[#E8C547] transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column - 3 cols (wider) */}
                    <div className="lg:col-span-3">
                        <h2 className="font-bold text-white mb-5 text-xl">Want to receive news and updates?</h2>
                        <div className="mb-8">
                            <label htmlFor="footer-email" className="sr-only">Email address</label>
                            <div className="group relative mb-5">
                                <input
                                    id="footer-email"
                                    type="email"
                                    placeholder="Email *"
                                    className="w-full bg-transparent border-b border-gray-500 text-base py-3 focus:outline-none text-white placeholder-gray-400 peer"
                                />
                                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#38BDF8] transition-all duration-300 -translate-x-1/2 peer-hover:w-full peer-focus:w-full"></span>
                            </div>
                            <button className="px-5 py-2 bg-[#38BDF8] text-white text-sm font-medium rounded-sm hover:bg-[#0EA5E9] transition-colors">
                                Stay in the loop
                            </button>
                        </div>

                        <div className="space-y-3 text-[17px] text-gray-300 mb-6">
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span><span className="border-b border-white">hello</span>@campusify.io</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span>+91 9848000149</span>
                            </div>
                        </div>

                        <p className="text-base text-white mb-8 leading-relaxed">
                            701, 7th Floor, Block B, Asian Suncity, Kondapur, Hyderabad, Telangana – 500084
                        </p>

                        {/* Social Icons with aria-labels */}
                        <div className="flex gap-6">
                            <Link href="#" aria-label="LinkedIn" className="w-10 h-10 flex items-center justify-center text-white hover:bg-[#E8C547] hover:text-[#323309] rounded-full transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </Link>
                            <Link href="#" aria-label="Facebook" className="w-10 h-10 flex items-center justify-center text-white hover:bg-[#E8C547] hover:text-[#323309] rounded-full transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                </svg>
                            </Link>
                            <Link href="#" aria-label="Twitter" className="w-10 h-10 flex items-center justify-center text-white hover:bg-[#E8C547] hover:text-[#323309] rounded-full transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </Link>
                            <Link href="#" aria-label="YouTube" className="w-10 h-10 flex items-center justify-center text-white hover:bg-[#E8C547] hover:text-[#323309] rounded-full transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                                </svg>
                            </Link>
                            <Link href="#" aria-label="Instagram" className="w-10 h-10 flex items-center justify-center text-white hover:bg-[#E8C547] hover:text-[#323309] rounded-full transition-all duration-300">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Thin Divider Line */}
                <div className="border-t border-gray-600/40 mb-6"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-4">
                    <p className="text-white text-sm">© CAMPUSIFY<sup>TM</sup>. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="text-gray-300 hover:text-[#E8C547] text-base font-medium transition-colors">Terms & Conditions</Link>
                        <Link href="#" className="text-gray-300 hover:text-[#E8C547] text-base font-medium transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
