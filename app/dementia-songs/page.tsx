"use client";

import React from "react";
import { PlayCircle } from "lucide-react";

const songs = [
  { title: "Can't Help Falling in Love", artist: "Elvis Presley", year: 1961 },
  { title: "Unchained Melody", artist: "The Righteous Brothers", year: 1965 },
  { title: "Stand by Me", artist: "Ben E. King", year: 1961 },
  { title: "Imagine", artist: "John Lennon", year: 1971 },
  { title: "Take Me Home, Country Roads", artist: "John Denver", year: 1971 },
  { title: "Dancing Queen", artist: "ABBA", year: 1976 },
  { title: "What a Wonderful World", artist: "Louis Armstrong", year: 1967 },
  { title: "My Girl", artist: "The Temptations", year: 1964 },
  { title: "Let It Be", artist: "The Beatles", year: 1970 },
  { title: "Sweet Caroline", artist: "Neil Diamond", year: 1969 },
];

export default function DementiaSongsPage() {
  return (
    <div className="min-h-screen bg-[#F0EAD2] py-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-[#6C584C] mb-6 text-center">🎵 Nostalgic Playlist: 1950s-1980s 🎵</h1>
        
        <p className="text-lg text-[#A98467] text-center mb-8">
          Music can be a powerful way to connect with memories. Enjoy this collection of classic hits from the 1950s to 1980s.
        </p>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <ul className="space-y-4">
            {songs.map((song, index) => (
              <li key={index} className="flex items-center justify-between bg-[#DDE5B6]/20 p-4 rounded-lg hover:bg-[#ADC178]/10 transition">
                <div>
                  <h2 className="text-lg font-semibold text-[#6C584C]">{song.title}</h2>
                  <p className="text-[#A98467]">{song.artist} ({song.year})</p>
                </div>
                
                <button className="text-[#ADC178] hover:text-[#6C584C] transition">
                  <PlayCircle className="w-8 h-8" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
