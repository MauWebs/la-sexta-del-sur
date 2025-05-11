'use client';
import Dollars from './Dollars';
import PostsWidget from './PostsWidget';

export default function Aside() {
    return (
        <aside className="w-full lg:w-4/12">
            <Dollars />
            <PostsWidget />
        </aside>
    );
}