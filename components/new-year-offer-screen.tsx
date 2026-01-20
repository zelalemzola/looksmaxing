"use client";

import { useEffect, useState } from "react";

export interface NewYearOfferScreenProps {
  onNext: () => void;
}

interface Snowflake {
  id: number;
  left: number;
  animationDuration: number;
  size: number;
  delay: number;
}

export function NewYearOfferScreen({ onNext }: NewYearOfferScreenProps) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    // Generate random snowflakes
    const flakes = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: Math.random() * 4 + 3, // 3-7 seconds
      size: Math.random() * 20 + 20, // 20-40px
      delay: Math.random() * 2, // 0-2 second delay
    }));
    setSnowflakes(flakes);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes snowfall {
          0% {
            transform: translateY(-100vh) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        @keyframes shake {
          0%,
          100% {
            transform: translateX(0);
          }
          10%,
          30%,
          50%,
          70%,
          90% {
            transform: translateX(-3px);
          }
          20%,
          40%,
          60%,
          80% {
            transform: translateX(3px);
          }
        }

        .snowfall {
          animation: snowfall var(--duration) linear infinite;
          animation-delay: var(--delay);
        }

        .shake {
          animation: shake 2s ease-in-out infinite;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-b from-blue-600 to-blue-800 flex flex-col items-center justify-center px-6 py-8 relative overflow-hidden">
        {/* Animated Falling Snowflakes */}
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute text-white opacity-80 snowfall"
            style={
              {
                left: `${flake.left}%`,
                fontSize: `${flake.size}px`,
                "--duration": `${flake.animationDuration}s`,
                "--delay": `${flake.delay}s`,
              } as React.CSSProperties
            }
          >
            ❄
          </div>
        ))}

        <div className="w-full max-w-md space-y-8 text-center relative z-10">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-300 to-purple-500 rounded-full flex items-center justify-center shake">
              <div className="text-6xl">🎁</div>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl font-bold text-white">
              Your New Year offer
              <br />
              is ready!
            </h1>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-white text-orange-400 py-4 px-6 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
}
