'use client'

import { Check } from 'lucide-react'

export interface PhaseCompletionScreenProps {
  phase: number
  data: {
    title: string
    tips: string[]
  }
  onNext: () => void
}

export function PhaseCompletionScreen({ phase, data, onNext }: PhaseCompletionScreenProps) {
  const totalPhases = 6

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/10 to-background flex flex-col">
      {/* Progress Bar */}
      <div className="pt-8 px-6">
        <div className="max-w-2xl mx-auto">
          <div className="h-1 bg-border rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all"
              style={{ width: `${(phase / totalPhases) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-2xl space-y-8 text-center">
          {/* Success Icon */}
          <div className="mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 border-2 border-primary">
              <Check className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Phase Completion Info */}
          <div className="space-y-2">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest">
              Phase {phase} Complete
            </p>
            <h1 className="text-4xl font-bold text-foreground">{data.title}</h1>
          </div>

          {/* Tips Section */}
          <div className="bg-card border border-border rounded-2xl p-8 space-y-6 text-left">
            <h2 className="text-xl font-bold text-foreground text-center">
              Key Tips for Success
            </h2>

            <div className="space-y-4">
              {data.tips.map((tip, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/20 border border-primary">
                      <span className="text-xs font-bold text-primary">{idx + 1}</span>
                    </div>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Motivational Message */}
          <div className="bg-secondary/50 rounded-xl p-6">
            <p className="text-foreground/70 text-sm">
              {phase === 1 && "Great start! Understanding your age helps us customize your routine perfectly."}
              {phase === 2 && "Perfect! Having a clear goal keeps you motivated throughout your journey."}
              {phase === 3 && "Excellent choices! These focus areas will guide your daily practice."}
              {phase === 4 && "Smart selection! We'll recommend products perfect for your skin type."}
              {phase === 5 && "Almost there! Your concerns will be addressed in your personalized routine."}
            </p>
          </div>
        </div>
      </div>

      {/* Next Button */}
      <div className="pb-8 px-6">
        <button
          onClick={onNext}
          className="w-full max-w-2xl mx-auto block py-4 px-6 rounded-full bg-primary text-primary-foreground font-semibold hover:shadow-lg transition-shadow text-lg"
        >
          {phase === 5 ? 'Generate My Routine' : 'Continue to Next Phase'}
        </button>
      </div>
    </div>
  )
}
