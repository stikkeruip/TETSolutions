import { Server, Code, GraduationCap } from "lucide-react"

const services = [
  {
    name: "Hardware Solutions",
    description: "Advanced technological hardware to meet diverse client needs.",
    icon: Server,
    backgroundImage: "/images/home/services-hardware.jpg",
  },
  {
    name: "Software Solutions",
    description: "Innovative software products and services to enhance client operations.",
    icon: Code,
    backgroundImage: "/images/home/services-software.jpg",
  },
  {
    name: "Training Solutions",
    description: "Comprehensive programs to empower users with modern technologies.",
    icon: GraduationCap,
    backgroundImage: "/images/home/services-training.jpg"
  },
]

export default function Services() {
  return (
      <div className="py-12 bg-[#013d60]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#9A7E43] font-semibold tracking-wide uppercase">Services</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Comprehensive Technology Solutions
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {services.map((service) => (
                  <div key={service.name} className="relative rounded-lg overflow-hidden group">
                    {/* Background Image with Overlay */}
                    <div className="absolute inset-0">
                      <img
                          src={service.backgroundImage}
                          alt={service.name}
                          className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-[#013d60] bg-opacity-75 transition-opacity group-hover:bg-opacity-45"></div>
                    </div>

                    {/* Content positioned over the background */}
                    <div className="relative p-6 h-full">
                      <dt>
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#9A7E43] text-white mb-4">
                          <service.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="text-lg leading-6 font-medium text-white">{service.name}</p>
                      </dt>
                      <dd className="mt-2 text-base text-gray-300">{service.description}</dd>
                    </div>
                  </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
  )
}