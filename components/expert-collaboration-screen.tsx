"use client";

import Image from "next/image";

export interface ExpertCollaborationScreenProps {
  onNext: () => void;
}

export function ExpertCollaborationScreen({
  onNext,
}: ExpertCollaborationScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-lg space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-80 relative">
                <Image
                  src="/experts.webp"
                  alt="Dr. Olga Skydan"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Expert badge */}
              <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1 shadow-lg flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs font-semibold text-gray-900">
                  Dr. Olga Skydan
                </span>
              </div>
              <div className="absolute top-10 left-4 bg-white rounded-full px-3 py-1 shadow-lg">
                <span className="text-xs text-gray-600">
                  Certified cosmetologist
                </span>
              </div>

              {/* Signature */}
              <div className="absolute bottom-4 right-4 bg-white rounded-lg p-2 shadow-lg">
                <div className="text-xs font-semibold text-gray-900">
                  Dr. Olga Skydan
                </div>
                <div className="w-16 h-6 bg-gray-200 rounded mt-1"></div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              Luvly is created in collaboration
              <br />
              with certified beauty experts,
              <br />
              aestheticians, and wellness
              <br />
              coaches
            </h1>
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
