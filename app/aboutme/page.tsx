"use client";

import React, { useState, useEffect } from 'react';
import { useUser } from '@auth0/nextjs-auth0/client';
import { Save, Music, AlertCircle } from 'lucide-react';
import { useRouter } from 'next/navigation'; // Add this import

const chronicConditions = [
  { id: 'insomnia', label: 'Insomnia' },
  { id: 'depression', label: 'Depression' },
  { id: 'bodyPain', label: 'Chronic Body Pain' },
  { id: 'anxiety', label: 'Chronic Anxiety' },
  { id: 'dementia', label: 'Dementia/Alzheimer\'s' }
];

const temporaryConditions = [
  { id: 'tempSleep', label: 'Temporary Sleep Issues' },
  { id: 'stress', label: 'Stress' },
  { id: 'surgeryStress', label: 'Pre/Post Surgery Stress' },
  { id: 'tempPain', label: 'Temporary Pain' }
];

export default function IllnessPage() {
  const router = useRouter(); // Add this hook
  const { user } = useUser();
  const [personalInfo, setPersonalInfo] = useState({
    age: '',
    birthYear: '',
    name: '',
    country: ''
  });
  const [selectedChronic, setSelectedChronic] = useState<string[]>([]);
  const [selectedTemporary, setSelectedTemporary] = useState<string[]>([]);
  const [saveStatus, setSaveStatus] = useState('');

  useEffect(() => {
    // Load saved selections from localStorage when component mounts
    const loadSavedSelections = () => {
      const savedPersonalInfo = localStorage.getItem('personalInfo');
      const savedChronic = localStorage.getItem('chronicConditions');
      const savedTemporary = localStorage.getItem('temporaryConditions');

      if (savedPersonalInfo) setPersonalInfo(JSON.parse(savedPersonalInfo));
      if (savedChronic) setSelectedChronic(JSON.parse(savedChronic));
      if (savedTemporary) setSelectedTemporary(JSON.parse(savedTemporary));
    };

    loadSavedSelections();
  }, []);

  const handlePersonalInfoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPersonalInfo(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleChronicToggle = (conditionId: string) => {
    setSelectedChronic(prev =>
      prev.includes(conditionId)
        ? prev.filter(id => id !== conditionId)
        : [...prev, conditionId]
    );
  };

  const handleTemporaryToggle = (conditionId: string) => {
    setSelectedTemporary(prev =>
      prev.includes(conditionId)
        ? prev.filter(id => id !== conditionId)
        : [...prev, conditionId]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    localStorage.setItem('personalInfo', JSON.stringify(personalInfo));
    localStorage.setItem('chronicConditions', JSON.stringify(selectedChronic));
    localStorage.setItem('temporaryConditions', JSON.stringify(selectedTemporary));
    
    setSaveStatus('Saved successfully!');
    
    // Navigate to songs page after a brief delay to show the save status
    setTimeout(() => {
      router.push('/songs');
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-[#F0EAD2] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h1 className="text-3xl font-bold text-[#6C584C] mb-6 flex items-center gap-2">
            <Music className="w-8 h-8 text-[#ADC178]" />
            Update your information!
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="bg-[#DDE5B6]/20 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-[#6C584C] mb-4">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#A98467] mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={personalInfo.name}
                    onChange={handlePersonalInfoChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#ADC178] focus:outline-none focus:ring-2 focus:ring-[#ADC178]"
                  />
                </div>
                <div>
                  <label className="block text-[#A98467] mb-1">Age</label>
                  <input
                    type="number"
                    name="age"
                    value={personalInfo.age}
                    onChange={handlePersonalInfoChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#ADC178] focus:outline-none focus:ring-2 focus:ring-[#ADC178]"
                  />
                </div>
                <div>
                  <label className="block text-[#A98467] mb-1">Year of Birth</label>
                  <input
                    type="number"
                    name="birthYear"
                    value={personalInfo.birthYear}
                    onChange={handlePersonalInfoChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#ADC178] focus:outline-none focus:ring-2 focus:ring-[#ADC178]"
                  />
                </div>
                <div>
                  <label className="block text-[#A98467] mb-1">Country of Origin</label>
                  <input
                    type="text"
                    name="country"
                    value={personalInfo.country}
                    onChange={handlePersonalInfoChange}
                    className="w-full px-4 py-2 rounded-lg border border-[#ADC178] focus:outline-none focus:ring-2 focus:ring-[#ADC178]"
                  />
                </div>
              </div>
            </div>

            {/* Chronic Conditions */}
            <div className="bg-[#DDE5B6]/20 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-[#6C584C] mb-4">Chronic Conditions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {chronicConditions.map(condition => (
                  <label
                    key={condition.id}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-[#ADC178] cursor-pointer hover:bg-[#ADC178]/10"
                  >
                    <input
                      type="checkbox"
                      checked={selectedChronic.includes(condition.id)}
                      onChange={() => handleChronicToggle(condition.id)}
                      className="w-4 h-4 text-[#ADC178]"
                    />
                    <span className="text-[#6C584C]">{condition.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Temporary Conditions */}
            <div className="bg-[#DDE5B6]/20 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-[#6C584C] mb-4">Temporary Conditions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {temporaryConditions.map(condition => (
                  <label
                    key={condition.id}
                    className="flex items-center space-x-3 p-3 rounded-lg border border-[#ADC178] cursor-pointer hover:bg-[#ADC178]/10"
                  >
                    <input
                      type="checkbox"
                      checked={selectedTemporary.includes(condition.id)}
                      onChange={() => handleTemporaryToggle(condition.id)}
                      className="w-4 h-4 text-[#ADC178]"
                    />
                    <span className="text-[#6C584C]">{condition.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-[#ADC178] text-white px-6 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-[#6C584C] transition-colors"
              >
                <Save className="w-5 h-5" />
                Save and Start Listening
              </button>
            </div>

            {/* Save Status */}
            {saveStatus && (
              <div className="flex items-center gap-2 text-[#ADC178]">
                <AlertCircle className="w-5 h-5" />
                <span>{saveStatus}</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}