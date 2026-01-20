'use client'

import { useState } from 'react'
import { PhaseHeader } from '@/components/phase-header'
import type { QuizAnswers } from '@/types/quiz'

export interface SkinTypeScreenProps {
  onNext: (answers: Partial<QuizAnswers>, phaseData?: any) => void
}

const skinTypes = [
  { value: 'dry', label: 'Dry', description: 'Tight and dehydrated' },
  { value: 'oily', label: 'Oily', description: 'Shiny and prone to breakouts' },
  { value: 'combination', label: 'Combination', description: 'Mixed skin types' },
  { value: 'sensitive', label: 'Sensitive', description: 'Reactive to products' },
  { value: 'normal', label: 'Normal', description: 'Balanced and healthy' },
]

export function SkinTypeScreen({ onNext }: SkinTypeScreenProps) {
  const [selectedType, setSelectedType] = useState<string>('')

  const handleNext = () => {
    if (selectedType) {
      const typeTips: Record<string, string[]> = {
        'dry': [
          'Extra hydration is essential. Use moisturizing products and face oils.',
          'Avoid harsh movements. Focus on gentle, nourishing massage techniques.',
          'Drink plenty of water and include hydrating foods in your diet.'
        ],
        'oily': [
          'Use lighter products and water-based moisturizers.',
          'Oil-control face yoga focuses on gentle stimulation without heavy massage.',
          'Regular exfoliation helps manage excess sebum production.'
        ],
        'combination': [
          'Target different areas with different approaches.',
          'Lighter products for T-zone, more hydration for dry areas.',
          'Customize your routine to address both oily and dry zones.'
        ],
        'sensitive': [
          'Very gentle movements are crucial. Avoid aggressive techniques.',
          'Patch test any products before full application.',
          'Focus on calming inflammation and strengthening the skin barrier.'
        ],
        'normal': [
          'You have flexibility in product and technique choices.',
          'Maintain consistency and adapt based on seasonal changes.',
          'Focus on prevention and enhancement rather than problem-solving.'
        ]
      }
      const phaseData = {
        title: 'Skin Type Identified',
        tips: typeTips[selectedType] || []
      }
      onNext({ skinType: selectedType }, phaseData)
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PhaseHeader currentPhase={5} totalPhases={6} />

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-2xl space-y-8">
          <h1 className="text-3xl font-bold text-foreground text-center">
            What's your <span className="text-primary">skin type</span>?
          </h1>

          <div className="space-y-3">
            {skinTypes.map(type => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`w-full p-4 rounded-2xl border-2 transition-all text-left ${
                  selectedType === type.value
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-card hover:border-primary/30'
                }`}
              >
                <h3 className="font-semibold text-foreground">{type.label}</h3>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="pb-8 px-6">
        <button
          onClick={handleNext}
          disabled={!selectedType}
          className={`w-full max-w-2xl mx-auto block py-3 px-6 rounded-full font-semibold transition-opacity ${
            selectedType ? 'bg-primary text-white hover:opacity-90' : 'bg-muted text-muted-foreground cursor-not-allowed'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  )
}
