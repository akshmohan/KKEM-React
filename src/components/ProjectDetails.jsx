function ProjectDetails() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-7/12 px-4">
            <span className="text-pink-600 font-semibold">PROJECT DETAILS</span>
            <div className="mt-6 pr-6">
              <h3 className="text-2xl font-bold mb-5">
                Digital Workforce Management System
              </h3>
              <p className="text-gray-700">
                Digital Workforce Management is a platform that connects all
                stakeholders in creating a knowledge-based ecosystem. The job
                aspirants can fine-tune their career preferences and enrich
                their profiles to enhance their chances of getting a dream
                career by taking an AI-based Career Inclination Survey and
                Robotic Interview. DWMS offers the following major features.
              </p>
              <ul className="mt-5 list-disc list-inside text-gray-700">
                <li>Job Matching</li>
                <li>Robotic Interview</li>
                <li>Personality Development Training</li>
                <li>Career Counselling</li>
                <li>Psychometric Test</li>
                <li>Work Readiness Program</li>
              </ul>
              <a
                href="#"
                className="inline-block mt-8 bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-pink-700 transition duration-200"
              >
                More Details <i className="fas fa-chevron-right ml-2"></i>
              </a>
            </div>
          </div>
          <div className="w-full lg:w-5/12 px-4 mt-10 lg:mt-0">
            <div className="relative">
              <img
                src="/assets/images/branding-.jpg"
                alt="Digital Workforce Management System"
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
