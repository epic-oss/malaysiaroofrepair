import { Search, Users, MessageSquare, CheckCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/Card'

const steps = [
  {
    icon: Search,
    title: 'Search & Filter',
    description: 'Browse contractors by location, service type, and specialization',
  },
  {
    icon: Users,
    title: 'Compare Profiles',
    description: 'Review verified profiles, ratings, and past work from trusted contractors',
  },
  {
    icon: MessageSquare,
    title: 'Request Quotes',
    description: 'Get free quotes from multiple contractors with no obligation',
  },
  {
    icon: CheckCircle,
    title: 'Hire with Confidence',
    description: 'Choose the best contractor for your project and get started',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-2 text-lg text-gray-600">
            Find the perfect roofing contractor in 4 simple steps
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <div key={step.title} className="relative">
                <Card className="h-full">
                  <CardContent className="p-6">
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-accent-500 text-sm font-bold text-white shadow-lg">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                      <Icon className="h-6 w-6" />
                    </div>

                    {/* Content */}
                    <h3 className="mb-2 text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </CardContent>
                </Card>

                {/* Arrow (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-1/2 lg:block">
                    <svg
                      className="h-6 w-6 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
