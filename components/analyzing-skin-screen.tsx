"use client";

import { useEffect, useState } from "react";

const QUIZ_ANSWERS_KEY = "luvly_quiz_answers";

export interface AnalyzingSkinScreenProps {
  onNext: () => void;
  faceImage?: string | null;
}

export function AnalyzingSkinScreen({ onNext, faceImage }: AnalyzingSkinScreenProps) {
  const [progress, setProgress] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);
  const [storedFaceImage, setStoredFaceImage] = useState<string | null>(null);

  const displayImage = faceImage ?? storedFaceImage;

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = sessionStorage.getItem(QUIZ_ANSWERS_KEY);
      if (raw) {
        const data = JSON.parse(raw) as { faceImage?: string };
        if (data.faceImage) setStoredFaceImage(data.faceImage);
      }
    } catch {
      // ignore
    }
  }, [faceImage]);

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
    <div className="h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-6 relative overflow-hidden">
      <div className="w-full max-w-lg space-y-6">
        {/* Small creative avatar on top */}
        {displayImage && (
          <div className="flex justify-center">
            <div className="relative">
              <div className="p-0.5 rounded-full bg-gradient-to-r from-orange-400 via-orange-500 to-red-400 shadow-lg shadow-orange-200/50">
                <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white bg-gray-100">
                  <img
                    src={displayImage}
                    alt="Your face"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 text-[10px] font-medium text-orange-600 bg-white/90 px-1.5 py-0.5 rounded-full shadow-sm whitespace-nowrap">
                Analyzing...
              </span>
            </div>
          </div>
        )}

        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-4">
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
