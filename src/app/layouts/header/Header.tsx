'use client';
import { useEffect, useState } from 'react';

export default function Header() {
    const [formattedDate, setFormattedDate] = useState('');

    const updateDate = () => {
        const now = new Date();
        const formatter = new Intl.DateTimeFormat('es-AR', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZone: 'America/Argentina/Buenos_Aires',
        });

        const dateString = formatter.format(now);
        const capitalized = dateString.charAt(0).toUpperCase() + dateString.slice(1);
        setFormattedDate(capitalized);
    };

    useEffect(() => {
        updateDate();

        const now = new Date();
        const buenosAiresOffset = -3 * 60;
        const utc = now.getTime() + now.getTimezoneOffset() * 60000;
        const baNow = new Date(utc + buenosAiresOffset * 60000);

        const nextMidnight = new Date(baNow);
        nextMidnight.setHours(24, 0, 0, 0);

        const delay = nextMidnight.getTime() - baNow.getTime();

        const timeout = setTimeout(() => {
            updateDate();
        }, delay);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <header style={{
            backgroundColor: '#1D1A18',
            color: 'white',
            fontSize: '18px',
            height: '33px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <img
                src="/icons/globe-with-meridians.svg"
                alt="Globo Mundial"
                style={{
                    marginRight: "10px",
                    userSelect: "none"
                }}
            />
            <span>{formattedDate}</span>
        </header>
    );
};
