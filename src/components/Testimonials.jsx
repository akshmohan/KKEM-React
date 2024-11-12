export default function Testimonials() {
  const testimonials = [
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      name: "Name",
      position: "CEO",
      location: "Jaipur, India",
      image: "images/girl.jpg",
    },
    {
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      name: "Name",
      position: "CEO",
      location: "Jaipur, India",
      image: "images/girl.jpg",
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="testinomial-section py-16 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="lg:w-5/12 mb-8 lg:mb-0 flex items-center">
            <div className="common-heading text-left">
              <span className="text-pink-700">Client TestimonialS</span>
              <h2 className="text-3xl font-semibold mt-4">
                What our clients say about our Company.
              </h2>
            </div>
          </div>
          <div className="lg:w-7/12">
            <div className="testimonial-cards space-y-8 pl-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="testimonial-card p-6 bg-white shadow-md rounded-lg"
                >
                  <p className="text-gray-600">{testimonial.text}</p>
                  <div className="client-thumbs flex mt-6 items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border mr-4"
                    />
                    <div>
                      <h5 className="font-bold text-lg">{testimonial.name}</h5>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}{" "}
                        <small>{testimonial.location}</small>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
