import React from "react";
import Navbar from "../components/Navbarhome";
import Footer from "../components/Footer";

const OurAdvocates: React.FC = () => {
  const chapterPresidents = [
    {
      country: "Hong Kong",
      presidents: [
        {
          school: "Girl Talk KGV",
          name: "Amelie So",
          image: "/image/chapterpresidents/Amelie.jpg",
          reason: "Empowering girls to speak out and make a difference.",
          contact: "soa1@kgv.hk",
        },
        {
          school: "Girl Talk KGV",
          name: "Audrey Lee",
          image: "/image/chapterpresidents/Audrey.png",
          reason: "Creating a supportive community for young women.",
          contact: "leea17@kgv.hk",
        },
        {
          school: "Girl Talk Sha Tin College",
          name: "Isabelle Mak",
          image: "/image/chapterpresidents/Audrey.png",
          reason: "Creating a supportive community for young women.",
          contact: "maki2@stconline.edu.hk",
        },
        {
          school: "Girl Talk Sha Tin College",
          name: "Christa Chen",
          image: "/image/chapterpresidents/Audrey.png",
          reason: "Creating a supportive community for young women.",
          contact: "chenc23@stconline.edu.hk",
        },
        {
          school: "Girl Talk CDNIS",
          name: "Chloe Chan",
          image: "/image/chapterpresidents/Audrey.png",
          reason: "Creating a supportive community for young women.",
          contact: "chloechan2026@cdnis.edu.hk",
        },
        {
          school: "Girl Talk CDNIS",
          name: "Summer-Sophie Guenot",
          image: "/image/chapterpresidents/Audrey.png",
          reason: "Creating a supportive community for young women.",
          contact: "summerguenot2026@cdnis.edu.hk",
        },
      ],
    },
    {
      country: "China",
      presidents: [
        {
          school: "Girl Talk CIS",
          name: "Lilly Larard",
          image: "/image/chapterpresidents/Audrey.png",
          reason: "Creating a supportive community for young women.",
          contact: "lillyl2027@student.cis.edu.hk",
        },
        {
          school: "Girl Talk CIS",
          name: "Kaitlyn Liu",
          image: "/image/chapterpresidents/Audrey.png",
          reason: "Creating a supportive community for young women.",
          contact: "kaitlynl227@student.cis.edu.hk",
        },
        {
          school: "Girl Talk CIS",
          name: "Monique Siu",
          image: "/image/chapterpresidents/Audrey.png",
          reason: "Creating a supportive community for young women.",
          contact: "moniques2027@student.cis.edu.hk",
        },
      ],
    },
    {
      country: "Korea",
      presidents: [
        {
          school: "Girl Talk YISS",
          name: "Michelle Ko",
          image: "/image/chapterpresidents/Amelie.jpg",
          reason: "Empowering girls to speak out and make a difference.",
          contact: "25.michelle.ko@yisseoul.org",
        },
        {
          school: "Girl Talk YISS",
          name: "Brooke Lai",
          image: "/image/chapterpresidents/Amelie.jpg",
          reason: "Empowering girls to speak out and make a difference.",
          contact: "26.brooke.lai@yisseoul.org",
        },
        {
          school: "Girl Talk YISS",
          name: "Kaiden Holst",
          image: "/image/chapterpresidents/Amelie.jpg",
          reason: "Empowering girls to speak out and make a difference.",
          contact: "26.kaiden.holst@yisseoul.org",
        },
      ],
    },
    {
      country: "Canada",
      presidents: [
        {
          school: "Girl Talk Toronto",
          name: "Maisha Mahbub",
          image: "/image/chapterpresidents/Amelie.jpg",
          reason: "Empowering girls to speak out and make a difference.",
          contact: "maishamahbub11@gmail.com",
        },
        {
          school: "Girl Talk Toronto",
          name: "Mahi Gohel",
          image: "/image/chapterpresidents/Amelie.jpg",
          reason: "Empowering girls to speak out and make a difference.",
          contact: "mahigohel20@gmail.com",
        },
      ],
    },
    {
      country: "United States",
      presidents: [
        {
          school: "Girl Talk Phoenix",
          name: "Saanvi Kantala",
          image: "/image/chapterpresidents/Amelie.jpg",
          reason: "Empowering girls to speak out and make a difference.",
          contact: "saanvkantala@gmail.com",
        },
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
              <h1 className="text-center drop-shadow-glow text-5xl sm:text-7xl lg:text-9xl text-white font-Motley leading-snug">
                CHAPTER PRESIDENTS
              </h1>
            </div>
          </div>

          {chapterPresidents.map((chapter, index) => (
            <div key={index}>
              <div className="w-full size-auto mt-10 bg-white pb-5 pt-5 mb-20">
                <div className="text-center align-middle text-4xl sm:text-5xl lg:text-7xl text-pink-400 font-Boruna">
                  {chapter.country}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 px-5">
                {chapter.presidents.map((president, index) => (
                  <div
                    key={index}
                    className="col-span-1 border border-black p-4 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a6c1ee, #d4fc79, #96e6a1, #84fab0, #8fd3f4, #a6c1ee, #fbc2eb, #fad0c4, #ff9a9e)",
                      backgroundSize: "150% 150%",
                    }}
                  >
                    <div className="flex flex-col md:flex-row items-center bg-white p-4 rounded-lg shadow-md h-full">
                      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                        <img
                          src={president.image}
                          alt={`${president.name}'s image`}
                          className="h-20 w-20 sm:h-24 sm:w-24 lg:h-28 lg:w-28 object-cover rounded-full border border-black"
                        />
                      </div>
                      <div className="text-center md:text-left flex flex-col justify-between">
                        <p className="font-bold text-md sm:text-lg text-pink-400 lg:text-xl">
                          {president.name}
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                          {president.school}
                        </p>
                        <p className="mt-3 text-xs sm:text-sm lg:text-base text-gray-900">
                          {president.reason}
                        </p>
                        <p className="mt-3 text-xs sm:text-sm lg:text-base text-gray-700">
                          Contact:{" "}
                          <a
                            href={`mailto:${president.contact}`}
                            className="text-blue-500 hover:underline"
                          >
                            {president.contact}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="pb-20"></div>
      </div>
     
      <Footer />
    </>
  );
};

export default OurAdvocates;
