'use client';
import Image from 'next/image';

export default function TrustedBySection() {

    const logos = [
        '/companies/McDonalds.svg',
        '/companies/PuertoDeBahiaBlanca.svg',
        '/companies/remax.svg',
    ];

    return (
        <section
            style={{
                padding: '4rem 0',
                paddingTop: '0px',
            }}
        >
            <div
                style={{
                    maxWidth: '1100px',
                    margin: '0 auto',
                    padding: '0 2rem',
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
                    margin: '0px 20px 0px 20px',
                    opacity: '50%',
                }}
            />
        </section>
    );
};