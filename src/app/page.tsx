'use client';
import Header from "./layouts/header/Header";
import Navbar from "./layouts/navbar/Nabvar";
import Aside from "./aside/Aside";
import Main from "./main/Main";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <div style={{ display: 'flex', alignItems: 'stretch', margin: '0px' }}>
        <Main />
        <div style={{ width: '1.5px', backgroundColor: '#D5D1C9', margin: '37px 0px' }} />
        <Aside />
      </div>
    </>
  );
}