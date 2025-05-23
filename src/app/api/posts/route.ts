import fs from 'fs';
import path from 'path';

const postsFilePath = path.join(process.cwd(), 'data', 'posts.json');

interface Post {
    id: number;
    target: string;
    title: string;
    description: string;
    img: string;
    date: string;
};

const readPosts = (): Post[] => {
    try {
        const data = fs.readFileSync(postsFilePath, 'utf-8');
        return JSON.parse(data);
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('Error leyendo el archivo JSON:', err.message);
        }
        return [];
    }
};

const writePosts = (posts: Post[]) => {
    try {
        fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2));
    } catch (err: unknown) {
        if (err instanceof Error) {
            console.error('Error escribiendo el archivo JSON:', err.message);
        }
    }
};

export async function GET() {
    const posts = readPosts();
    return new Response(JSON.stringify(posts), { status: 200 });
};

export async function POST(req: Request) {
    const { target, title, description } = await req.json();

    if (!target || !title || !description) {
        return new Response(
            JSON.stringify({ error: 'Todos los campos son requeridos, excepto la imagen.' }),
            { status: 400 }
        );
    }

    const posts = readPosts();
    const newId = posts.length > 0 ? posts[posts.length - 1].id + 1 : 1;

    const newPost: Post = {
        id: newId,
        target,
        title,
        description,
        img: `/posts/${newId}.jpg`,
        date: new Date().toISOString(),
    };

    posts.push(newPost);
    writePosts(posts);

    return new Response(JSON.stringify(newPost), { status: 201 });
};