
"use client";

import { useState } from 'react';
import Navbar from "./components/Navbar";
import Charvar from './components/Charvar';
import History from './components/History';
import Footer from './components/footer';


const Home = () => {
  
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="container mx-auto p-4 mt-16">
          <Charvar />
          <History />
          <Footer/>
        </div>
      </main>
    </div>
  );
};

export default Home;

