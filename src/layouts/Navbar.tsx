'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const router = '/router'

export const navLinks = [
    { href: '/', label: 'Generales' },
    { href: `${router}/national`, label: 'Nacionales' },
    { href: `${router}/politics`, label: 'Política' },
    { href: `${router}/economy`, label: 'Economía' },
    { href: `${router}/police`, label: 'Policiales' },
    { href: `${router}/sports`, label: 'Deportes' },
    { href: `${router}/world`, label: 'Mundo' },
];

const socialLinks = [
    { href: 'https://www.instagram.com/lasextadelsur/', icon: '/social-media/instagram-icon.svg', alt: 'Instagram' },
    { href: 'https://api.whatsapp.com/send/?phone=5492920217918&text&type=phone_number&app_absent=0', icon: '/social-media/whatsapp-icon.svg', alt: 'WhatsApp' },
    { href: 'https://www.youtube.com/@lasextadigital', icon: '/social-media/youtube-icon.svg', alt: 'YouTube' },
];

export function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const isLinkActive = (href: string) => pathname === href;

    return (
        <nav
            className="bg-white w-full z-50 fixed h-[57px] flex items-center justify-between"
            style={{
                boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.08)',
                top: '33px',
                paddingLeft: '30px',
                paddingRight: '30px'
            }}
        >
            <div className="flex items-center">
                <img src="/logo.svg" alt="news logo" className="pt-[2px] h-[45px]" />
            </div>

            <div className="hidden lg:flex flex-1 justify-center items-center" style={{ fontFamily: 'var(--font-tt-commons-regular)', gap: '40px', fontSize: '20px' }}>
                {navLinks.map(({ href, label }) => (
                    <Link key={href} href={href} className="relative" style={{ color: isLinkActive(href) ? '#FF5C00' : 'inherit' }}>
                        {label}
                        {isLinkActive(href) && (
                            <span className="absolute left-0 bottom-[-2px] w-full h-[2px]" style={{ backgroundColor: '#FF5C00' }} />
                        )}
                    </Link>
                ))}
            </div>

            <div className="hidden lg:flex items-center gap-2">
                {socialLinks.map(({ href, icon, alt }) => (
                    <a key={href} href={href} target="_blank" rel="noopener noreferrer">
                        <img src={icon} alt={alt} className="h-[30px] w-[30px]" />
                    </a>
                ))}
            </div>

            <button className="lg:hidden flex flex-col justify-center items-center cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
                <span className={`bg-black block transition-all duration-300 h-0.5 w-6 rounded-sm ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                <span className={`bg-black block transition-all duration-300 h-0.5 w-6 rounded-sm my-1 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`bg-black block transition-all duration-300 h-0.5 w-6 rounded-sm ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>

            {menuOpen && (
                <div className="absolute top-[55px] left-0 w-full bg-white flex flex-col items-center gap-6 py-6 shadow-lg z-40">
                    {navLinks.map(({ href, label }) => (
                        <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="text-lg" style={{ color: isLinkActive(href) ? '#FF5C00' : 'inherit' }}>
                            {label}
                        </Link>
                    ))}

                    <div className="flex gap-4 mt-4">
                        {socialLinks.map(({ href, icon, alt }) => (
                            <Link key={href} href={href} target="_blank" rel="noopener noreferrer">
                                <img src={icon} alt={alt} className="h-[30px] w-[30px]" />
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};