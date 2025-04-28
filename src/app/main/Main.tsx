'use client';
import LatestPosts from "./LatestPosts";
import VideosOfYoutube from "./VideosOfYoutube";
import TrustedBySection from "./TrustedBySection";

export default function Main() {
    return (
        <main className="w-full lg:w-8/12 ">
            <LatestPosts />
            <TrustedBySection />
            <VideosOfYoutube />
        </main>
    );
};