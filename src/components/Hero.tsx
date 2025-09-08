import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Star } from 'lucide-react';
import BuyWidget from './BuyWidget';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date('2024-12-31T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-purple-800 flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-white/80">Businessofcinema.com powering the entertainment biz since 2005, brings you</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Revolutionizing
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                {' '}Fan Ownership
              </span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Secure your lifetime premium membership to the Fankoin platform. 
              The Founding Member Token grants permanent access to exclusive features, 
              reduced fees, and unique member-only opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a href="https://buy.fankoin.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                <span>Become a Founding Member</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#demo" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 hover:bg-white/10 transition-all duration-300">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-white">5,000</div>
                <div className="text-white/60">Limited Supply</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">$1,000</div>
                <div className="text-white/60">Token Price</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">Jan 2025</div>
                <div className="text-white/60">Launch</div>
              </div>
            </div>
          </div>

          <div className="lg:pl-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                Founding Member Pre-Sale
              </h3>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-white">
                  <span>Token Price:</span>
                  <span className="font-bold">$1,000 USD</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Total Supply:</span>
                  <span className="font-bold">5,000 Tokens</span>
                </div>
                <div className="flex justify-between text-white">
                  <span>Delivery:</span>
                  <span className="font-bold">January 2026</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-3">
                  <div className="bg-gradient-to-r from-yellow-400 to-pink-400 h-3 rounded-full" style={{width: '15%'}}></div>
                </div>
                <div className="text-center text-white/80 text-sm">
                  Limited time pre-sale offer
                </div>
              </div>

              <div className="space-y-3">
                <BuyWidget />
                <div className="text-center text-white/70 text-sm">
                  Secure Your Founding Membership
                </div>
              </div>

              <div className="mt-4 text-center text-white/60 text-sm">
                Payment: Bank transfer, credit card, or crypto • All sales final
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}