import { Users, Zap, Shield } from "lucide-react"

const features = [
  {
    name: "Multidisciplinary Team",
    description:
      "Our team comprises professional engineers across various disciplines, ensuring comprehensive solutions.",
    icon: Users,
  },
  {
    name: "End-to-End Solutions",
    description: "We provide tailored solutions from concept to implementation, meeting diverse client needs.",
    icon: Zap,
  },
  {
    name: "Quality Assurance",
    description: "We ensure product quality and provide effective after-sales support for client satisfaction.",
    icon: Shield,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-[#001e2e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-[#745e30] font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Why Choose TET?
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#745e30] text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-white">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-300">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

