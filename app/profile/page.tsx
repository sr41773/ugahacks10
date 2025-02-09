import React from 'react';
import { getSession } from "@auth0/nextjs-auth0";
import ProfileClient from "./components/user-client";
import ProfileServer from "./components/user-server";
import { redirect } from "next/navigation";
import { Music, Heart, Clock, Calendar, BadgeCheck, Timer } from 'lucide-react';
import ProfileDetails from '@/components/ProfileDetails';

const Profile = async () => {
  const session = await getSession();
  const user = session?.user;
  
  if (!user) {
    redirect("/");
  }

  const therapyStats = {
    sessionsCompleted: 24,
    totalHours: 36,
    nextSession: "Tomorrow at 2:00 PM",
    favoriteFocus: "Stress Reduction",
    currentGoal: "Anxiety Management",
    weeklyProgress: "On Track"
  };

  return (
    <div className="min-h-screen bg-[#F0EAD2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-[#ADC178] rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-[#DDE5B6] rounded-full blur opacity-75"></div>
              <img 
                src={user.picture} 
                alt={user.name}
                className="relative w-24 h-24 rounded-full border-4 border-[#6C584C] object-cover"
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-[#6C584C] mb-2">{user.name}</h1>
              <p className="text-[#6C584C]">Music Therapy Journey Since 2024</p>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-[#ADC178]" />
              <div>
                <p className="text-sm text-[#A98467]">Total Sessions</p>
                <p className="text-2xl font-bold text-[#6C584C]">{therapyStats.sessionsCompleted}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <Timer className="w-8 h-8 text-[#ADC178]" />
              <div>
                <p className="text-sm text-[#A98467]">Hours of Therapy</p>
                <p className="text-2xl font-bold text-[#6C584C]">{therapyStats.totalHours}</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <Calendar className="w-8 h-8 text-[#ADC178]" />
              <div>
                <p className="text-sm text-[#A98467]">Next Session</p>
                <p className="text-2xl font-bold text-[#6C584C]">{therapyStats.nextSession}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-[#6C584C] mb-6 flex items-center gap-2">
              <Music className="w-6 h-6 text-[#ADC178]" />
              Therapy Progress
            </h2>
            <div className="bg-[#DDE5B6]/20 rounded-lg p-4 mb-4">
              <ProfileClient />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#A98467]">Current Focus</span>
                <span className="text-[#6C584C] font-medium">{therapyStats.favoriteFocus}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#A98467]">Weekly Goal Status</span>
                <span className="text-[#6C584C] font-medium">{therapyStats.weeklyProgress}</span>
              </div>
            </div>
          </div>

          // In your Profile page
<div className="bg-[#DDE5B6]/20 rounded-lg p-4 mb-4">
  <ProfileDetails />
</div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-2xl font-semibold text-[#6C584C] mb-6 flex items-center gap-2">
              <Heart className="w-6 h-6 text-[#ADC178]" />
              Treatment Plan
            </h2>
            <div className="bg-[#DDE5B6]/20 rounded-lg p-4 mb-4">
              <ProfileServer />
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[#A98467]">Current Goal</span>
                <span className="text-[#6C584C] font-medium">{therapyStats.currentGoal}</span>
              </div>
              <div className="flex items-center gap-2 text-[#ADC178]">
                <BadgeCheck className="w-5 h-5" />
                <span className="text-sm text-[#A98467]">Treatment plan updated weekly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;