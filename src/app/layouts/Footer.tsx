'use client';

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: '#0C0907',
                padding: '20px',
                color: '#FFFFFF',
                textAlign: 'center',
            }}
        >
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
            }}>
                <a href="https://www.instagram.com/lasextadelsur/" target="_blank" rel="noopener noreferrer">
                    <img src="/social-media/instagram-icon.svg" alt="Instagram" style={{ height: '40px', width: '40px' }} />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=5492920217918&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                    <img src="/social-media/whatsapp-icon.svg" alt="WhatsApp" style={{ height: '40px', width: '40px' }} />
                </a>
                <a href="https://www.youtube.com/@lasextadigital" target="_blank" rel="noopener noreferrer">
                    <img src="/social-media/youtube-icon.svg" alt="YouTube" style={{ height: '40px', width: '40px' }} />
                </a>
            </div>
            <p style={{ marginTop: '10px' }}>
                © 2025 La Sexta Del Sur. Todos los derechos reservados.
            </p>
        </footer>
    );
};