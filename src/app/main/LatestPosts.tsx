'use client';
import PortOfBahiaBlancaBanner from "./PortOfBahiaBlancaBanner";

export default function LatestPosts() {

    const posts = [
        {
            id: 1,
            target: 'Política',
            title: 'En plena puja con Cristina Kirchner, Axel Kicillof insistió con pedir el desdoblamiento de las elecciones: “Dos días distintos es una opción”.',
            description: 'El gobernador bonaerense, Axel Kicillof, encabezó esta tarde un acto en el Teatro Argentino de La Plata, a tan solo un par de cuadras de la Legislatura provincial, donde los diputados intentaron sin éxito definir si suspenden las primarias. En las últimas horas se había redoblado la presión sobre el mandatario de la provincia de Buenos Aires, enfrentado en la interna con Cristina Kirchner, con una carta de la militancia kirchnerista en la que le reclamaron "una sola elección". Sin embargo, Kicillof insistió con su plan de desdoblamiento. "¿Cómo se puede garantizar que la gente pueda votar? Una solución posible es en dos días distintos. No es más caro", apuntó. Kicillof se mostró como la prenda de unidad en el justicialismo y llamó a mantener "un estado de deliberación, incluso con enojos" para "tener una discusión fraternal, para poder solucionar y no repetir lo que pasó, contener a todos los sectores que se sintieron excluidos que se fueron" del Frente de Todos, tras la gestión de Alberto Fernández a la que definió como "un gobierno que salió mal".',
            img: '/axel-kicillof.svg',
        },
        {
            id: 2,
            target: 'Generales',
            title: 'McDonalds de Bahía Blanca lanza una promoción sin precedentes y desata una avalancha de clientes en su local principal en el shopping.',
            description: 'La reconocida cadena de comida rápida sorprendió a los habitantes de Bahía Blanca con una oferta especial que atrajo a cientos de personas desde las primeras horas del día. Largas filas se formaron en el local principal, con clientes ansiosos por aprovechar descuentos exclusivos y promociones inéditas. La noticia se viralizó rápidamente en redes sociales, generando aún más expectativa y aumentando la afluencia de público. Algunos clientes esperaron por horas para acceder a la promoción, mientras el personal del restaurante redobló esfuerzos para atender la demanda. La iniciativa, pensada para fidelizar clientes y celebrar una fecha especial, marcó un récord de concurrencia y dejó en claro la fuerte presencia de la marca en la ciudad. Expertos en marketing destacan el impacto positivo de la estrategia, mientras que los clientes esperan que se repitan este tipo de promociones en el futuro, beneficiando a consumidores.',
            img: '/McDonalds.svg',
        },
        {
            id: 3,
            target: 'Política',
            title: 'En plena puja con Cristina Kirchner, Axel Kicillof insistió con pedir el desdoblamiento de las elecciones: “Dos días distintos es una opción”.',
            description: 'El gobernador bonaerense, Axel Kicillof, encabezó esta tarde un acto en el Teatro Argentino de La Plata, a tan solo un par de cuadras de la Legislatura provincial, donde los diputados intentaron sin éxito definir si suspenden las primarias. En las últimas horas se había redoblado la presión sobre el mandatario de la provincia de Buenos Aires, enfrentado en la interna con Cristina Kirchner, con una carta de la militancia kirchnerista en la que le reclamaron "una sola elección". Sin embargo, Kicillof insistió con su plan de desdoblamiento. "¿Cómo se puede garantizar que la gente pueda votar? Una solución posible es en dos días distintos. No es más caro", apuntó. Kicillof se mostró como la prenda de unidad en el justicialismo y llamó a mantener "un estado de deliberación, incluso con enojos" para "tener una discusión fraternal, para poder solucionar y no repetir lo que pasó, contener a todos los sectores que se sintieron excluidos que se fueron" del Frente de Todos, tras la gestión de Alberto Fernández a la que definió como "un gobierno que salió mal".',
            img: '/central-bank.svg',
        }
    ];

    return (
        <div style={{ padding: '37px 20px 0px 34px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px' }}>

            <PortOfBahiaBlancaBanner />

            {posts.map((post, index) => {
                const isEven = index % 2 === 0;
                return (
                    <div key={post.id}>

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
                                    {post.description}
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
        </div>
    );
};