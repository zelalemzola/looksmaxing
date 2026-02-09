"use client";

import Image from "next/image";

export interface SuccessStatsScreenProps {
  onNext: () => void;
}

export function SuccessStatsScreen({ onNext }: SuccessStatsScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-6 py-8">
      <div className="w-full max-w-lg space-y-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-8">
            You're in good hands
          </h1>
        </div>

        <div className="flex justify-center mb-8">
          <div className="w-80 h-48 relative">
            <Image
              src="/worldwide.webp"
              alt="World map with statistics"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-lg font-semibold text-gray-900">
            400k+ Women in their 30s have
            <br />
            made strides towards their
            <br />
            goals with Luvly
          </p>
        </div>

        <button
          onClick={onNext}
          className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Next
        </button>
      </div>
    </div>
  );
}
