import React from "react";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div>
      <div className="relative h-screen w-full overflow-hidden bg-cover bg-center" style={{ backgroundImage: "url('/background.jpg')" }}>
        <div className="absolute inset-0 backdrop-contrast-75 backdrop-brightness-50 bg-opacity-60 flex flex-col">
          <Navbar />

          <main className="flex flex-1 items-center justify-center text-center px-4">
            <div className="text-white max-w-xl">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight" style={{ color: "#f9f9f9" }}>
                Turning Creative Ideas into Success
              </h1>
              <p className="mt-4 text-base md:text-xl text-gray-200">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua quis nostrud exerc.
              </p>
              <button className="mt-6 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full text-base font-medium">
                Discover Now
              </button>
            </div>
          </main>
        </div>

        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 320">
          <path
            fill="white"
            d="M0,224 L48,213.3 C96,203,192,181,288,197.3 C384,213,480,267,576,261.3 C672,256,768,192,864,170.7 C960,149,1056,171,1152,186.7 C1248,203,1344,213,1392,218.7 L1440,224 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>


      {/* Creative Agency */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 py-20">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg w-full md:w-2/5 mx-auto mb-4 md:mb-0"> {/* Reduced width to 2/5 */}
                <img
                  src="	https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3l.png"
                  alt="Creative Team"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute top-1/4 left-1/4 rounded-2xl overflow-hidden shadow-lg w-1/2 md:w-2/5 transform translate-y-10 translate-x-10">
                <img
                  src="https://seo.axiomthemes.com/wp-content/uploads/2023/03/h3r.png"
                  alt="Working on Laptop"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="text-left">
              <h2 className="text-sm font-semibold text-gray-600 uppercase mb-2">
                Creative Agency
              </h2>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                We help your business grow
              </h1>
              <p className="text-gray-600 mb-6">
                Dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.
              </p>

              <div className="flex items-start mb-4">
                <div className="mr-4">
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S5.168 5.477 5 6.253v13C5.168 18.477 6.754 19 8.5 19S11.832 18.477 12 17.747M12 6.253C13.168 5.477 14.754 5 16.5 5S18.832 5.477 19 6.253v13C18.832 18.477 17.246 19 15.5 19S12.168 18.477 12 17.747"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Creative design
                  </h3>
                  <p className="text-gray-600">
                    Natus error sit voluptatem accusantium doloremque.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4">
                  <svg
                    className="w-8 h-8 text-indigo-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-1">
                    Digital marketing
                  </h3>
                  <p className="text-gray-600">
                    Laudantium, totam rem aperiam, eaque ipsa quae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
       {/* Stats Section */}
       <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10">
            {[
              { number: "98", label: "Projects" },
              { number: "65", label: "People" },
              { number: "10", label: "Years" },
              { number: "15", label: "Offices" },
            ].map((stat, index) => (
              <div key={index} className="text-center relative">
                <div className="text-6xl md:text-7xl font-bold text-white drop-shadow-sm">
                  {stat.number}
                  <div className="absolute left-1/2 transform -translate-x-1/2 text-navy-800 text-base md:text-lg font-semibold mt-2">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text */}
          <div className="text-left">
            <h2 className="text-sm font-semibold text-gray-600 uppercase mb-2">
              Creative Solutions
            </h2>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              We make unique & memorable brands
            </h1>
            <p className="text-gray-600 mb-6">
              At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque lorem in voluptate velit iusto odio dignissimos ducimus esse.
            </p>
            <p className="text-gray-600 mb-6">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
            </p>
            <a href="#" className="text-blue-600 font-semibold underline">
              Read More
            </a>
          </div>

          {/* Right Side - Empty (for layout) */}
          <div>
            {/* You can add content here if needed */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}