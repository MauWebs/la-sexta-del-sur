'use client';
import LatestPosts from "./LatestPosts";
import VideosOfYoutube from "./VideosOfYoutube";
import TrustedBySection from "./TrustedBySection";

export default function Main() {
    return (
        <main>
            <LatestPosts />
            <TrustedBySection />
            <VideosOfYoutube />
        </main>
    );
};