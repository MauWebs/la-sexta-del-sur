'use client';

export default function PortOfBahiaBlancaVideo() {
    return (
        <article
            style={{
                width: '100%',
                overflow: 'hidden',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#000',
            }}
        >
            <video
                src="/puerto-bahia-blanca/video.mp4"
                controls
                playsInline
                style={{
                    width: '100%',
                    height: '300px',
                    objectFit: 'cover', 
                }}
            />
        </article>
    );
}