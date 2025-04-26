'use client';
import Header from "../layouts/Header";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import RenderNew from '../main/RenderNew';


export default function Page() {
    return (<>
        <Header />
        <Navbar />
        <RenderNew />
        <Footer />
    </>
    );
};