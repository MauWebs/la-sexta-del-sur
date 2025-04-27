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
      <div style={{ marginTop: '90px' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            flexWrap: 'wrap',
          }}
        >
          <Main />
          <div
            style={{
              width: '1.5px',
              backgroundColor: '#D5D1C9',
              margin: '37px 0px',
              minHeight: '100px',
            }}
          />
          <Aside />
        </div>
      </div>
      <Footer />
    </>
  );
};