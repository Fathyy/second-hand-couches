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
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
