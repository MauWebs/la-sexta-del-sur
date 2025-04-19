'use client';
import React, { useEffect, useState } from 'react';

const CUSTOM_NAMES: Record<string, string> = {
    blue: 'Dólar Blue',
    oficial: 'Dólar Oficial',
    bolsa: 'Dólar MEP',
    contadoconliqui: 'Contado con liqui',
    cripto: 'Dólar cripto',
    tarjeta: 'Dólar Tarjeta',
    mayorista: 'Dólar Mayorista',
};

interface DollarData {
    compra: number;
    venta: number;
    casa: string;
    nombre: string;
    moneda: string;
}

export default function Dollars() {
    const [dollars, setDollars] = useState<DollarData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchDollars = async () => {
            try {
                const response = await fetch('https://dolarapi.com/v1/dolares');
                if (!response.ok) {
                    throw new Error(`Error fetching data: ${response.statusText}`);
                }
                const data: DollarData[] = await response.json();
                setDollars(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        fetchDollars();
    }, []);

    const formatPrice = (value: number) => {
        if (value % 1 === 0) {
            return value.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
            });
        } else {
            return value.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
            });
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <section
            style={{
                border: '2px solid #D5D1C9',
                padding: '10px 26px',
                width: '435px',
                boxSizing: 'border-box',
                backgroundColor: '#F9F8F6',
                margin: '0 auto',
                marginLeft: '20px',
            }}
        >
            <h2
                style={{
                    fontSize: '27px',
                    fontFamily: 'var(--font-publico-headline-bold)',
                    textAlign: 'center',
                    color: '#292219',
                    margin: 0,
                }}
            >
                Dolar Hoy
            </h2>

            <div style={{ borderTop: '2px solid #D5D1C9', margin: '8px 0' }}></div>

            {dollars.map((dollar, index) => (
                <div
                    key={dollar.casa}
                    style={{
                        padding: '10px 0',
                        borderBottom: index !== dollars.length - 1 ? '2px solid #D5D1C9' : 'none',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            fontSize: '16px',
                            fontFamily: 'var(--font-tt-commons-medium)',
                            color: '#292219',
                        }}
                    >
                        <span
                            style={{
                                fontFamily: 'var(--font-tt-commons-bold)',
                                whiteSpace: 'nowrap',
                                flex: 2,
                            }}
                        >
                            {CUSTOM_NAMES[dollar.casa] || dollar.nombre}
                        </span>

                        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ marginBottom: '4px' }}>Compra</span>
                            <span style={{ color: '#FF5C00' }}>{formatPrice(dollar.compra)}</span>
                        </div>

                        <div
                            style={{
                                width: '2px',
                                height: '25px',
                                backgroundColor: '#FF5C00',
                                margin: '0 10px',
                            }}
                        />
                        <div style={{ flex: 2, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <span style={{ marginBottom: '4px' }}>Venta</span>
                            <span style={{ color: '#FF5C00' }}>{formatPrice(dollar.venta)}</span>
                        </div>

                    </div>
                </div>
            ))}
        </section>
    );
}
