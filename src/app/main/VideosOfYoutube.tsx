'use client';

import { useState } from 'react';

const videos = [
    {
        id: 1,
        title: "PERFIL DE EMPRENDEDOR - DANIEL ALBERTO VEGA - RECTOR UNS",
        url: "https://youtu.be/SqhrriP8tqc",
        duration: "39:48"
    },
    {
        id: 2,
        title: "Video Institucional - La Sexta del Sur",
        url: "https://youtu.be/qmw_n1RaOKY",
        duration: "03:12"
    },
    {
        id: 3,
        title: "Testimonio - Desarrollo Local",
        url: "https://youtu.be/EbtNcz6K7sU",
        duration: "08:20"
    }
];

function getVideoId(url: string) {
    return url.split("youtu.be/")[1];
}

function getEmbedUrl(url: string) {
    return `https://www.youtube.com/embed/${getVideoId(url)}`;
}

function getThumbnailUrl(url: string) {
    return `https://img.youtube.com/vi/${getVideoId(url)}/hqdefault.jpg`;
}

export default function VideosOfYoutube() {
    const [selectedVideo, setSelectedVideo] = useState(videos[0]);

    return (
        <section style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '1360px',
            height: '318px',
            margin: '0 auto',
            marginBottom: '35px',
            backgroundColor: '#0C0907',
            padding: '0px',
            gap: '20px',
            overflow: 'hidden',
            boxSizing: 'border-box'
        }}>
            <div style={{
                width: '930px',
                height: '100%',
                overflow: 'hidden'
            }}>
                <iframe
                    width="100%"
                    height="100%"
                    src={getEmbedUrl(selectedVideo.url)}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>

            <div
                style={{
                    width: '390px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none'
                }}
            >
                <style jsx>{`
                    div::-webkit-scrollbar {
                        display: none;
                    }
                `}</style>

                {videos.map((video) => (
                    <div
                        key={video.id}
                        onClick={() => setSelectedVideo(video)}
                        style={{
                            display: 'flex',
                            cursor: 'pointer',
                            gap: '10px',
                            padding: '5px',
                            backgroundColor: selectedVideo.id === video.id ? '#1a1a1a' : 'transparent',
                            transition: '0.3s',
                            alignItems: 'center',
                            height: '96px'
                        }}
                    >
                        <img
                            src={getThumbnailUrl(video.url)}
                            alt={video.title}
                            style={{ width: '120px', height: '100%', objectFit: 'cover'}}
                        />
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            overflow: 'hidden'
                        }}>
                            <div style={{
                                fontSize: '14px',
                                fontWeight: 'bold',
                                color: '#fff',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                maxWidth: '240px'
                            }}>
                                {video.title}
                            </div>
                            <div style={{
                                fontSize: '12px',
                                color: '#aaa',
                                marginTop: '5px'
                            }}>
                                {video.duration}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};