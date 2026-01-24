"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export interface FaceYogaExplanationScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export function FaceYogaExplanationScreen({
  onNext,
  onBack,
}: FaceYogaExplanationScreenProps) {
  return (
    <div className="h-screen bg-gray-50 flex flex-col overflow-hidden">
      {/* Header with back button */}
      <div className="flex items-center justify-between p-4 flex-shrink-0">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 flex flex-col px-6 py-2 min-h-0 overflow-y-auto">
        <div className="w-full max-w-4xl mx-auto space-y-4">
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-bold text-gray-900">
              What is <span className="text-orange-400">face yoga</span>,
              anyway?
            </h1>
            <p className="text-gray-600 text-sm leading-relaxed">
              Face yoga is a simple, holistic way to keep your skin smooth,
              lifted and glowing. It helps improve your overall facial wellness
              and slow signs of aging.
            </p>
          </div>

          {/* Before/After Images and GIF Section - Responsive Layout */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Before/After Images Section */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex-1">
              <h3 className="text-lg font-bold text-gray-900 text-center mb-3">
                Real Results
              </h3>
              <div className="relative">
                <Image
                  src="/images/beforeafter.jpg"
                  alt="Before and after face yoga results"
                  width={300}
                  height={150}
                  className="w-full h-32 md:h-40 rounded-xl object-cover"
                />
                <div className="absolute top-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  Before
                </div>
                <div className="absolute top-2 right-2 bg-orange-400 text-white px-2 py-1 rounded text-xs">
                  After 30 days
                </div>
              </div>
            </div>

            {/* Animated GIF Section */}
            <div className="bg-white rounded-2xl p-4 shadow-sm flex-1">
              <h3 className="text-lg font-bold text-gray-900 text-center mb-3">
                See It In Action
              </h3>
              <div className="relative">
                <Image
                  src="/images/bf.gif"
                  alt="Face yoga exercise demonstration"
                  width={300}
                  height={150}
                  className="w-full h-32 md:h-40 rounded-xl object-cover"
                  unoptimized
                />
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-xl font-bold text-gray-900 text-center">
              How does it work?
            </h2>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Uses <span className="font-bold">targeted techniques</span>{" "}
                    for your face, neck, and shoulders
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Massage</p>
                  <ul className="text-xs text-gray-600 mt-1 space-y-0.5">
                    <li>• boosts circulation</li>
                    <li>• improves lymph flow</li>
                    <li>• releases tension</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Acupressure ease stress and supports
                  </p>
                  <ul className="text-xs text-gray-600 mt-1 space-y-0.5">
                    <li>• headache relief</li>
                    <li>• sinus release</li>
                    <li>• better sleep</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={onNext}
            className="w-full bg-gradient-to-r from-orange-400 to-red-400 text-white py-3 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Ok, got it!
          </button>
        </div>
      </div>
    </div>
  );
}
