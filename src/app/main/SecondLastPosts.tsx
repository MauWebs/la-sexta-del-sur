'use client';

export default function SecondLastPosts() {

    const posts = [
        {
            id: 1,
            target: 'Política',
            title: 'Axel Kicillof insiste con el desdoblamiento de las elecciones.',
            description: 'El gobernador bonaerense, Axel Kicillof, insistió con su plan de desdoblamiento de elecciones, a pesar de la presión interna del kirchnerismo.',
        },
        {
            id: 2,
            target: 'Generales',
            title: 'McDonalds de Bahía Blanca lanza una promoción sin precedentes.',
            description: 'McDonald\'s desató una avalancha de clientes con su promoción especial en el local principal del shopping de Bahía Blanca.',
        },
        {
            id: 3,
            target: 'Política',
            title: 'Axel Kicillof insiste con el desdoblamiento de las elecciones.',
            description: 'El gobernador bonaerense, Axel Kicillof, insistió con su plan de desdoblamiento de elecciones, a pesar de la presión interna del kirchnerismo.',
        },
        {
            id: 4,
            target: 'Economía',
            title: 'El mercado de valores alcanza nuevos máximos.',
            description: 'El mercado de valores ha alcanzado nuevos máximos históricos debido a un aumento en la confianza del consumidor.',
        }
    ];

    return (
        <div style={{ padding: '40px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px',  borderBottom: 'solid 2px rgba(124, 124, 124, 0.5)', margin: '0px 40px' }}>
            {posts.map((post) => (
                <div key={post.id} style={{ display: 'flex', flexDirection: 'row', gap: '12px', width: '100%' }}>
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', padding: '10px' }}>
                        <span style={{ fontSize: '16px', color: '#FF5C00', fontWeight: '600', marginBottom: '4px' }}>
                            {post.target}
                        </span>

                        <h3 style={{ color: '#292219', fontSize: '25px', fontWeight: 'bold' }}>
                            {post.title}
                        </h3>

                        <p style={{ fontSize: '20px', color: '#5C5955', margin: '5px 0' }}>
                            {post.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};