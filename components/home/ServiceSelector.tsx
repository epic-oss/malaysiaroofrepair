import Link from 'next/link'
import { Wrench, Droplet, PaintBucket, Hammer, Home, Sparkles, Package, AlertCircle, Building, Zap } from 'lucide-react'
import { siteConfig } from '@/lib/config'
import { slugify } from '@/lib/utils/slugify'
import { Card } from '@/components/ui/Card'

// Icon mapping for services
const serviceIcons: Record<string, any> = {
  'Roof Leak Repair': AlertCircle,
  'Waterproofing': Droplet,
  'Roof Coating': PaintBucket,
  'Metal Roof Repair': Hammer,
  'Tile Roof Repair': Home,
  'Gutter Repair & Replacement': Package,
  'Roof Replacement': Building,
  'Ceiling Leak Repair': Sparkles,
  'Flat Roof Waterproofing': Droplet,
  'Emergency Roof Repair': Zap,
}

export function ServiceSelector() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Browse by Service Type
          </h2>
          <p className="mt-2 text-gray-600">
            Find specialists for your specific roofing needs
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {siteConfig.serviceTypes.map((service) => {
            const Icon = serviceIcons[service] || Wrench
            const slug = slugify(service)

            return (
              <Link key={service} href={`/services/${slug}`}>
                <Card className="group cursor-pointer transition-all hover:shadow-lg hover:border-primary-300">
                  <div className="p-6 text-center">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-4 font-medium text-gray-900 group-hover:text-primary-600 transition-colors text-sm">
                      {service}
                    </h3>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
