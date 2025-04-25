'use client';

import LatestPosts from "./LatestPosts";
import SecondLastPosts from "./SecondLastPosts";
import TrustedBySection from "./TrustedBySection";
import VideosOfYoutube from "./VideosOfYoutube";

export default function Main() {
    return (
        <main>
            <LatestPosts />
            <TrustedBySection />
            <VideosOfYoutube />
        </main>
    )
};