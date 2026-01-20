"use client";

import { ArrowLeft } from "lucide-react";
import Image from "next/image";

export interface ProgramAdjustmentScreenProps {
  onNext: () => void;
  onBack: () => void;
}

export function ProgramAdjustmentScreen({
  onNext,
  onBack,
}: ProgramAdjustmentScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with back button */}
      <div className="flex items-center justify-between p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="flex-1 flex flex-col items-center px-6 pt-4">
        <div className="w-full max-w-lg space-y-6">
          <div className="text-center space-y-3">
            <h1 className="text-xl font-bold text-gray-900 leading-tight">
              Now your program is
              <br />
              <span className="text-orange-400">adjusted</span> to your skin
              type
              <br />
              and concerns
            </h1>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-72 h-44 bg-white rounded-2xl shadow-lg p-4 flex items-center justify-between">
                <div className="text-center flex-1">
                  <div className="text-xs text-gray-600 mb-2">
                    Minimizing tired look
                  </div>
                  <div className="w-16 h-20 bg-gray-100 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-xs text-gray-500 text-center leading-tight">
                      ON YOUR
                      <br />
                      OWN
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-2 px-1 leading-tight">
                    Based on a 2 week study of active Luvly users
                  </div>
                </div>

                <div className="text-center flex-1">
                  <div className="text-xl font-bold text-orange-400 mb-2">
                    2x 🎉
                  </div>
                  <div className="w-16 h-20 bg-gradient-to-b from-orange-300 to-orange-400 rounded-lg flex items-center justify-center mx-auto">
                    <span className="text-xs text-white font-semibold text-center leading-tight">
                      WITH
                      <br />
                      LUVLY
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="pb-8 px-6">
        <button
          onClick={onNext}
          className="w-full max-w-lg mx-auto block py-4 px-6 rounded-full font-semibold bg-gradient-to-r from-orange-400 to-red-400 text-white hover:opacity-90 transition-opacity"
        >
          Next
        </button>
      </div>
    </div>
  );
}
