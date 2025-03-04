import AboutCarousel from "./about-carousel"

export default function About() {
  return (
      <div className="py-12 bg-[#f1e5d1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-[#9A7E43] font-semibold tracking-wide uppercase">About Us</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-[#013d60] sm:text-4xl">
              Empowering Businesses Since 2002
            </p>
            <p className="mt-4 max-w-2xl text-xl text-[#013d60] lg:mx-auto">
              Technical Engineers for Technology (TET) has been providing hardware and software solutions to clients in
              Jordan and the broader Middle Eastern region for over two decades.
            </p>
          </div>

          <AboutCarousel />

          <div className="mt-10">
            <p className="text-[#013d60] text-lg text-center">
              Our mission is to transform information into a competitive edge for our clients by integrating technology,
              people, business, and strategy. With a team of professional engineers across various disciplines, we deliver
              end-to-end solutions tailored to customer needs, ensuring both product quality and effective after-sales
              support.
            </p>
          </div>
        </div>
      </div>
  )
}