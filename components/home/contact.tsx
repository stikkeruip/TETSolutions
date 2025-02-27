import Link from "next/link"

export default function Contact() {
  return (
      <div className="py-12 relative overflow-hidden">
        <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: "url('/images/home/contact-us.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
        >
          <div className="absolute inset-0 bg-[#001e2e] bg-opacity-45" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:text-center">
            <h2 className="text-base text-[#745e30] font-semibold tracking-wide uppercase">Contact Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to Transform Your Business?
            </p>
            <p className="mt-4 max-w-2xl text-xl text-white lg:mx-auto">
              Get in touch with our team of experts to discuss how we can help you leverage technology for your business
              success.
            </p>
          </div>

          <div className="mt-10 flex justify-center">
            <Link
                href="/contact"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#745e30] hover:bg-[#001e2e] hover:border-[#745e30] md:py-4 md:text-lg md:px-10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
  )
}