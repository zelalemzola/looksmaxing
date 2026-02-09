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
    <div className="h-screen bg-gray-50 flex flex-col overflow-y-hidden">
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
            <Image src="/skinbasedplan.webp" alt="Program personalization" width={300} height={300} />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-center">
      <div className="pb-8 px-12 fixed bottom-2 mx-auto">
        <button
          onClick={onNext}
          className=" max-w-lg mx-auto block py-4 px-12 rounded-full font-semibold bg-gradient-to-r from-orange-400 to-red-400 text-white hover:opacity-90 transition-opacity"
        >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
