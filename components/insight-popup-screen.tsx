"use client";

import { useEffect, useState } from "react";

export interface InsightPopupScreenProps {
  onNext: () => void;
  insight: string;
  title?: string;
  faceImage?: string | null;
  duration?: number;
}

const DEFAULT_INSIGHT_DURATION = 15000;

export function InsightPopupScreen({
  onNext,
  insight,
  title = "We noticed something about your skin",
  faceImage,
  duration = DEFAULT_INSIGHT_DURATION,
}: InsightPopupScreenProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [storedFace, setStoredFace] = useState<string | null>(null);
  const displayFace = faceImage ?? storedFace;

  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const raw = sessionStorage.getItem("luvly_quiz_answers");
        if (raw) {
          const data = JSON.parse(raw) as { faceImage?: string };
          if (data.faceImage) setStoredFace(data.faceImage);
        }
      } catch {
        /* ignore */
      }
    }
  }, [faceImage]);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      onNext();
    }, duration);

    return () => clearTimeout(timer);
  }, [onNext, duration]);

  return (
    <div className="h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-6 relative overflow-hidden">
      <div
        className={`w-full max-w-lg space-y-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* User's face photo */}
        {displayFace && (
          <div className="flex justify-center">
            <div className="relative w-32 h-32 rounded-2xl overflow-hidden shadow-lg ring-2 ring-orange-200 flex-shrink-0 bg-gray-100">
              <img
                src={displayFace}
                alt="Your face"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        {/* Floating icon */}
        <div className="flex justify-center">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-400 rounded-full animate-pulse"></div>
            <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
              <span className="text-3xl">✨</span>
            </div>
          </div>
        </div>

        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-900 leading-tight">
            {title}
          </h1>
        </div>

        <div className="bg-white rounded-3xl p-6 shadow-sm">
          <p className="text-gray-900 text-lg font-medium leading-relaxed text-center">
            {insight}
          </p>
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <div className="flex items-center justify-center gap-2">
              <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center">
                <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <span className="text-gray-900 text-sm font-medium">
                Processing insight...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
