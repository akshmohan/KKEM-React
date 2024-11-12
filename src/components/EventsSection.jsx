function EventsSection() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <span className="text-pink-600 font-semibold">Events</span>
            <h2 className="text-3xl font-bold mb-6">Upcoming Events</h2>
          </div>
        </div>

        <div className="bg-gray-100 py-8 flex justify-between max-w-[1000px] mx-auto">
          <div className="container mx-auto">
            <div className="flex justify-between space-x-2 overflow-x-auto">
              {[...Array(2)].map((_, index) => (
                <div
                  key={index}
                  className="min-w-[300px] bg-gray-100 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition"
                >
                  <div className="relative">
                    <img
                      src="/assets/images/blog-1.jpg"
                      alt="Event"
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="p-5 text-black">
                    <h4 className="text-xl font-bold mb-3">
                      Stock Market App Development - Time, Cost, Features
                    </h4>
                    <div className="text-sm space-y-2">
                      <span className="block">
                        <i className="fas fa-location-arrow mr-2"></i>Technopark
                      </span>
                      <span className="block">
                        <i className="fas fa-clock mr-2"></i>Sep 24, 2019
                      </span>
                      <span className="block">
                        <i className="fas fa-business-time mr-2"></i>10:00 AM
                      </span>
                    </div>
                    <a
                      href="#"
                      className="mt-4 inline-block bg-pink-600 text-white py-2 px-4 rounded-lg hover:bg-pink-700 transition"
                    >
                      Read More <i className="fas fa-chevron-right ml-2"></i>
                    </a>
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

export default EventsSection;
