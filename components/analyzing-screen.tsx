'use client'

export function AnalyzingScreen() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl space-y-8 text-center">
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-foreground">
            Creating your <span className="text-primary">personalized plan</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            We're analyzing your skin profile and generating your custom face yoga routine...
          </p>
        </div>

        <div className="py-12">
          <div className="flex justify-center items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
        </div>

        <div className="space-y-4 text-left bg-card p-6 rounded-2xl border border-border">
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-foreground">Analyzing skin profile</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <svg className="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </div>
            <span className="text-foreground">Building custom routine</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            </div>
            <span className="text-foreground">Selecting products</span>
          </div>
        </div>
      </div>
    </div>
  )
}
