"use client";

import { useEffect, useState } from "react";

export interface AnalyzingSkinScreenProps {
  onNext: () => void;
}

export function AnalyzingSkinScreen({ onNext }: AnalyzingSkinScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  const messages = [
    "Analyzing your skin type...",
    "Detecting problem areas...",
    "Mapping facial structure...",
    "Creating personalized plan...",
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          setTimeout(onNext, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const messageInterval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 1200);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, [onNext]);

  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            Analyzing your skin...
          </h1>
        </div>

        {/* Circular progress indicator */}
        <div className="flex justify-center">
          <div className="relative w-32 h-32">
            <svg
              className="w-32 h-32 transform -rotate-90"
              viewBox="0 0 120 120"
            >
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="rgba(229, 231, 235, 1)"
                strokeWidth="8"
                fill="none"
              />
              <circle
                cx="60"
                cy="60"
                r="50"
                stroke="url(#gradient)"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 50}`}
                strokeDashoffset={`${2 * Math.PI * 50 * (1 - progress / 100)}`}
                className="transition-all duration-100 ease-out"
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f97316" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-900">
                {Math.round(progress)}%
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-900 text-lg font-medium text-center">
            {messages[currentMessage]}
          </p>
          <div className="flex justify-center mt-4">
            <div className="flex space-x-1">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full bg-orange-400 transition-opacity duration-300 ${
                    i === currentMessage % 3 ? "opacity-100" : "opacity-30"
                  }`}
                  style={{
                    animationDelay: `${i * 0.2}s`,
                    animation:
                      i === currentMessage % 3 ? "pulse 1s infinite" : "none",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-400 text-sm">👩‍⚕️</span>
              </div>
              <span className="text-gray-900 text-sm font-medium">
                AI Skin Expert analyzing...
              </span>
            </div>
            <p className="text-xs text-gray-600">
              Trusted by over 273,908 clients
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
