const WhyChooseSection = () => {
  return (
    <section className="why-choose-lg py-12 bg-gray-100 text-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Left Column */}
          <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
            <div className="text-left">
              <span className="text-lg font-semibold text-red-400">
                About the Mission
              </span>
              <h2 className="text-3xl font-bold mb-5">
                Kerala Knowledge Economy Mission
                <span className="text-red-600 font-extrabold text-center">
                  {" "}
                  (KKEM)
                </span>
              </h2>
              <p className="mb-8">
                An initiative that aims to provide employment to the educated by
                transforming the State of Kerala into a Knowledge Society, which
                will produce, consume, and transact knowledge for its own social
                and economic development. KKEM targets to provide gainful
                employment to 20 lakh people over 5 years in various sectors and
                job verticals.
              </p>

              {/* Features List */}
              <div className="space-y-10">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <img
                      src="/assets/images/computers.svg"
                      alt="icon"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold">
                      Digital Workforce Management System
                    </h4>
                    <p className="text-gray-800">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc aliquet ligula nec leo elementum semper. Mauris
                      aliquet egestas metus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <img
                      src="/assets/images/worker.svg"
                      alt="icon"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold">
                      Personality Development Training
                    </h4>
                    <p className="text-gray-800">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc aliquet ligula nec leo elementum semper. Mauris
                      aliquet egestas metus.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <img
                      src="/assets/images/deal.svg"
                      alt="icon"
                      className="w-12 h-12"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-xl font-semibold">
                      Social Security Benefits
                    </h4>
                    <p className="text-gray-800">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Nunc aliquet ligula nec leo elementum semper. Mauris
                      aliquet egestas metus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2">
            <div className="bg-cover bg-center rounded-lg overflow-hidden shadow-lg">
              <img
                src="/assets/images/about-company.jpg"
                alt="about company"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="text-center mt-8 text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text ever since the 1500s.
            </p>

            {/* Call to Action */}
            <div className="text-center mt-12 bg-transparent p-8">
              <h3 className="text-2xl font-bold mb-4">
                Looking for a{" "}
                <span className="text-red-400">job but need to improve</span>{" "}
                your skills?
              </h3>
              <p className="text-gray-600 mb-6">
                Check out the programs in DWMS
              </p>
              <div className="button-container rounded-full">
                <button
                  className="inline-block border-2 border-transparent rounded-full bg-transparent text-black font-semibold py-3 px-6 transition duration-200 outline-none"
                  style={{
                    borderImage:
                      "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)",
                    borderImageSlice: 1,
                    borderRadius: "9999px",
                  }}
                  onClick={() => {
                    /* Add your download logic here */
                  }}
                >
                  Click here to Download{" "}
                  <i className="fas fa-chevron-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
