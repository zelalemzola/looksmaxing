"use client";

import Image from "next/image";

export interface ProgramPersonalizationScreenProps {
  onNext: () => void;
}

export function ProgramPersonalizationScreen({
  onNext,
}: ProgramPersonalizationScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-lg space-y-8">
          <div className="flex justify-center">
            <div className="w-64 h-64 relative">
              <Image
                src="/yourprogram.webp"
                alt="Program personalization"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Your program just became
              <br />
              smarter about you!
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Your personalized plan updates daily,
              <br />
              tailoring exercises to your progress and
              <br />
              needs
            </p>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
