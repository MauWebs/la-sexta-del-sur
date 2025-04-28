'use client';
import Link from 'next/link';
import { useState } from 'react';
import allPosts from '../../../data/posts.json';
import PortOfBahiaBlancaBanner from "./PortOfBahiaBlancaBanner";

export default function LatestPosts() {

    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const sortedPosts = [...allPosts].sort((a, b) => b.id - a.id);
    const mainPosts = sortedPosts.slice(0, 3);

    const trimDescription = (description: string, maxWords: number) => {
        const words = description.split(' ');
        if (words.length > maxWords) { return words.slice(0, maxWords).join(' ') + '...'; }
        return description;
    };

    return (
        <div >

            <PortOfBahiaBlancaBanner />

            {mainPosts.map((post, index) => {
                const isEven = index % 2 === 0;

                return (
                    <div key={post.id}>
                        <Link
                            href={`/${post.id}`}
                            className={`p-4 flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center justify-center gap-3 ${isEven ? 'border-none' : 'border-t-2 border-b-2 border-[#D5D1C9]'}`}
                            style={{
                                opacity: hoveredIndex === index ? '0.8' : '1',
                                transition: 'opacity 0.3s ease',
                            }}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <div className='flex flex-col gap-1 w-full lg:w-7/12'>
                                <span className='text-[#FF5C00] text-[16px] sm:text-[18px]' style={{ fontFamily: 'var(--font-tt-commons-demibold)' }}>
                                    {post.target}
                                </span>

                                <h3 className='text-[20px] sm:text-[24px] md:text-[27px]' style={{ fontFamily: 'var(--font-publico-headline-bold)' }}>
                                    {post.title}
                                </h3>  

                                <p className='text-[16px] sm:text-[18px]' 
                                    style={{
                                        margin: '5px 0',
                                        color: '#5C5955',
                                        fontFamily: 'var(--font-tt-commons-regular)',
                                    }}>
                                    {trimDescription(post.description, 120)}
                                </p>
                            </div>

                            {post.img && (
                                <div className='w-full lg:w-5/12'>
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        className='w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] object-cover '
                                    />
                                </div>
                            )}
                        </Link>
                    </div>
                );
            })}

        </div>
    );
};