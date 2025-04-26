'use client';
import { useState } from 'react';
import Link from 'next/link';
import allPosts from '../../../data/posts.json';

export default function SecondaryPosts() {

    const [isHovered, setIsHovered] = useState(false);

    const sortedPosts = [...allPosts].sort((a, b) => b.id - a.id);
    const secondaryPosts = sortedPosts.slice(3, 6);

    const trimDescription = (description: string, maxWords: number) => {
        const words = description.split(' ');
        if (words.length > maxWords) { return words.slice(0, maxWords).join(' ') + '...'; }
        return description;
    };

    return (
        <div style={{
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
        </div>
    );
};