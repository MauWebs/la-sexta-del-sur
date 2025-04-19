'use client';
import Header from "./layouts/Header";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";
import Aside from "./aside/Aside";
import Main from "./main/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div style={{ display: 'flex', alignItems: 'stretch', marginTop: '90px' }}>
        <Main />
        <div style={{ width: '1.5px', backgroundColor: '#D5D1C9', margin: '37px 0px' }} />
        <Aside />
      </div>
      <Footer />
    </>
  );
};