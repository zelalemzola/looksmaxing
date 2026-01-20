'use client'

import { useState } from 'react'
import { PhaseHeader } from '@/components/phase-header'
import type { QuizAnswers } from '@/types/quiz'

export interface ConcernsScreenProps {
  onNext: (answers: Partial<QuizAnswers>, phaseData?: any) => void
}

const concerns = [
  { value: 'acne', label: 'Acne prone' },
  { value: 'hyperpigmentation', label: 'Hyperpigmentation' },
  { value: 'rosacea', label: 'Rosacea' },
  { value: 'fine-lines', label: 'Fine lines & wrinkles' },
  { value: 'sagging', label: 'Sagging skin' },
  { value: 'texture', label: 'Uneven texture' },
  { value: 'none', label: 'None of the above' },
]

export function ConcernsScreen({ onNext }: ConcernsScreenProps) {
  const [selectedConcerns, setSelectedConcerns] = useState<Set<string>>(new Set())

  const toggleConcern = (concern: string) => {
    const newSelected = new Set(selectedConcerns)
    if (concern === 'none') {
      newSelected.clear()
      newSelected.add('none')
    } else {
      newSelected.delete('none')
      if (newSelected.has(concern)) {
        newSelected.delete(concern)
      } else {
        newSelected.add(concern)
      }
    }
    setSelectedConcerns(newSelected)
  }

  const handleNext = () => {
    if (selectedConcerns.size > 0) {
      const concernsArray = Array.from(selectedConcerns).filter(c => c !== 'none')
      const selectedList = concernsArray.length > 0 ? concernsArray : ['none']
      
      const concernTips: Record<string, string> = {
        'acne': 'Gentle massage increases circulation. Avoid heavy pressure on inflamed areas.',
        'hyperpigmentation': 'Face yoga boosts circulation to fade dark spots naturally over time.',
        'rosacea': 'Ultra-gentle movements reduce inflammation. Avoid heat-inducing techniques.',
        'fine-lines': 'Targeted exercises strengthen underlying muscles to plump fine lines.',
        'sagging': 'Consistent lifting movements combat gravity and restore facial contours.',
        'texture': 'Regular massage and stimulation smoothens bumpy, uneven skin texture.',
        'none': 'Maintenance routine to keep your skin healthy and glowing!'
      }
      
      const phaseData = {
        title: 'Skin Concerns Identified',
        tips: selectedList.map(concern => concernTips[concern]).filter(Boolean).slice(0, 3)
      }
      
      onNext({ 
        concerns: selectedList,
        sleepHours: 8,
        waterIntake: '8-10 glasses',
        sunProtection: 'Daily SPF 30+',
        stress: 'Managing well'
      }, phaseData)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PhaseHeader currentPhase={6} totalPhases={6} />

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-2xl space-y-8">
          <h1 className="text-3xl font-bold text-foreground text-center">
            Any skin <span className="text-primary">concerns</span>?
          </h1>

          <p className="text-center text-muted-foreground">Select all that apply</p>

          <div className="space-y-3">
            {concerns.map(concern => (
              <button
                key={concern.value}
                onClick={() => toggleConcern(concern.value)}
                className={`w-full p-4 rounded-2xl border-2 transition-all text-left font-medium ${
                  selectedConcerns.has(concern.value)
                    ? 'border-primary bg-primary/5 text-foreground'
                    : 'border-border bg-card hover:border-primary/30 text-foreground'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{concern.label}</span>
                  {selectedConcerns.has(concern.value) && (
                    <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-8 px-6">
        <button
          onClick={handleNext}
          disabled={selectedConcerns.size === 0}
          className={`w-full max-w-2xl mx-auto block py-3 px-6 rounded-full font-semibold transition-opacity ${
            selectedConcerns.size > 0 ? 'bg-primary text-white hover:opacity-90' : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          Generate My Plan
        </button>
      </div>
    </div>
  )
}
