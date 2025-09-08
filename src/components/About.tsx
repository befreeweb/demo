import React from 'react';
import { Shield, Users, Zap, Globe } from 'lucide-react';
import BuyWidget from './BuyWidget';

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What is the Founding Member Token?
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            A lifetime premium membership pass to the Fankoin platform with exclusive benefits and permanent access
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Lifetime Access</h3>
            <p className="text-white/70">
              One payment grants you permanent premium membership to the Fankoin platform
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Reduced Fees</h3>
            <p className="text-white/70">
              Save money on every transaction with permanently reduced platform fees
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Priority Access</h3>
            <p className="text-white/70">
              Early access to new features, beta programs, and exclusive partner perks
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Founders Club</h3>
            <p className="text-white/70">
              Exclusive events, experiences, and content reserved for founding members only
            </p>
          </div>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Key Benefits for Founding Members
              </h3>
              <p className="text-white/80 mb-6">
                As a Founding Member, you'll receive exclusive benefits that regular users won't have access to. 
                Your membership token is a lifetime pass to premium features and member-only opportunities 
                within the Fankoin ecosystem.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-white/80">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Loyalty incentives and bonus rewards
                </li>
                <li className="flex items-center text-white/80">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Reduced transaction fees forever
                </li>
                <li className="flex items-center text-white/80">
                  <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                  Exclusive founders club membership
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-full w-32 h-32 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">FOUNDER</span>
              </div>
              <p className="text-white/80">
                Limited to 5,000 founding members worldwide
              </p>
              <div className="mt-6">
                <BuyWidget />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}