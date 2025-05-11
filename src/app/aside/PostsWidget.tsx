'use client';
import { useMemo } from 'react';
import Link from 'next/link';
import allPosts from '../../../data/posts.json';

export default function PostsWidget() {
    const trimDescription = (description: string, maxWords: number) => {
        const words = description.split(' ');
        return words.length > maxWords
            ? words.slice(0, maxWords).join(' ') + '...'
            : description;
    };

    const randomPosts = useMemo(() => {
        const shuffled = [...allPosts].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 3);
    }, []);

    return (
            <section className="w-full px-4 sm:px-0 bg-[#F9F8F6]">

            {randomPosts.map((post) => (
                <Link
                    key={post.id}
                    href={`/${post.id}`}
                    className="block py-3"
                >
                    <span
                        className="text-[#FF5C00] text-[18px]"
                        style={{ fontFamily: 'var(--font-tt-commons-demibold)' }}
                    >
                        {post.target}
                    </span>
                    {post.img && (
                        <div className="w-full mb-2">
                            <img
                                src={post.img}
                                alt={post.title}
                                className="w-full h-[150px] object-cover"
                            />
                        </div>
                    )}

                    <div className="flex flex-col gap-1 text-[#292219]">
                        <h3
                            className="text-[18px]"
                            style={{ fontFamily: 'var(--font-publico-headline-bold)' }}
                        >
                            {post.title}
                        </h3>

                        <p
                            className="text-[14px] text-[#5C5955]"
                            style={{ fontFamily: 'var(--font-tt-commons-regular)' }}
                        >
                            {trimDescription(post.description, 40)}
                        </p>
                    </div>
                </Link>
            ))}
        </section>
    );
}