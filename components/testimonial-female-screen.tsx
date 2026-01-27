"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export interface TestimonialFemaleScreenProps {
  onNext: () => void;
}

export function TestimonialFemaleScreen({
  onNext,
}: TestimonialFemaleScreenProps) {
  const [progress, setProgress] = useState(0);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setShowContinue(true), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-lg space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              Getting healthy skin just
              <br />
              became easy with Luvly
            </h1>
          </div>

          <div className="flex justify-center gap-4">
            <div className="w-36 h-48 relative rounded-2xl overflow-hidden">
              <Image
                src="/femalebefore.webp"
                alt="Before"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-36 h-48 relative rounded-2xl overflow-hidden">
              <Image
                src="/femaleafter.webp"
                alt="After"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              I've been practicing for about 3 weeks, but at 2<br />
              weeks in my husband asked what I'd been
              <br />
              doing since my face looked much more relaxed
              <br />
              even in all the stress of life. If my husband
              <br />
              noticed... it's really working
            </p>
            <p className="font-semibold text-gray-900">Linda, 57 y.o.</p>
          </div>

          <div className="space-y-2">
            <div className="text-center text-sm text-gray-600">
              Connecting to database
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full transition-all duration-100 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-center text-sm font-semibold text-gray-900">
              {progress}%
            </div>
          </div>

          {showContinue && (
            <button
              onClick={onNext}
              className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-4 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Continue
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
