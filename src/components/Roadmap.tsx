import React from 'react';
import { Check, Clock, Star } from 'lucide-react';

export default function Roadmap() {
  const phases = [
    {
      quarter: 'Q3 2025',
      title: 'Prototype Development',
      status: 'active',
      items: [
        'Prototype development',
        'Community outreach',
        'Initial partnership setup',
        'Technical foundation building'
      ]
    },
    {
      quarter: 'Q4 2025',
      title: 'Alpha Platform Launch',
      status: 'upcoming',
      items: [
        'Alpha platform launch',
        'Beta testing with limited creators/fans',
        'Platform optimization',
        'User feedback integration'
      ]
    },
    {
      quarter: 'Q1 2026',
      title: 'Full Platform Launch',
      status: 'upcoming',
      items: [
        'Full platform launch',
        'Marketing campaigns',
        'Token sale/ICO',
        'Exchange listings'
      ]
    },
    {
      quarter: 'Q2 2026 and beyond',
      title: 'Platform Expansion',
      status: 'upcoming',
      items: [
        'Platform expansion',
        'New features (additional creator tools)',
        'Strategic partnerships',
        'DAO governance implementation'
      ]
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <Check className="w-5 h-5 text-green-600" />;
      case 'active':
        return <Clock className="w-5 h-5 text-yellow-600" />;
      default:
        return <Star className="w-5 h-5 text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'border-green-200 bg-green-50';
      case 'active':
        return 'border-yellow-200 bg-yellow-50';
      default:
        return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-purple-800 via-purple-700 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Roadmap
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Our strategic plan to revolutionize fan ownership and creator economies through innovative blockchain technology.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-400 to-purple-400 rounded-full hidden md:block" />
          
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div key={index} className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className={`${index % 2 === 0 ? 'md:text-right md:pr-8' : 'md:pl-8 md:col-start-2'}`}>
                  <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${getStatusColor(phase.status)}`}>
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(phase.status)}
                      <span>{phase.quarter}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center space-x-2 text-white/80">
                        <div className={`w-2 h-2 rounded-full ${phase.status === 'completed' ? 'bg-green-500' : phase.status === 'active' ? 'bg-blue-500' : 'bg-gray-300'}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${index % 2 === 0 ? 'md:pl-8' : 'md:pr-8 md:col-start-1 md:row-start-1'}`}>
                  <div className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-2 ${getStatusColor(phase.status)}`}>
                    <div className="text-center">
                      <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${phase.status === 'completed' ? 'bg-green-100' : phase.status === 'active' ? 'bg-yellow-100' : 'bg-gray-100'}`}>
                        {getStatusIcon(phase.status)}
                      </div>
                      <div className="text-lg font-semibold text-white">{phase.quarter}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-4 border-pink-400 rounded-full hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}