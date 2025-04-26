'use client';
import Image from 'next/image';

export default function TrustedBySection() {

    const logos = [
        '/companies/McDonalds.svg',
        '/companies/PuertoDeBahiaBlanca.svg',
        '/companies/KioscoLaTerminal.png',
        '/companies/remax.svg',
    ];

    return (
        <section
            style={{
                padding: '0rem 0',
                paddingTop: '0px',
                margin: '0px 22px',
                paddingBottom: '1.5rem',
            }}
        >
            <div
                style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    padding: '0 0rem',
                    textAlign: 'center',
                }}
            >
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                        gap: '2rem',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {logos.map((logo, index) => (
                        <div
                            key={index}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '1rem',
                                transition: 'filter 0.3s ease',
                                cursor: 'pointer',
                                height: '100%',
                                maxWidth: '100%',
                            }}
                        >
                            <Image
                                src={logo}
                                alt={`Logo ${index}`}
                                width={140}
                                height={80}
                                style={{
                                    objectFit: 'contain',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div
                style={{
                    height: '2px',
                    backgroundColor: '#7C7C7C',
                    opacity: '50%',
                }}
            />
        </section>
    );
};