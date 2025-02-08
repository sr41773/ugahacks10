import React from 'react';
import { getSession } from "@auth0/nextjs-auth0";
import { Music, Heart, Waves } from 'lucide-react';

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  return (
    <div className="min-h-screen bg-[#F0EAD2]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#6C584C] mb-4">
            Harmony & Healing
          </h1>
          <p className="text-xl text-[#A98467]">Your Journey to Wellness Through Music</p>
        </div>

        {user ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative">
                <div className="absolute -inset-1 bg-[#ADC178] rounded-full blur opacity-75"></div>
                <img 
                  src={user.picture} 
                  alt="User picture" 
                  className="relative w-24 h-24 rounded-full object-cover border-4 border-[#DDE5B6]"
                />
              </div>
              <h2 className="text-2xl font-semibold text-[#6C584C]">
                Welcome back, {user.name}
              </h2>
              <p className="text-[#A98467]">Ready for today's musical journey?</p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
                <div className="bg-[#DDE5B6] p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <Music className="w-8 h-8 mx-auto mb-3 text-[#6C584C]" />
                  <p className="text-[#6C584C] font-medium">Today's Session</p>
                </div>
                <div className="bg-[#ADC178] p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <Heart className="w-8 h-8 mx-auto mb-3 text-[#6C584C]" />
                  <p className="text-[#6C584C] font-medium">Progress</p>
                </div>
                <div className="bg-[#DDE5B6] p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                  <Waves className="w-8 h-8 mx-auto mb-3 text-[#6C584C]" />
                  <p className="text-[#6C584C] font-medium">Relaxation</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <Music className="w-16 h-16 mx-auto text-[#ADC178] mb-4" />
              <h2 className="text-2xl font-semibold text-[#6C584C] mb-4">
                Begin Your Musical Journey
              </h2>
              <p className="text-[#A98467]">
                Join us to discover the healing power of music therapy.
                Sign in to access your personalized healing journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#DDE5B6] p-4 rounded-xl">
                <h3 className="font-medium text-[#6C584C] mb-2">Personalized Care</h3>
                <p className="text-sm text-[#6C584C]">Tailored music therapy sessions</p>
              </div>
              <div className="bg-[#ADC178] p-4 rounded-xl">
                <h3 className="font-medium text-[#6C584C] mb-2">Track Progress</h3>
                <p className="text-sm text-[#6C584C]">Monitor your wellness journey</p>
              </div>
              <div className="bg-[#DDE5B6] p-4 rounded-xl">
                <h3 className="font-medium text-[#6C584C] mb-2">Community</h3>
                <p className="text-sm text-[#6C584C]">Connect through music</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}