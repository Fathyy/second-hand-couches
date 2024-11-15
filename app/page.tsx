import {
  CallToAction,
  Categories,
  FeaturedProducts,
  Footer,
  Hero,
  Navbar,
  Testimonials,
  WhyChooseUs,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="bg-light-grey w-full overflow-hidden">
        <div className="sm:px-16 px-6 xl:max-w-[1280px] w-full">
          <Navbar />
          <Hero />
          <FeaturedProducts />
        </div>
      </div>

      <Categories />
      <div className="w-full overflow-hidden bg-light-grey">
        <div className="sm:px-16 px-6 xl:max-w-[1280px] w-full">
          <WhyChooseUs />
        </div>
      </div>
      <div>
        <Testimonials />
      </div>

      <div className="sm:px-16 px-6 xl:max-w-[1280px] w-full bg-gradient-rust-earthy">
        <CallToAction />
      </div>

      <div className="bg-dark-grey overflow-hidden w-full">
        <div className="sm:px-16 px-6 xl:max-w-[1280px] w-full">
        <Footer />
        </div>
      </div>
    </>
  );
}
