"use client";

import { Check } from "lucide-react";

interface PhaseHeaderProps {
  currentPhase: number;
  totalPhases: number;
}

export function PhaseHeader({ currentPhase, totalPhases }: PhaseHeaderProps) {
  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="max-w-2xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center gap-2">
          {Array.from({ length: totalPhases }).map((_, i) => (
            <div key={i} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                  i < currentPhase - 1
                    ? "bg-green-500 text-white" // Completed phases - green with tick
                    : i === currentPhase - 1
                      ? "bg-black text-white ring-2 ring-black ring-offset-2" // Current phase
                      : "bg-gray-200 text-gray-500" // Future phases
                }`}
              >
                {i < currentPhase - 1 ? <Check size={16} /> : i + 1}
              </div>
              {i < totalPhases - 1 && (
                <div
                  className={`w-6 h-0.5 transition-all ${
                    i < currentPhase - 1 ? "bg-green-500" : "bg-gray-200"
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
