'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const pathname = usePathname();
    
    const isActive = (linkPath: string) => pathname === linkPath || pathname.startsWith(linkPath);

    return (
        <nav style={{
            height: '57px',
            backgroundColor: 'white',
            boxShadow: '0px 1px 7px rgba(0, 0, 0, 0.08)',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px 35px',
            display: 'flex',
            position: 'fixed',
            top: '33px',
            left: 0,
            width: '100%',
            zIndex: 999,
            boxSizing: 'border-box',
        }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src="/logo.svg" alt="logo del noticiero" style={{ paddingTop: "2px", height: '45px' }} />
            </div>

            <div style={{
                display: 'flex',
                gap: '40px',
                fontSize: '20px',
                fontFamily: 'var(--font-tt-commons-regular)',
                justifyContent: 'center',
                flexWrap: 'wrap',
                flex: 1,
                boxSizing: 'border-box',
            }}>
                <Link href="/" style={{ 
                    color: isActive('/') ? '#FF5C00' : 'inherit',
                    position: 'relative',
                }}>
                    Generales
                    {isActive('/') && (
                        <span style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            width: '100%',
                            height: '2px',
                            backgroundColor: '#FF5C00',
                        }} />
                    )}
                </Link>
                <Link href="/nacionales" style={{ 
                    color: isActive('/nacionales') ? '#FF5C00' : 'inherit',
                    position: 'relative',
                }}>
                    Nacionales
                    {isActive('/nacionales') && (
                        <span style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            width: '100%',
                            height: '2px',
                            backgroundColor: '#FF5C00',
                        }} />
                    )}
                </Link>
                <Link href="/politica" style={{ 
                    color: isActive('/politica') ? '#FF5C00' : 'inherit',
                    position: 'relative',
                }}>
                    Política
                    {isActive('/politica') && (
                        <span style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            width: '100%',
                            height: '2px',
                            backgroundColor: '#FF5C00',
                        }} />
                    )}
                </Link>
                <Link href="/economia" style={{ 
                    color: isActive('/economia') ? '#FF5C00' : 'inherit',
                    position: 'relative',
                }}>
                    Economía
                    {isActive('/economia') && (
                        <span style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            width: '100%',
                            height: '2px',
                            backgroundColor: '#FF5C00',
                        }} />
                    )}
                </Link>
                <Link href="/policiales" style={{ 
                    color: isActive('/policiales') ? '#FF5C00' : 'inherit',
                    position: 'relative',
                }}>
                    Policiales
                    {isActive('/policiales') && (
                        <span style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            width: '100%',
                            height: '2px',
                            backgroundColor: '#FF5C00',
                        }} />
                    )}
                </Link>
                <Link href="/deportes" style={{ 
                    color: isActive('/deportes') ? '#FF5C00' : 'inherit',
                    position: 'relative',
                }}>
                    Deportes
                    {isActive('/deportes') && (
                        <span style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            width: '100%',
                            height: '2px',
                            backgroundColor: '#FF5C00',
                        }} />
                    )}
                </Link>
                <Link href="/mundo" style={{ 
                    color: isActive('/mundo') ? '#FF5C00' : 'inherit',
                    position: 'relative',
                }}>
                    Mundo
                    {isActive('/mundo') && (
                        <span style={{
                            position: 'absolute',
                            bottom: '-2px',
                            left: 0,
                            width: '100%',
                            height: '2px',
                            backgroundColor: '#FF5C00',
                        }} />
                    )}
                </Link>
            </div>

            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
            }}>
                <a href="https://www.instagram.com/lasextadelsur/" target="_blank" rel="noopener noreferrer">
                    <img src="/social-media/instagram-icon.svg" alt="Instagram" style={{ height: '30px', width: '30px' }} />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5492920217918&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <img src="/social-media/whatsapp-icon.svg" alt="WhatsApp" style={{ height: '30px', width: '30px' }} />
                </a>
                <a href="https://www.youtube.com/@lasextadigital" target="_blank" rel="noopener noreferrer">
                    <img src="/social-media/youtube-icon.svg" alt="YouTube" style={{ height: '30px', width: '30px' }} />
                </a>
            </div>
        </nav>
    );
};