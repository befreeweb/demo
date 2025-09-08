import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import DemoVideo from './components/DemoVideo';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <DemoVideo />
      <Tokenomics />
      <Roadmap />
      <Team />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;