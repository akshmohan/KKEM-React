const WhosWho = () => {
  const teamMembers = [
    {
      name: "Shri. Pinarayi Vijayan",
      position: "Hon'ble Chief Minister Kerala",
      image: "/assets/images/team-a.jpg",
    },
    {
      name: "Shri. Pinarayi Vijayan",
      position: "Hon'ble Chief Minister Kerala",
      image: "/assets/images/team-a.jpg",
    },
    {
      name: "Shri. Pinarayi Vijayan",
      position: "Hon'ble Chief Minister Kerala",
      image: "/assets/images/team-a.jpg",
    },
    {
      name: "Shri. Pinarayi Vijayan",
      position: "Hon'ble Chief Minister Kerala",
      image: "/assets/images/team-a.jpg",
    },
  ];

  return (
    <section className="bg-gradient-to-r from-white to-grey-500 py-16 flex">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-black text-4xl font-semibold">Who&apos;s Who</h2>
          <p className="text-white mb-0"></p>
        </div>
        <div className="flex flex-wrap justify-center">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-full sm:w-1/4 p-4">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="overflow-hidden">
                  <a href="#">
                    <img
                      src={member.image}
                      alt="team"
                      className="w-full h-auto transition-transform duration-300 hover:scale-105"
                    />
                  </a>
                </div>
                <div className="p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-800">
                    <a href="#">{member.name}</a>
                  </h4>
                  <p className="text-gray-600">{member.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhosWho;
