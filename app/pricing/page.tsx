'use client'

import { Check } from 'lucide-react'
import Link from 'next/link'

export default function PricingPage() {
  const plans = [
    {
      name: 'Free Trial',
      price: '$0',
      period: 'Forever',
      description: 'Perfect for getting started',
      features: [
        'Complete personalized quiz',
        'Basic face yoga routine (5 minutes)',
        'Skin type analysis',
        '1 week of progress tracking',
        'Community access',
      ],
      cta: 'Start Free',
      ctaHref: '/quiz',
      popular: false,
      amount: 0,
      planId: 'free',
    },
    {
      name: 'Pro',
      price: '$9.99',
      period: '/month',
      description: 'Most popular choice',
      features: [
        'Everything in Free Trial',
        'Daily & evening routines (20+ minutes)',
        'Product recommendations (6+ products)',
        '12-week progress tracking',
        'Lifestyle & wellness tips',
        'Monthly AI-powered routine updates',
        'Priority support',
        'Downloadable PDF guides',
      ],
      cta: 'Get Pro',
      ctaHref: '/payment?plan=pro&amount=9.99',
      popular: true,
      amount: 9.99,
      planId: 'pro',
    },
    {
      name: 'Premium',
      price: '$19.99',
      period: '/month',
      description: 'For serious results',
      features: [
        'Everything in Pro',
        'Advanced supplement recommendations',
        '1-on-1 chat consultation',
        'Custom routine modifications',
        'Video tutorial library',
        'Bi-weekly AI check-ins',
        'Advanced progress analytics',
        'Exclusive member community',
        'Lifetime access to updates',
      ],
      cta: 'Get Premium',
      ctaHref: '/payment?plan=premium&amount=19.99',
      popular: false,
      amount: 19.99,
      planId: 'premium',
    },
  ]

  return (
    <div className="min-h-screen bg-background py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Choose the plan that works best for you. All plans include a free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl overflow-hidden transition-all ${
                plan.popular
                  ? 'ring-2 ring-primary scale-105 shadow-2xl'
                  : 'border border-border'
              } bg-card`}
            >
              {plan.popular && (
                <div className="bg-primary text-primary-foreground py-2 text-center font-semibold text-sm">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8 space-y-6">
                {/* Plan Name and Price */}
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-foreground/70 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-foreground/70">{plan.period}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href={plan.ctaHref}
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors block ${
                    plan.popular
                      ? 'bg-primary text-primary-foreground hover:shadow-lg'
                      : 'border-2 border-primary text-primary hover:bg-primary/5'
                  }`}
                >
                  {plan.cta}
                </Link>

                {/* Features List */}
                <div className="space-y-4">
                  {plan.features.map((feature, featureIdx) => (
                    <div key={featureIdx} className="flex gap-3 items-start">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80 text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Yes, you can cancel anytime with no penalty. Your subscription will remain active until the end of your billing period.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, PayPal, and Apple Pay. All payments are processed securely through Stripe.',
              },
              {
                q: 'How often are routines updated?',
                a: 'Pro users get monthly updates, and Premium users get bi-weekly check-ins with AI-powered routine adjustments based on your progress.',
              },
              {
                q: 'Is there a free trial?',
                a: 'Yes! All paid plans include a 7-day free trial so you can test them before committing.',
              },
              {
                q: 'Can I upgrade or downgrade anytime?',
                a: 'Absolutely. You can change your plan at any time from your account settings. Changes take effect on your next billing cycle.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-card border border-border p-6 rounded-lg">
                <h3 className="font-bold text-foreground mb-2">{item.q}</h3>
                <p className="text-foreground/70 text-sm">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
