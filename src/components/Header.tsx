import React, { useState } from 'react';
import { Menu, X, Coins } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
              <Coins className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">
              Fankoin
            </span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
            <a href="#demo" className="text-white/90 hover:text-white transition-colors">Demo</a>
            <a href="#tokenomics" className="text-white/90 hover:text-white transition-colors">Tokenomics</a>
            <a href="#roadmap" className="text-white/90 hover:text-white transition-colors">Roadmap</a>
            <a href="#team" className="text-white/90 hover:text-white transition-colors">Team</a>
            <a href="#faq" className="text-white/90 hover:text-white transition-colors">FAQ</a>
            <a href="https://buy.fankoin.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Become a Founder
            </a>
          </nav>

          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-white/10">
            <nav className="flex flex-col space-y-4">
              <a href="#about" className="text-white/90 hover:text-white transition-colors">About</a>
              <a href="#demo" className="text-white/90 hover:text-white transition-colors">Demo</a>
              <a href="#tokenomics" className="text-white/90 hover:text-white transition-colors">Tokenomics</a>
              <a href="#roadmap" className="text-white/90 hover:text-white transition-colors">Roadmap</a>
              <a href="#team" className="text-white/90 hover:text-white transition-colors">Team</a>
              <a href="#faq" className="text-white/90 hover:text-white transition-colors">FAQ</a>
              <a href="https://buy.fankoin.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full w-full text-center">
                Become a Founder
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}