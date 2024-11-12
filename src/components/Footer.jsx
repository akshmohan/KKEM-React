import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      {/* Row 1: Email Subscription */}
      <div className="py-10 bg-gray-200">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <h3 className="text-2xl font-semibold">Get New Insights Weekly</h3>
            <p className="text-gray-600">
              News letter dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt. Enter your email.
            </p>
          </div>
          <div className="lg:w-1/2 flex justify-end">
            <form className="flex w-full lg:w-auto">
              <input
                type="email"
                placeholder="Email Your Address"
                name="emails"
                className="p-3 w-full lg:w-auto flex-grow rounded-l-md border border-gray-400 focus:outline-none"
              />
              <button
                type="submit"
                name="submit"
                className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700 flex items-center"
              >
                Subscribe <i className="fas fa-chevron-right ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Row 2: Footer Content */}
      <div className="py-10 bg-black text-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-4">
          {/* Company Brand and Info */}
          <div>
            <Link>
              {" "}
              <img
                src="/assets/images/kdisc-logo.png"
                alt="Logo"
                className="h-10"
              />
            </Link>

            <p className="text-gray-600">
              A Kerala Development and Innovation Strategic Council (K-DISC)
              initiative, Kerala Knowledge Economy Mission (KKEM), aims to
              create jobs for the educated by transforming Kerala.
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
            >
              Resume preparation <i className="fas fa-chevron-right ml-2"></i>
            </a>
          </div>

          {/* Contact Information */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Contact Us</h5>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <i className="fas fa-envelope mr-2"></i>
                <span>
                  Email:{" "}
                  <a href="mailto:info@kkem.com" className="hover:underline">
                    info@kkem.com
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>
                  Phone:{" "}
                  <a href="tel:+10000000000" className="hover:underline">
                    +1 0000 000 000
                  </a>
                </span>
              </li>
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt mr-2"></i>
                <span>
                  Address: GX26+GXP, Thiruvananthapuram - <br /> Neyyar Dam Rd,
                  Cotton Hill, <br /> Vazhuthacaud, Kerala 695014
                </span>
              </li>
            </ul>
          </div>

          {/* Company Links and Social Media Icons */}
          <div>
            <h5 className="text-xl font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>
                <a href="aboutus.html" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="division.html" className="hover:underline">
                  Division
                </a>
              </li>
              <li>
                <a href="message.html" className="hover:underline">
                  Message
                </a>
              </li>
              <li>
                <a href="rti.html" className="hover:underline">
                  RTI
                </a>
              </li>
              <li>
                <a href="faq.html" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="contactus.html" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="space-x-4 text-gray-500">
              <a href="#" target="blank" className="hover:text-blue-600">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" target="blank" className="hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="blank" className="hover:text-blue-600">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="blank" className="hover:text-blue-600">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Copyright */}
      <div className="bg-gray-200 py-4">
        <div className="container mx-auto text-center text-gray-600">
          <p>
            © 2024. All Rights Reserved By{" "}
            <a href="#" className="hover:underline">
              Kawika Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
