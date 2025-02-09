"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { SignupButton } from "@/components/signup-button";
import { LoginButton } from "@/components/login-button";
import { LogoutButton } from "@/components/logout-button";
import React, { useState, useEffect } from "react";
import { Menu, X, Music, Heart, Home, User } from "lucide-react";
import Image from "next/image";
import logoimage from '../public/images/MedeliLogo.png';
import ProfileDetails from "./ProfileDetails";

const NavBar = () => {
  const { user, error, isLoading } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Clear preferences when app loads
  useEffect(() => {
    localStorage.removeItem('chronicConditions');
    localStorage.removeItem('temporaryConditions');
  }, []);

  // Define navigation links based on authentication status
  const getNavLinks = () => {
    const baseLinks = [
      { href: "/", label: "Home", icon: Home },
    ];

    const authenticatedLinks = [
      { href: "/profile", label: "Profile", icon: User },
      { href: "/aboutme", label: "Preferences", icon: Heart },
      { href: "/songs", label: "Songs", icon: Music },
    ];

    return user ? [...baseLinks, ...authenticatedLinks] : baseLinks;
  };

  const navLinks = getNavLinks();

  return (
    <nav className="bg-gradient-to-r from-[#6C584C] via-[#7C6855] to-[#6C584C] shadow-lg font-['Quicksand']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative overflow-hidden rounded-full border-2 border-[#DDE5B6] shadow-md hover:shadow-lg transition-shadow bg-white/10 backdrop-blur-sm p-1">
              <Image
                src={logoimage}
                alt="Medeli Logo"
                className="h-10 w-10 transform hover:scale-105 transition-transform duration-300"
                width={40}
                height={40}
              />
            </div>
            <div className="ml-3">
              <span className="text-[#F0EAD2] font-bold text-xl hidden sm:block">Medeli</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a key={link.href} href={link.href} className="px-4 py-2 text-[#F0EAD2] hover:bg-[#A98467]/20 rounded-xl transition-all duration-300 hover:shadow-md group flex items-center space-x-2">
                  <Icon className="w-4 h-4 group-hover:text-[#DDE5B6] transition-colors" />
                  <span className="relative text-sm font-medium group-hover:text-[#DDE5B6]">{link.label}</span>
                </a>
              );
            })}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!user && !isLoading && (
              <div className="flex space-x-3">
                <SignupButton />
                <LoginButton />
              </div>
            )}
            {user && !isLoading && (
              <div className="flex items-center space-x-3">
              
                <LogoutButton />
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full text-[#F0EAD2] hover:bg-[#A98467]/20 transition-colors duration-300 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden backdrop-blur-sm`}>
        <div className="bg-[#6C584C]/95 shadow-inner px-2 pt-2 pb-3 space-y-1">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a key={link.href} href={link.href} className="flex items-center space-x-3 px-4 py-3 text-[#F0EAD2] rounded-xl font-medium hover:bg-[#A98467]/20 transition-all duration-300">
                <Icon className="w-5 h-5" />
                <span>{link.label}</span>
              </a>
            );
          })}
          <div className="px-3 py-3 border-t border-[#A98467]/30 flex flex-col space-y-2">
            {!user && !isLoading && (
              <>
                <SignupButton />
                <LoginButton />
              </>
            )}
            {user && !isLoading && (
              <div className="flex items-center justify-between">
             
                <LogoutButton />
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
