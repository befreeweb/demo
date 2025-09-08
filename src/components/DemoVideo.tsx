import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

export default function DemoVideo() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-20 bg-gradient-to-br from-purple-600 via-pink-600 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            See Fankoin in Action
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Watch our platform demo to understand how Fankoin revolutionizes creator-fan relationships and discover the exclusive benefits of becoming a Founding Member.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Video Thumbnail */}
            <div className="relative bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-br from-purple-800 to-pink-800 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="group relative"
                >
                  <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                    <Play className="w-10 h-10 text-white ml-1" fill="currentColor" />
                  </div>
                  <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-pulse"></div>
                </button>
              </div>
              
              {/* Video Overlay Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-xl font-bold text-white mb-2">Platform Demo & Founding Member Benefits</h3>
                <p className="text-white/80 text-sm">Duration: 3:45 • Learn about exclusive features and lifetime benefits</p>
              </div>
            </div>

            {/* Video Features */}
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">01</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Platform Walkthrough</h4>
                <p className="text-white/70 text-sm">See how creators and fans interact on the Fankoin platform</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">02</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Member Benefits</h4>
                <p className="text-white/70 text-sm">Discover exclusive features available only to Founding Members</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">03</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Future Roadmap</h4>
                <p className="text-white/70 text-sm">Learn about upcoming features and platform expansion plans</p>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        {isVideoOpen && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Placeholder for actual video */}
              <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-purple-800 to-pink-800 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Play className="w-16 h-16 mx-auto mb-4 opacity-50" />
                    <h3 className="text-2xl font-bold mb-2">Demo Video Coming Soon</h3>
                    <p className="text-white/70">Replace this placeholder with your actual demo video</p>
                    <p className="text-white/50 text-sm mt-4">
                      You can embed YouTube, Vimeo, or host your own video file here
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}