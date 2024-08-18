import React from "react";
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";

const OurAdvocates: React.FC = () => {
  const chapterPresidents = [
    {
      country: "Hong Kong",
      presidents: [
        {
          school: "KGV",
          name: "Amelie So",
          image: "/image/chapterpresidents/Amelie.jpg",
          reason: "Empowering girls to speak out and make a difference.",
        },
        {
          school: "KGV",
          name: "Audrey Lee",
          image: "/image/chapterpresidents/Audrey.png",
          reason: "Creating a supportive community for young women.",
        },
        // Add more presidents as needed
      ],
    },
    {
      country: "Korea",
      presidents: [
        // Add Korea chapter presidents here
      ],
    },
    {
      country: "Toronto",
      presidents: [
        // Add Toronto chapter presidents here
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="relative bg-gradient-radial to-pink-400 from-yellow-300 w-full size-auto">
        <div className="bg-stars">
          <div className="pt-10">
            <div className="px-50">
              <h1 className="text-center drop-shadow-glow text-9xl text-white font-Motley leading-[100px]">
                CHAPTER PRESIDENTS
              </h1>
            </div>
          </div>

          {chapterPresidents.map((chapter, index) => (
            <div key={index}>
              <div className="w-full size-auto mt-10 bg-white pb-5 pt-5 mb-20">
                <div className="text-center align-middle text-7xl text-pink-400 font-Boruna">
                  {chapter.country}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-5">
                {chapter.presidents.map((president, index) => (
                  <div
                    key={index}
                    className="col-span-1 border border-black p-4 bg-white rounded-lg shadow-md"
                  >
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <img
                          src={president.image}
                          alt={`${president.name}'s image`}
                          className="h-32 w-32 object-cover rounded-full border border-black"
                        />
                      </div>
                      <div className="pl-5">
                        <p className="font-bold text-xl">{president.name}</p>
                        <p className="text-sm text-gray-700">{president.school}</p>
                        <p className="mt-3 text-sm text-gray-900">{president.reason}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OurAdvocates;
