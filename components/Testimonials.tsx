import React from "react";

type Props = {};

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    testimonial:
      "I found the perfect couch here! The quality is incredible, and it looks brand new. The staff were so friendly and helpful throughout. I highly recommend this store for anyone looking to find a great deal on furniture!",
  },
  {
    id: 2,
    name: "James L.",
    testimonial:
      "Amazing experience! I was surprised at the variety and quality of the couches available. My purchase looks fantastic in my living room, and the prices are unbeatable. Definitely worth a visit!",
  },
  {
    id: 3,
    name: "Emily R.",
    testimonial:
      "This shop exceeded my expectations! The couch I bought is stylish, comfortable, and in perfect condition. The team made the process easy and enjoyable. I’ll be recommending them to everyone!",
  },
];

const Testimonials = (props: Props) => {
  return (
    <div className="relative bg-testimonialsImage bg-cover bg-center py-16">
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10 text-light-grey sm:px-16 px-6 xl:max-w-[1280px] mx-auto">
        <h1 className="text-3xl font-bold text-center mb-4">Testimonials</h1>
        <div className="border-t-2 border-rust-orange mx-auto w-20 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 space-y-4 bg-white bg-opacity-10 rounded-md"
            >
              <p className="text-lg">{testimonial.testimonial}</p>
              <p className="font-semibold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
