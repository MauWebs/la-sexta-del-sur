'use client';
import { usePathname } from 'next/navigation';

export default function Navbar() {

    const pathname = usePathname();
    const isHome = pathname === '/' || pathname === '/#';

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
                <a
                    href="#"
                    style={{
                        color: '#FF5C00',
                        pointerEvents: isHome ? 'none' : 'auto',
                        opacity: isHome ? 1 : 0.7,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    Generales
                    {isHome && (
                        <span style={{
                            marginTop: '2px',
                            width: '100%',
                            height: '2px',
                            backgroundColor: '#FF5C00',
                        }} />
                    )}
                </a>
                <a href="#">Nacionales</a>
                <a href="#">Política</a>
                <a href="#">Economía</a>
                <a href="#">Policiales</a>
                <a href="#">Deportes</a>
                <a href="#">Mundo</a>
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