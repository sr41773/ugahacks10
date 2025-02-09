import React from 'react';
import { getSession } from "@auth0/nextjs-auth0";
import { Music, Brain, Sparkles } from 'lucide-react';

export default async function Home() {
  const session = await getSession();
  const user = session?.user;

  const brainFacts = [
    "Different disorders share similar brainwave patterns - ADHD, OCD, and schizophrenia are more connected than we think",
    "Too many slow waves (delta & theta) can make you feel foggy and unfocused",
    "Alpha, beta, and gamma waves help with focus, often lower in anxiety and depression",
    "Music syncs with your brainwaves to improve mood, focus, and relaxation",
    "Familiar songs can unlock memories and emotions in people with dementia",
    "Music releases dopamine, your brain's natural mood booster",
    "Learning music helps your brain form new healing connections",
    "EEG neurofeedback can train your brain for better focus and less anxiety"
  ];

  return (
    <div className="min-h-screen bg-[#F0EAD2]">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#6C584C] mb-4">
            Medical Medely
          </h1>
          <p className="text-xl text-[#A98467]">Your Wellness Journey Through Music</p>
        </div>

        {user ? (
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
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
                Welcome back!
              </h2>
              <p className="text-[#A98467]">Discover the fascinating connection between your brain and music</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-8">
                {brainFacts.map((fact, index) => (
                  <div key={index} 
                    className={`p-6 rounded-xl ${index % 2 === 0 ? 'bg-[#DDE5B6]' : 'bg-[#ADC178]'} 
                    hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}>
                    <div className="flex items-start space-x-3">
                      {index % 2 === 0 ? 
                        <Brain className="w-6 h-6 text-[#6C584C] flex-shrink-0 mt-1" /> :
                        <Sparkles className="w-6 h-6 text-[#6C584C] flex-shrink-0 mt-1" />
                      }
                      <p className="text-[#6C584C] font-medium leading-relaxed">{fact}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Music className="w-16 h-16 mx-auto text-[#ADC178] mb-4" />
              <h2 className="text-2xl font-semibold text-[#6C584C] mb-4">
                Begin Your Musical Journey
              </h2>
              <p className="text-[#A98467] mb-8">
                Join us to discover the healing power of music therapy.
                Sign in to access your personalized healing journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {brainFacts.slice(0, 4).map((fact, index) => (
                <div key={index} 
                  className={`p-6 rounded-xl ${index % 2 === 0 ? 'bg-[#DDE5B6]' : 'bg-[#ADC178]'}`}>
                  <div className="flex items-start space-x-3">
                    <Brain className="w-6 h-6 text-[#6C584C] flex-shrink-0 mt-1" />
                    <p className="text-[#6C584C] font-medium leading-relaxed">{fact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}