const AboutSection = () => {
  const funFacts = [
    {
      imgSrc: "/assets/images/startup.svg",
      value: "14.8",
      unit: "Lakh",
      description: "Registered Talents",
    },
    {
      imgSrc: "/assets/images/team.svg",
      value: "67.88",
      unit: "%",
      description: "Experienced",
    },
    {
      imgSrc: "/assets/images/mobile.svg",
      value: "4992",
      unit: "+",
      description: "Employers",
    },
    {
      imgSrc: "/assets/images/computers.svg",
      value: "6.3",
      unit: "Lakh",
      description: "Reported Vacancies",
    },
    {
      imgSrc: "/assets/images/world.svg",
      value: "417",
      unit: "+",
      description: "Skill Programmes",
    },
    {
      imgSrc: "/assets/images/deal.svg",
      value: "92",
      unit: "+",
      description: "Skill Partners",
    },
  ];

  return (
    <section className="bg-gray-200 py-16 text-black">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 px-4">
            <div>
              <h2 className="text-4xl font-bold text-red-500 mb-6">
                Kerala Knowledge Economy Mission (KKEM)
              </h2>
              <p className="mb-4">
                Kerala Knowledge Economy Mission (KKEM) introduces a diverse
                range of job opportunities through the Pathanamthitta Knowledge
                District Programme. This initiative is designed to connect
                skilled individuals with leading employers in various sectors,
                offering both local and international career paths.
              </p>
              <p className="mt-4">
                Opportunities Spanning the Globe: Whether it&apos;s engineering
                positions in India or construction roles in Australia, our
                program caters to a variety of qualifications and interests.
                Featured opportunities include Sheet Metal Fabricators in
                Australia, Care Workers in Japan, and Financial Analysts with
                Accenture, highlighting the program&apos;s global reach.
              </p>
            </div>
            <div className="mt-10">
              <a
                href="#"
                className="inline-block border-2 border-black text-black px-6 py-2 rounded-lg hover:bg-yellow-400 hover:text-gray-900 transition"
              >
                Read more <i className="fas fa-chevron-right ml-2"></i>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 px-2 mt-10 lg:mt-0">
            <div className="grid grid-cols-3 gap-6">
              {funFacts.map((fact, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg"
                >
                  <img
                    src={fact.imgSrc}
                    alt={fact.description}
                    className="w-12 h-12 mb-4"
                  />
                  <div className="text-3xl font-semibold">
                    {fact.value}
                    <span className="text-lg">{fact.unit}</span>
                  </div>
                  <p className="text-center mt-2">{fact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
