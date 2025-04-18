import puppeteer from 'puppeteer';

export async function GET() {
    const url = 'https://dolarhoy.com/cotizaciondolarblue';

    try {
        console.log('Iniciando Puppeteer...');

        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.goto(url, { waitUntil: 'domcontentloaded' });

        const valores = await page.$$eval(
            'div.value',
            (elements) => elements.map(el => el.textContent.trim())
        );

        const blueDollarBuy = valores[0] || "No disponible";
        const blueDollarSell = valores[1] || "No disponible";

        await browser.close();

        return new Response(
            JSON.stringify({ blueDollarBuy, blueDollarSell }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error al hacer scraping:', error);
        return new Response(
            JSON.stringify({ error: 'Error al hacer scraping' }),
            { status: 500 }
        );
    }
}
