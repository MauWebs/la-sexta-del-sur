'use client';
import { useParams } from 'next/navigation';
import allPosts from '../../../data/posts.json';

export default function RenderNew() {
    const params = useParams();
    const id = Number(params?.id);
    const post = allPosts.find((item) => item.id === id);
    if (!post) { return <div>Post no encontrado</div> };
    return (
        <div className="p-6 max-w-3xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
            <p className="text-sm text-gray-500 mb-2">{post.date} - {post.target}</p>
            <img src={post.img} alt="Post image" className="mb-4 w-full rounded" />
            <p className="text-lg mb-4">{post.description}</p>
        </div>
    );
};