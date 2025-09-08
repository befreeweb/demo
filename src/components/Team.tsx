import React from 'react';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function Team() {
  const team = [
    {
      name: 'Alex Rodriguez',
      role: 'CEO & Founder',
      image: 'https://images.pexels.com/photos/3756681/pexels-photo-3756681.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former Head of Creator Partnerships at YouTube, 12+ years in digital media',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Sarah Kim',
      role: 'CTO',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Blockchain architect, former Ethereum Foundation developer',
      social: { linkedin: '#', github: '#' }
    },
    {
      name: 'Marcus Chen',
      role: 'Head of Creator Relations',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Creator economy specialist, built partnerships with 1000+ creators',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emily Watson',
      role: 'Head of Product',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Product strategist, former Patreon VP of Creator Experience',
      social: { github: '#', twitter: '#' }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-br from-pink-600 via-purple-700 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Meet Our Team
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            A passionate group of creators, technologists, and community builders dedicated to revolutionizing fan ownership.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-white/20">
              <div className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-pink-300 font-semibold mb-3">{member.role}</p>
                <p className="text-white/80 text-sm mb-4 leading-relaxed">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} className="text-white/60 hover:text-white transition-colors">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} className="text-white/60 hover:text-white transition-colors">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} className="text-white/60 hover:text-white transition-colors">
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg border border-white/20">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Backed by Industry Leaders</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Our advisory board includes executives from leading tech companies and successful entrepreneurs in the creator economy space.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <div className="text-2xl font-bold text-white/60">Business of Cinema</div>
            <div className="text-2xl font-bold text-white/60">BOC Chain</div>
            <div className="text-2xl font-bold text-white/60">Film Ventures</div>
            <div className="text-2xl font-bold text-white/60">Cinema Capital</div>
          </div>
        </div>
      </div>
    </section>
  );
}