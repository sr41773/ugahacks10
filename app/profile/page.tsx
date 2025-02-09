"use client";

import React, { useEffect, useState } from 'react';
import { getSession } from "@auth0/nextjs-auth0";
import { redirect } from "next/navigation";
import { Music, Clock, Calendar, Timer } from 'lucide-react';
import ProfileDetails from '@/components/ProfileDetails';

const Profile = () => {
  const [profileData, setProfileData] = useState({
    personalInfo: {
      name: '',
      age: '',
      birthYear: '',
      country: ''
    }
  });

  useEffect(() => {
    // Load data from localStorage
    const loadProfileData = () => {
      const personalInfo = localStorage.getItem('personalInfo');
      if (personalInfo) {
        setProfileData({
          personalInfo: JSON.parse(personalInfo)
        });
      }
    };

    loadProfileData();
  }, []);

  return (
    <div className="min-h-screen bg-[#F0EAD2] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-[#ADC178] rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-[#DDE5B6] rounded-full blur opacity-75"></div>
              <div className="relative w-24 h-24 rounded-full border-4 border-[#6C584C] bg-[#DDE5B6] flex items-center justify-center">
                <Music className="w-12 h-12 text-[#6C584C]" />
              </div>
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold text-[#6C584C] mb-2">
                {profileData.personalInfo.name || "Welcome!"}
              </h1>
              <p className="text-[#6C584C]">Music Therapy Journey Since 2024</p>
            </div>
          </div>
        </div>
        <div className="bg-[#DDE5B6]/20 rounded-lg p-4 mb-4">
          <ProfileDetails />
        </div>
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <Clock className="w-8 h-8 text-[#ADC178]" />
              <div>
                <p className="text-sm text-[#A98467]">Birth Year</p>
                <p className="text-2xl font-bold text-[#6C584C]">
                  {profileData.personalInfo.birthYear || "Not Set"}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <Timer className="w-8 h-8 text-[#ADC178]" />
              <div>
                <p className="text-sm text-[#A98467]">Name</p>
                <p className="text-2xl font-bold text-[#6C584C]">
                  {profileData.personalInfo.name || "Not Set"}
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-4">
              <Calendar className="w-8 h-8 text-[#ADC178]" />
              <div>
                <p className="text-sm text-[#A98467]">Country</p>
                <p className="text-2xl font-bold text-[#6C584C]">
                  {profileData.personalInfo.country || "Not Set"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;




