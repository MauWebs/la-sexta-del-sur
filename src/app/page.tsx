'use client';
import Aside from "./aside/Aside";
import Main from "./main/Main";

export default function Home() {
  return (
    <>

      <div className="mt-[90px] w-full max-w-[1500px] mx-auto">
        <div
          className="w-full flex flex-col lg:flex-row py-7 gap-5"
        >
          <Main />
          <div
            className="hidden lg:block"
            style={{
              width: '3px',
              backgroundColor: '#D5D1C9',
              minHeight: '100vh',
            }}
          />
          <Aside />
        </div>
      </div>

    </>
  );
};