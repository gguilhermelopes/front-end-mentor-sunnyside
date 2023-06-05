import TestimonialCard from "./testimonialCard";

const testimonialsContent = [
  {
    photoName: "emily",
    quote:
      "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
    name: "Emily R.",
    position: "Marketing Director",
  },
  {
    photoName: "thomas",
    quote:
      "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience. ",
    name: "Thomas S.",
    position: "Chief Operating Officer",
  },
  {
    photoName: "jennie",
    quote:
      "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!  ",
    name: "Jennie F.",
    position: "Business Owner",
  },
];

const Testimonials = () => {
  return (
    <>
      <h2 className="font-serif uppercase text-darkGrayishBlue text-xl tracking-[.25em]">
        Client Testimonials
      </h2>
      <div className="flex gap-10 mt-20">
        {testimonialsContent.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            photoName={testimonial.photoName}
            quote={testimonial.quote}
            name={testimonial.name}
            position={testimonial.position}
          />
        ))}
      </div>
    </>
  );
};

export default Testimonials;
