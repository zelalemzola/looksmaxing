'use client'

import { useState } from 'react'
import { PhaseHeader } from '@/components/phase-header'
import type { QuizAnswers } from '@/types/quiz'

export interface GoalScreenProps {
  onNext: (answers: Partial<QuizAnswers>, phaseData?: any) => void
}

const goals = [
  { value: 'tighten', label: 'Tighten skin', emoji: '🎯' },
  { value: 'lose-fat', label: 'Lose face fat', emoji: '🔥' },
  { value: 'wrinkles', label: 'Get rid of wrinkles', emoji: '✨' },
]

export function GoalScreen({ onNext }: GoalScreenProps) {
  const [selectedGoal, setSelectedGoal] = useState<string>('')

  const handleNext = () => {
    if (selectedGoal) {
      const goalTips: Record<string, string[]> = {
        'tighten': [
          'Skin tightening requires consistent muscle engagement. Face yoga exercises that target the SMAS layer are most effective.',
          'Combine face yoga with proper hydration and collagen-rich foods for optimal results.',
          'Aim for 10-15 minutes daily with a focus on lifting and toning movements.'
        ],
        'lose-fat': [
          'Face fat reduction works best with exercises that stimulate circulation and lymphatic drainage.',
          'Combine face yoga with overall fitness. Even 30 mins of cardio 3x weekly shows dramatic results.',
          'Reduce sodium intake and stay hydrated to minimize facial bloating.'
        ],
        'wrinkles': [
          'Wrinkle prevention starts with relaxing facial tension. Focus on releasing jaw, forehead, and eye area.',
          'Sun protection is crucial. Use SPF 30+ daily to prevent further damage.',
          'Moisturizing and facial massage boost collagen production naturally.'
        ]
      }
      const phaseData = {
        title: 'Goal Confirmed',
        tips: goalTips[selectedGoal] || []
      }
      onNext({ goal: selectedGoal }, phaseData)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PhaseHeader currentPhase={3} totalPhases={6} />

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-2xl space-y-8">
          <h1 className="text-3xl font-bold text-foreground text-center">
            What is your <span className="text-primary">main goal</span>?
          </h1>

          <div className="space-y-3">
            {goals.map(goal => (
              <button
                key={goal.value}
                onClick={() => setSelectedGoal(goal.value)}
                className={`w-full p-4 rounded-2xl border-2 transition-all text-left flex items-center gap-4 ${
                  selectedGoal === goal.value
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card hover:border-primary/30'
                }`}
              >
                <span className="text-2xl">{goal.emoji}</span>
                <span className="font-semibold text-foreground">{goal.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-8 px-6">
        <button
          onClick={handleNext}
          disabled={!selectedGoal}
          className={`w-full max-w-2xl mx-auto block py-3 px-6 rounded-full font-semibold transition-opacity ${
            selectedGoal ? 'bg-primary text-white hover:opacity-90' : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}
