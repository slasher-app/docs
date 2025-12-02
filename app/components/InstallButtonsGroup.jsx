'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function InstallButtonsGroup() {
  const [browser, setBrowser] = useState(null);
  const [otherBrowsers, setOtherBrowsers] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    // Detect browser
    const userAgent = navigator.userAgent.toLowerCase();

    const allBrowsers = [
      {
        name: 'Chrome',
        icon: '/chrome.png',
        url: '#', // Replace with actual Chrome store URL
        color: 'from-red-600 to-orange-600',
        hoverColor: 'from-red-500 to-orange-500',
        glowColor: 'bg-red-500',
        bgTint: 'from-red-950/40 to-orange-950/40',
        borderColor: 'from-red-700/30 to-orange-700/30',
      },
      {
        name: 'Firefox',
        icon: '/firefox.png',
        url: 'https://addons.mozilla.org/en-US/firefox/addon/slasher-app/',
        color: 'from-orange-600 via-red-600 to-pink-600',
        hoverColor: 'from-orange-500 via-red-500 to-pink-500',
        glowColor: 'bg-orange-500',
        bgTint: 'from-orange-950/40 via-red-950/40 to-pink-950/40',
        borderColor: 'from-orange-700/30 via-red-700/30 to-pink-700/30',
      },
      {
        name: 'Edge',
        icon: '/edge.png',
        url: '#', // Replace with actual Edge store URL
        color: 'from-blue-600 to-cyan-600',
        hoverColor: 'from-blue-500 to-cyan-500',
        glowColor: 'bg-blue-500',
        bgTint: 'from-blue-950/40 to-cyan-950/40',
        borderColor: 'from-blue-700/30 to-cyan-700/30',
      },
    ];

    let detected = 'Chrome'; // default

    if (userAgent.includes('edg')) {
      detected = 'Edge';
    } else if (userAgent.includes('firefox')) {
      detected = 'Firefox';
    } else if (userAgent.includes('chrome') || userAgent.includes('crios')) {
      detected = 'Chrome';
    }

    const currentBrowser = allBrowsers.find(b => b.name === detected);
    const others = allBrowsers.filter(b => b.name !== detected);

    setBrowser(currentBrowser);
    setOtherBrowsers(others);
  }, []);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [dropdownOpen]);

  if (!browser) {
    return (
      <button className="px-8 py-4 rounded-xl bg-gray-50 dark:bg-zinc-800 text-gray-600 dark:text-zinc-300 font-semibold border border-gray-200 dark:border-zinc-700 shadow-sm">
        Loading...
      </button>
    );
  }

  return (
    <div className="flex items-stretch gap-2">
      {/* Main Install Button */}
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={browser.url}
        className="group relative inline-block"
      >
        {/* Outer glow - large blur */}
        <div className={`absolute -inset-2 bg-gradient-to-r ${browser.color} rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition duration-500 group-hover:duration-200`}></div>

        {/* Middle glow - medium blur with subtle animation */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${browser.color} rounded-xl blur-lg opacity-0 group-hover:opacity-15 dark:group-hover:opacity-25 transition duration-300`}></div>

        {/* Button */}
        <button
          className={`cursor-pointer relative px-8 py-4 rounded-xl bg-white dark:bg-zinc-900/90 text-gray-900 dark:text-white font-semibold transition-all shadow-lg dark:shadow-2xl flex items-center gap-3 group-hover:scale-[1.02] active:scale-[0.98] overflow-hidden`}
        >
          {/* Subtle gradient background tint */}
          <div className={`absolute inset-0 bg-gradient-to-r ${browser.bgTint} rounded-xl opacity-0 dark:opacity-100`}></div>

          {/* Gradient border */}
          <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${browser.borderColor} p-[1px]`}>
            <div className="absolute inset-[1px] bg-white dark:bg-zinc-900/90 rounded-xl"></div>
          </div>

          {/* Gradient overlay on hover */}
          <div className={`absolute inset-0 bg-gradient-to-r ${browser.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-15 rounded-xl transition-opacity duration-300`}></div>
          {/* Browser Icon */}
          <div className="relative z-10">
            <img
              src={`${basePath}${browser.icon}`}
              alt={`${browser.name} icon`}
              width={40}
              height={40}
              className="group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 drop-shadow-lg"
            />
            {/* Icon glow */}
            {/* <div className={`absolute inset-0 ${browser.glowColor} rounded-full blur-md opacity-0 group-hover:opacity-30 transition duration-300`}></div>*/}
          </div>

          {/* Text */}
          <span className="relative z-10 text-lg">Install for {browser.name}</span>

          {/* Arrow Icon */}
          <svg
            className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </a>

      {/* Dropdown Button */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className={`cursor-pointer relative h-full px-4 rounded-xl bg-white dark:bg-zinc-900/80 backdrop-blur-sm text-gray-600 dark:text-zinc-300 font-semibold hover:text-gray-900 dark:hover:text-white transition-all border border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700 shadow-md dark:shadow-none flex items-center justify-center group ${dropdownOpen ? 'bg-gray-50 dark:bg-zinc-700/80 border-gray-300 dark:border-zinc-600 shadow-sm' : ''}`}
        >
          {/* Subtle glow on hover */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-gray-300/20 dark:from-zinc-500/20 to-gray-200/20 dark:to-zinc-400/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 dark:group-hover:opacity-100 transition duration-300"></div>

          {/* Chevron Icon */}
          <svg
            className={`relative w-5 h-5 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {dropdownOpen && (
          <div className="absolute top-full mt-2 right-0 w-64 bg-white dark:bg-zinc-900/95 backdrop-blur-xl border border-gray-200 dark:border-zinc-800 rounded-xl shadow-xl dark:shadow-2xl overflow-hidden z-50 animate-slide-down">
            <div className="p-2 space-y-1">
              {otherBrowsers.map((otherBrowser) => (
                <a
                  key={otherBrowser.name}
                  href={otherBrowser.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 dark:hover:bg-zinc-800/80 transition-all"
                  onMouseDown={(e) => e.preventDefault()}
                >
                  {/* Subtle glow effect */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${otherBrowser.color} rounded-lg opacity-0 group-hover:opacity-8 dark:group-hover:opacity-10 transition duration-200`}></div>

                  <img
                    src={`${basePath}${otherBrowser.icon}`}
                    alt={`${otherBrowser.name} icon`}
                    width={28}
                    height={28}
                    className="relative group-hover:scale-110 transition-transform duration-300"
                  />

                  {/* Text */}
                  <div className="relative flex-1">
                    <div className="text-gray-900 dark:text-white font-medium">Install for {otherBrowser.name}</div>
                  </div>

                  {/* Arrow */}
                  <svg
                    className="relative w-4 h-4 text-gray-400 dark:text-zinc-500 group-hover:text-gray-600 dark:group-hover:text-zinc-300 group-hover:translate-x-1 transition-all duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              ))}
            </div>

            {/* Bottom hint */}
            <div className="px-4 py-2 bg-gray-50/50 dark:bg-zinc-950/50 border-t border-gray-100 dark:border-zinc-800">
              <p className="text-xs text-gray-400 dark:text-zinc-500 text-center">
                Choose your browser
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
