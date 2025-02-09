"use client";

// In components/ProfileDetails.tsx
import React, { useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';

const ProfileDetails = () => {
  const { user } = useUser();
  const [profileData, setProfileData] = useState({
    personalInfo: null,
    chronicConditions: [],
    temporaryConditions: []
  });

  useEffect(() => {
    // Load data from localStorage
    const loadProfileData = () => {
      const personalInfo = localStorage.getItem('personalInfo');
      const chronicConditions = localStorage.getItem('chronicConditions');
      const temporaryConditions = localStorage.getItem('temporaryConditions');

      setProfileData({
        personalInfo: personalInfo ? JSON.parse(personalInfo) : null,
        chronicConditions: chronicConditions ? JSON.parse(chronicConditions) : [],
        temporaryConditions: temporaryConditions ? JSON.parse(temporaryConditions) : []
      });
    };

    loadProfileData();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="space-y-4">
        {profileData.personalInfo && (
          <>
            <div className="flex items-center justify-between">
              <span className="text-[#A98467]">Age</span>
              <span className="text-[#6C584C] font-medium">
                {profileData.personalInfo.age}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#A98467]">Country</span>
              <span className="text-[#6C584C] font-medium">
                {profileData.personalInfo.country}
              </span>
            </div>
          </>
        )}
        
        {profileData.chronicConditions.length > 0 && (
          <div className="mt-4">
            <h3 className="text-[#6C584C] font-semibold mb-2">Chronic Conditions</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.chronicConditions.map((condition) => (
                <span
                  key={condition}
                  className="bg-[#DDE5B6]/20 px-3 py-1 rounded-full text-sm text-[#6C584C]"
                >
                  {condition}
                </span>
              ))}
            </div>
          </div>
        )}

        {profileData.temporaryConditions.length > 0 && (
          <div className="mt-4">
            <h3 className="text-[#6C584C] font-semibold mb-2">Temporary Conditions</h3>
            <div className="flex flex-wrap gap-2">
              {profileData.temporaryConditions.map((condition) => (
                <span
                  key={condition}
                  className="bg-[#DDE5B6]/20 px-3 py-1 rounded-full text-sm text-[#6C584C]"
                >
                  {condition}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileDetails;