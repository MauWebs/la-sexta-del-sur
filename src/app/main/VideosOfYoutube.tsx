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
    <section className="flex flex-wrap md:flex-nowrap items-center w-full max-w-[1360px] mx-auto mb-8 bg-[#0C0907] p-5 gap-5 box-border">
      <div className="flex-1 min-w-[300px] h-[300px] overflow-hidden">
        <iframe
          className="w-full h-full rounded-none"
          src={getEmbedUrl(selectedVideo.url)}
          title={selectedVideo.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="flex-1 min-w-[300px] flex flex-col max-h-[300px] overflow-y-auto gap-5 scrollbar-hide">
        {videos.map((video) => (
          <div
            key={video.id}
            onClick={() => setSelectedVideo(video)}
            className={`flex items-center gap-5 p-1 h-[70px] cursor-pointer rounded-none transition-colors ${
              selectedVideo.id === video.id ? 'bg-[#F19800]' : ''
            }`}
          >
            <img
              src={getThumbnailUrl(video.url)}
              alt={video.title}
              className="w-[120px] h-[50px] object-cover rounded-none"
            />
            <div className="flex flex-col justify-center overflow-hidden">
              <div className="text-white text-sm font-bold truncate max-w-[180px]">
                {video.title}
              </div>
              <div className="text-white text-xs mt-1">{video.duration}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};