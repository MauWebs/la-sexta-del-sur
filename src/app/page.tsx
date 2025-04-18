'use client';
import Header from "./layouts/header/Header";
import Navbar from "./layouts/navbar/Nabvar";
import Main from "./main/Main";

export default function Home() {
  return (
    <>
    <Header/>
    <Navbar/>
    <Main />
    </>
  );
};


// import { useState } from 'react';

//   const [articles, setArticles] = useState([
//     { title: 'Gran descubrimiento en Marte', content: 'Científicos han encontrado indicios de agua en el subsuelo marciano.', date: '27 de marzo de 2025' },
//     { title: 'Nueva tecnología revoluciona la IA', content: 'Una empresa ha desarrollado un modelo de inteligencia artificial 10 veces más eficiente.', date: '27 de marzo de 2025' }
//   ]);
  
//   return (
//     <div style={{ maxWidth: '800px', margin: '0 auto', fontFamily: 'Georgia, serif', backgroundColor: '#f5f5dc', padding: '20px', borderRadius: '8px' }}>
//       <h1 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginBottom: '20px' }}>📰 The Daily News</h1>
//       <hr style={{ border: '1px solid black' }} />
//       {articles.map((article, index) => (
//         <div key={index} style={{ marginBottom: '20px', padding: '10px', borderBottom: '1px solid gray' }}>
//           <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>{article.title}</h2>
//           <p style={{ fontSize: '14px', color: 'gray' }}>{article.date}</p>
//           <p style={{ fontSize: '18px' }}>{article.content}</p>
//         </div>
//       ))}
//       <hr style={{ border: '1px solid black', marginTop: '20px' }} />
//       <p style={{ textAlign: 'center', fontSize: '14px', color: 'gray' }}>© 2025 The Daily News - Todos los derechos reservados</p>
//     </div>
//   );
// }











// 'use client';

// import { useEffect, useState } from 'react';

// // CREAR COMPONENTE ACÁ ABAJO

// const [prices, setPrices] = useState({ blueDollarBuy: '', blueDollarSell: '' });
// const [error, setError] = useState<string | null>(null);
// const [loading, setLoading] = useState(true);

// useEffect(() => {
//     const fetchPrices = async () => {
//         try {
//             const response = await fetch('/api/scrape');
//             const data = await response.json();

//             const formattedPrices = formatPrices(data);

//             setPrices(formattedPrices);
//         } catch (error) {
//             setError('Error al obtener los datos');
//         } finally {
//             setLoading(false);
//         }
//     };

//     fetchPrices();
// }, []);

// const formatPrices = (data: { blueDollarBuy?: string; blueDollarSell?: string }) => {
//     const formatNumber = (value?: string) => {
//         if (!value) return 'N/A';

//         let cleanValue = value.replace('$', '').replace(',', '.');

//         let num = parseFloat(cleanValue);
//         if (isNaN(num)) return 'N/A';

//         return `$${num.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
//     };

//     return {
//         blueDollarBuy: formatNumber(data.blueDollarBuy),
//         blueDollarSell: formatNumber(data.blueDollarSell)
//     };
// };

// return (
//     <div>
//         {loading ? (
//             <p>Cargando...</p>
//         ) : error ? (
//             <p>{error}</p>
//         ) : (
//             <div>
//                 <p>
//                     <strong>Dólar Blue:</strong>
//                     <br />
//                     Compra: {prices.blueDollarBuy}
//                     <br />
//                     Venta: {prices.blueDollarSell}
//                 </p>
//             </div>
//         )}
//     </div>
// );