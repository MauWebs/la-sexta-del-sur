'use client';

import { useState } from 'react';

export default function AdminPage() {
    const [target, setTarget] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const newPost = { target, title, description };

        const res = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPost),
        });

        if (res.ok) {
            alert('Post creado exitosamente');
            setTarget('');
            setTitle('');
            setDescription('');
        } else {
            const error = await res.json();
            alert(`Error: ${error.error}`);
        }
    };

    return (
        <div style={{ margin: '20px'}}>
            <h1 style={{ textAlign: 'center', color: '#000' }}>Agregar un nuevo Post</h1>
            <form
                onSubmit={handleSubmit}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    maxWidth: '500px',
                    margin: '0 auto',
                    padding: '20px',
                    border: '1px solid #ddd',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Target:</label>
                    <select
                        value={target}
                        onChange={(e) => setTarget(e.target.value)}
                        required
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ddd',
                            width: '100%',
                        }}
                    >
                        <option value="Generales">Generales</option>
                        <option value="Nacionales">Nacionales</option>
                        <option value="Política">Política</option>
                        <option value="Economía">Economía</option>
                        <option value="Policiales">Policiales</option>
                        <option value="Tecnología">Tecnología</option>
                        <option value="Deportes">Deportes</option>
                        <option value="Mundo">Mundo</option>
                    </select>
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Título:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ddd',
                            width: '100%',
                        }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ fontWeight: 'bold', marginBottom: '5px' }}>Descripción:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                        style={{
                            padding: '10px',
                            fontSize: '16px',
                            border: '1px solid #ddd',
                            width: '100%',
                            minHeight: '100px',
                        }}
                    />
                </div>
                <button
                    type="submit"
                    style={{
                        padding: '10px 15px',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'background-color 0.3s ease',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
                    onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}
                >
                    Crear Post
                </button>
            </form>
        </div>
    );
}