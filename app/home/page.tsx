'use client'

import { useState } from 'react'
import { ChevronRight, Sparkles, Users, TrendingUp } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold text-foreground">
              Look Your Best Naturally with{' '}
              <span className="text-primary">Face Yoga</span>
            </h1>
            <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
              Get a personalized face yoga and skincare routine based on your unique goals, skin type, and lifestyle. Discover the secrets to natural facial rejuvenation.
            </p>
          </div>
          
          <div className="flex gap-4 justify-center pt-6">
            <Link
              href="/quiz"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:shadow-lg transition-shadow"
            >
              Start Your Personalized Quiz
              <ChevronRight size={20} />
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary/5 transition-colors"
            >
              View Plans
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            Why Choose Looksmaxing by Growevity?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl border border-border">
              <Sparkles className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">AI-Powered Personalization</h3>
              <p className="text-foreground/70">Get a customized face yoga routine designed specifically for your age, skin type, concerns, and lifestyle goals.</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border">
              <Users className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Expert Guidance</h3>
              <p className="text-foreground/70">Learn from beauty and wellness experts. Each routine includes detailed instructions and skincare product recommendations.</p>
            </div>
            
            <div className="bg-card p-8 rounded-xl border border-border">
              <TrendingUp className="text-primary w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3 text-foreground">Proven Results</h3>
              <p className="text-foreground/70">Track your progress with milestone-based goals. Thousands of users report visible improvements in 12 weeks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground">
            How It Works
          </h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: 'Complete Quiz', desc: 'Answer questions about your age, goals, and skin' },
              { step: 2, title: 'Get Analysis', desc: 'AI analyzes your profile and creates personalized plan' },
              { step: 3, title: 'Receive Routine', desc: 'Get detailed daily routines and product recommendations' },
              { step: 4, title: 'Track Progress', desc: 'Follow milestones and see visible improvements' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Ready to Transform Your Skin?</h2>
          <p className="text-lg opacity-90">
            Start your personalized face yoga journey today. Take the quiz and discover your unique routine in minutes.
          </p>
          <Link
            href="/quiz"
            className="inline-block bg-primary-foreground text-primary px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-shadow"
          >
            Get Started Now
          </Link>
        </div>
      </section>
    </div>
  )
}
