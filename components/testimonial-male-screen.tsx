"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export interface TestimonialMaleScreenProps {
  onNext: () => void;
}

export function TestimonialMaleScreen({ onNext }: TestimonialMaleScreenProps) {
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
    <div className="h-screen bg-gray-50 flex flex-col overflow-y-hidden">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-lg space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-gray-900">
              You can be handsome
              <br />
              again! You just need{" "}
              <span className="text-orange-400">
                face
                <br />
                yoga
              </span>
            </h1>
          </div>

          <div className="flex justify-center gap-4">
            <div className="w-36 h-48 relative rounded-2xl overflow-hidden">
              <Image
                src="/malebefore.webp"
                alt="Before"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-36 h-48 relative rounded-2xl overflow-hidden">
              <Image
                src="/maleafter.webp"
                alt="After"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-gray-600 leading-relaxed">
              Finally, I found an app that offers the perfect
              <br />
              exercises for my problem—and it works! My
              <br />
              face now looks at least 5 years younger, and I<br />
              feel so much more confident.
            </p>
            <p className="font-semibold text-gray-900">Morice, 33 y.o.</p>
          </div>

          <div className="space-y-2">
            <div className="text-center text-sm text-gray-600">
              Connecting to database
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-orange-400 to-red-400 h-2 rounded-full transition-all duration-200 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-center text-sm font-semibold text-gray-900">
              {progress}%
            </div>
          </div>

          {showContinue && (
            <div className="flex justify-center">
            <div className="pb-1 px-12 fixed bottom-2 mx-auto">
              <button
              onClick={onNext}
              className=" max-w-lg mx-auto block py-4 px-12 rounded-full font-semibold bg-gradient-to-r from-orange-400 to-red-400 text-white hover:opacity-90 transition-opacity"
            >
                Continue
              </button>
            
            </div>
          </div>
          )}
        </div>
      </div>
    </div>
  );
}
