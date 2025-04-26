'use client';
import Link from 'next/link';
import { useState } from 'react';
import allPosts from '../../../data/posts.json';
import PortOfBahiaBlancaBanner from "./PortOfBahiaBlancaBanner";

export default function LatestPosts() {

    const [isHovered, setIsHovered] = useState(false);

    const sortedPosts = [...allPosts].sort((a, b) => b.id - a.id);
    const mainPosts = sortedPosts.slice(0, 3);

    // const secondaryPosts = sortedPosts.slice(3, 6);

    const trimDescription = (description: string, maxWords: number) => {
        const words = description.split(' ');
        if (words.length > maxWords) { return words.slice(0, maxWords).join(' ') + '...'; }
        return description;
    };

    return (
        <div style={{ padding: '37px 20px 0px 34px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>

            <PortOfBahiaBlancaBanner />

            {mainPosts.map((post, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div key={post.id}>
                        <Link
                            href={`/${post.id}`}
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                opacity: isHovered ? '0.8' : '1',
                                transition: 'opacity 0.3s ease',
                                background: 'none',
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: isEven ? 'row' : 'row-reverse',
                                    overflow: 'hidden',
                                    width: '1360px',
                                    height: '318px',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative',
                                    cursor: 'pointer',
                                }}
                            >
                                <div style={{
                                    flex: 1,
                                    paddingRight: isEven ? '20px' : '0',
                                    paddingLeft: isEven ? '0' : '20px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}>
                                    <span style={{
                                        fontSize: '18px',
                                        color: '#FF5C00',
                                        fontFamily: 'var(--font-tt-commons-demibold)',
                                        marginBottom: '8px'
                                    }}>
                                        {post.target}
                                    </span>

                                    <h3 style={{
                                        color: '#292219',
                                        fontSize: '27px',
                                        fontWeight: 'bold',
                                        fontFamily: 'var(--font-publico-headline-bold)',
                                    }}>
                                        {post.title}
                                    </h3>

                                    <p style={{
                                        fontSize: '18px',
                                        color: '#5C5955',
                                        margin: '5px 0',
                                        fontFamily: 'var(--font-tt-commons-regular)',
                                    }}>
                                        {trimDescription(post.description, 120)}
                                    </p>
                                </div>

                                {post.img && (
                                    <div style={{
                                        position: 'relative',
                                        width: '466px',
                                        height: '280px'
                                    }}>
                                        <img
                                            src={post.img}
                                            alt={post.title}
                                            style={{
                                                objectFit: 'cover',
                                                width: '100%',
                                                height: '100%',
                                            }}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            right: 0,
                                            bottom: 0,
                                            backgroundColor: 'rgba(0, 0, 0, 0.10)',
                                            zIndex: 1,
                                        }} />
                                    </div>
                                )}
                            </div>
                        </Link>

                        <div
                            style={{
                                height: '2px',
                                backgroundColor: '#7C7C7C',
                                margin: '5px 0px 0px 0px',
                                opacity: '50%',
                            }}
                        />
                    </div>
                );
            })}

            {/* <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                borderBottom: 'solid 2px rgba(124, 124, 124, 0.5)',
                width: '1360px',
                padding: '30px 0',
                gap: '30px'
            }}>
                {secondaryPosts.map((post) => (
                    <div key={post.id} style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
                        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
                            <span style={{ fontSize: '18px', color: '#FF5C00', fontFamily: 'var(--font-tt-commons-demibold)', marginBottom: '8px' }}>
                                {post.target}
                            </span>
                            <h3 style={{ color: '#292219', fontSize: '23px', fontWeight: 'bold' }}>
                                {post.title}
                            </h3>
                            <p style={{ fontSize: '18px', color: '#5C5955', paddingTop: '10px' }}>
                                {trimDescription(post.description, 70)}
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}

        </div>
    );
};