'use client';
import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop';

export function useResponsive() {
    const [device, setDevice] = useState<DeviceType>('desktop');
    useEffect(() => {
        function handleResize() {
            const width = window.innerWidth;
            if (width <= 768) {
                setDevice('mobile');
            } else if (width <= 1024) {
                setDevice('tablet');
            } else {
                setDevice('desktop');
            }
        };
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    return { device };
};