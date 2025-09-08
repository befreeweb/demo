import React from 'react';
import { PieChart, Users, Briefcase, Rocket, Shield } from 'lucide-react';
import BuyWidget from './BuyWidget';

export default function Tokenomics() {
  const distribution = [
    { category: 'Public Sale', percentage: 45, color: 'bg-yellow-500', icon: Users },
    { category: 'Team & Advisors', percentage: 18, color: 'bg-orange-500', icon: Briefcase },
    { category: 'Development', percentage: 20, color: 'bg-green-500', icon: Rocket },
    { category: 'Marketing & Partnerships', percentage: 12, color: 'bg-red-500', icon: PieChart },
    { category: 'Reserve Fund', percentage: 5, color: 'bg-gray-500', icon: Shield }
  ];

  return (
    <section id="tokenomics" className="py-20 bg-gradient-to-br from-pink-600 via-purple-700 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            How Funds Will Be Used
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Proceeds from the Founding Member Token pre-sale will be strategically allocated to build and launch the Fankoin platform.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Platform Development</h3>
            <p className="text-white/80">Finalize platform development and comprehensive testing to ensure a robust user experience</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Community Campaigns</h3>
            <p className="text-white/80">Launch comprehensive community engagement campaigns to build our creator and fan base</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Strategic Partnerships</h3>
            <p className="text-white/80">Secure key partnerships with creators, brands, and platforms to expand our ecosystem</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <PieChart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Member Rewards</h3>
            <p className="text-white/80">Maintain liquidity reserves to fund ongoing member rewards and loyalty incentives</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center border border-white/20">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Operations & Compliance</h3>
            <p className="text-white/80">Cover operational costs and ensure full regulatory compliance across all jurisdictions</p>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">5,000</div>
            <div className="text-white/80 mb-4">Limited Supply</div>
            <p className="text-sm text-white/70">Exclusive founding member tokens available</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">$1,000</div>
            <div className="text-white/80 mb-4">Token Price</div>
            <p className="text-sm text-white/70">Lifetime premium membership value</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg text-center border border-white/20">
            <div className="text-3xl font-bold text-white mb-2">Jan 2026</div>
            <div className="text-white/80 mb-4">Platform Launch</div>
            <p className="text-sm text-white/70">Platform launches no later than January 2026</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Become a Founding Member?</h3>
            <p className="text-white/80 mb-6">Join 5,000 exclusive founding members and secure your lifetime premium access to Fankoin.</p>
            <BuyWidget />
            <p className="text-white/60 text-sm mt-4">Secure payment • Instant confirmation • Limited time offer</p>
          </div>
        </div>
      </div>
    </section>
  );
}