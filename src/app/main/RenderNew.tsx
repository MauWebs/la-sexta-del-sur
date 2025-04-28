'use client';
import { useParams } from 'next/navigation';
import allPosts from '../../../data/posts.json';

export default function RenderNew() {
    const params = useParams();
    const id = Number(params?.id);
    const post = allPosts.find((item) => item.id === id);
    if (!post) { return <div>Post no encontrado</div> };
    return (
        <div className="p-6 max-w-3xl mx-auto mt-[85px]">
            <p className="text-sm text-gray-500" style={{ marginBottom: "10px" }}>{post.date} - {post.target}</p>
            <img src={post.img} alt="Post image" className="mb-4 w-full" />
            <h1 className="font-bold" style={{ marginBottom: '12px', fontSize: '24px', fontFamily: 'var(--font-publico-headline-bold)' }}>{post.title}</h1>
            <p className="text-lg mb-4">{post.description}</p>
        </div>
    );
};