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
        <section className="videos-wrapper">
            <div className="video-player">
                <iframe
                    width="100%"
                    height="100%"
                    src={getEmbedUrl(selectedVideo.url)}
                    title={selectedVideo.title}
                    frameBorder="0"
                    allowFullScreen
                    style={{ borderRadius: '0px' }}
                ></iframe>
            </div>

            <div className="videos-scroll">
                {videos.map((video) => (
                    <div
                        key={video.id}
                        onClick={() => setSelectedVideo(video)}
                        className={`video-item ${selectedVideo.id === video.id ? 'active' : ''}`}
                    >
                        <img
                            src={getThumbnailUrl(video.url)}
                            alt={video.title}
                            className="thumbnail"
                        />
                        <div className="video-info">
                            <div className="video-title">{video.title}</div>
                            <div className="video-duration">{video.duration}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* ESTILOS */}
            <style jsx>{`
        .videos-wrapper {
          display: flex;
          flex-direction: row;
          align-items: center;
          width: 100%;
          max-width: 1360px;
          margin: 0 auto 30px auto;
          background-color: #0C0907;
          padding: 20px;
          gap: 20px;
          box-sizing: border-box;
          flex-wrap: wrap;
        }

        .video-player {
          flex: 1 1 600px;
          height: 300px;
          overflow: hidden;
          min-width: 300px;
        }

        .videos-scroll {
          flex: 1 1 300px;
          display: flex;
          flex-direction: column;
          max-height: 300px;
          overflow-y: auto;
          gap: 20px;
          min-width: 300px;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .videos-scroll::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }

        .video-item {
          display: flex;
          cursor: pointer;
          gap: 20px;
          background-color: transparent;
          transition: background 0.3s;
          align-items: center;
          height: 70px;
          border-radius: 0px;
          padding: 5px;
        }
        .video-item.active {
          background-color: #F19800;
        }
        .thumbnail {
          width: 120px;
          height: 50px;
          object-fit: cover;
          border-radius: 0px;
        }
        .video-info {
          display: flex;
          flex-direction: column;
          justify-content: center;
          overflow: hidden;
        }
        .video-title {
          font-size: 14px;
          font-weight: bold;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          max-width: 180px;
        }
        .video-duration {
          font-size: 12px;
          color: #fff;
          margin-top: 5px;
        }

        @media (max-width: 768px) {
          .videos-wrapper {
            flex-direction: column;
            align-items: center;
            padding: 10px;
          }
          .video-player {
            width: 100%;
            height: 200px;
          }
          .videos-scroll {
            width: 100%;
            max-height: none;
          }
          .video-title {
            max-width: 100%;
          }
        }
      `}</style>
        </section>
    );
};