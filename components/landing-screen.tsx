'use client';

export interface LandingScreenProps {
  onNext: () => void
}

export function LandingScreen({ onNext }: LandingScreenProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
        <div className="w-full max-w-2xl space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-foreground mb-6">
              What is <span className="text-primary">face yoga</span>, anyway?
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Face yoga is a simple, holistic way to keep your skin smooth, lifted and glowing. It helps improve your overall facial wellness and slow signs of aging.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">How does it work?</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">
                      Uses <span className="text-primary">targeted techniques</span> for your face, neck, and shoulders
                    </h3>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Massage</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• boosts circulation</li>
                      <li>• improves lymph flow</li>
                      <li>• releases tension</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-2">Acupressure ease stress and supports</h3>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• headache relief</li>
                      <li>• sinus release</li>
                      <li>• better sleep</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-8 px-6">
        <button
          onClick={onNext}
          className="w-full max-w-2xl mx-auto block bg-primary text-white py-3 px-6 rounded-full font-semibold hover:opacity-90 transition-opacity"
        >
          Ok, got it!
        </button>
      </div>
    </div>
  )
}
