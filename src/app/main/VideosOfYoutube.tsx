'use client';
import { useState } from 'react';

const videos = [
    {
        id: 1,
        title: "DANIEL ALBERTO VEGA - RECTOR UNS",
        url: "https://youtu.be/SqhrriP8tqc",
        duration: "39:48"
    },
    {
        id: 2,
        title: "DIEGO NUÑEZ - MCDONALD'S",
        url: "https://youtu.be/qmw_n1RaOKY",
        duration: "03:12"
    },
    {
        id: 3,
        title: "GUILLERMO RAMIREZ",
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
            alignItems: 'center',
            width: '1360px',
            height: '318px',
            margin: '0px 0px 30px 30px',
            backgroundColor: '#0C0907',
            padding: '0px',
            gap: '20px',
            overflow: 'hidden',
            boxSizing: 'border-box',
        }}>
            <div style={{
                width: '900px',
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
                    width: '420px',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                    gap: '30px',
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
                            gap: '30px',
                            backgroundColor: selectedVideo.id === video.id ? '#F19800' : 'transparent',
                            transition: '0.3s',
                            alignItems: 'center',
                            height: '70px'
                        }}
                    >
                        <img
                            src={getThumbnailUrl(video.url)}
                            alt={video.title}
                            style={{ width: '130px', height: '100%', objectFit: 'cover' }}
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
                                color: '#fff',
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