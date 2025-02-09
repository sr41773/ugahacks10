"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { SignupButton } from "@/components/signup-button";
import { LoginButton } from "@/components/login-button";
import { LogoutButton } from "@/components/logout-button";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const { user, error, isLoading } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/profile", label: "Profile" },
<<<<<<< HEAD
    { href: "/aboutme", label: "Preferances" },
    { href: "/songs", label: "Songs" },
=======
    { href: "/aboutme", label: "Preferences" },
    // { href: "/auth-protected", label: "Member Access" },
>>>>>>> c5fa20400c2ecd12de2c61ba1fb5dd04a0abfe41
    // { href: "/api/data", label: "API", target: "_blank" }
  ];

  return (
    <nav className="bg-[#6C584C] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Desktop Navigation */}
          <div className="flex items-center">
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.target}
                  className="text-[#F0EAD2] hover:text-[#DDE5B6] transition-colors duration-200 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {!user && !isLoading && (
              <>
                <SignupButton />
                <LoginButton />
              </>
            )}
            {user && !isLoading && <LogoutButton />}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-[#F0EAD2] hover:text-[#DDE5B6] focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#6C584C] border-t border-[#A98467]">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.target}
                className="block px-3 py-2 text-[#F0EAD2] hover:bg-[#A98467] rounded-md text-base font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="px-3 py-3 border-t border-[#A98467] flex flex-col space-y-2">
              {!user && !isLoading && (
                <>
                  <SignupButton />
                  <LoginButton />
                </>
              )}
              {user && !isLoading && <LogoutButton />}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;