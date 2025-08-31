import { PricingTable } from '@clerk/nextjs'
import React from 'react'
import { CheckCircle2, Star, Zap, Shield } from 'lucide-react'

const Subscription = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <div className="text-center py-12 px-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-8 h-8 text-primary" />
          <h1 className="text-4xl font-bold">Choose Your Plan</h1>
        </div>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Unlock premium features and take your AI learning experience to the next level
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Benefits Section */}
          <div className="lg:col-span-1 space-y-6">
            <h2 className="text-2xl font-semibold mb-4">Why Upgrade?</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 rounded-lg border">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Unlimited AI Companions</h3>
                  <p className="text-sm text-muted-foreground">Create and chat with unlimited AI tutors</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg border">
                <Zap className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Advanced Features</h3>
                  <p className="text-sm text-muted-foreground">Access premium AI models and tools</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3 p-3 rounded-lg border">
                <Shield className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-medium">Priority Support</h3>
                  <p className="text-sm text-muted-foreground">Get help when you need it most</p>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Secure & Trusted</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>✓ 256-bit SSL encryption</p>
                <p>✓ Cancel anytime</p>
                <p>✓ 30-day money back guarantee</p>
              </div>
            </div>
          </div>

          {/* Clerk Pricing Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border shadow-sm p-6">
              <div className="text-center mb-6">
                <h2 className="text-xl font-semibold mb-2">Select Your Plan</h2>
                <p className="text-muted-foreground">Secure payment powered by Clerk</p>
              </div>
              
              <PricingTable/>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground">
                  All plans include our core features. Upgrade anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium mb-2">Can I cancel anytime?</h3>
              <p className="text-sm text-muted-foreground">Yes, you can cancel your subscription at any time with no penalties.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium mb-2">Is there a free trial?</h3>
              <p className="text-sm text-muted-foreground">Yes, we offer a 14-day free trial for all premium plans.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium mb-2">What payment methods do you accept?</h3>
              <p className="text-sm text-muted-foreground">We accept all major credit cards and PayPal through our secure payment processor.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="font-medium mb-2">Do you offer refunds?</h3>
              <p className="text-sm text-muted-foreground">Yes, we offer a 30-day money-back guarantee for all subscriptions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription
