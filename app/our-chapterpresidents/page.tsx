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
          bio: "Amelie is a Y12 student at KGV who’s favourite song is Iris by the Goo Goo Dolls. A strange fact about her is that despite being extremely clumsy and dropping things all the time, she has the talent of not breaking things. She wants to join Girl Talk because she loves wholesome girl moments and wants to build a chapter within our school that will serve as an inclusive and empowering community amongst girls.",
          contact: "https://www.instagram.com/girltalkkgv/",
          insta: "girltalkkgv"
        },
        {
          school: "Girl Talk KGV",
          name: "Audrey Lee",
          image: "/image/chapterpresidents/Audrey.png",
          bio: "Audrey is a Y12 student at KGV who’s favourite artist is Coldplay. A strange fact about her is that she finds insects cool. She wants to join Girl Talk to form a tight knit community within her school that can help empower younger girls and provoke a sense of belonging.",
          contact: "https://www.instagram.com/girltalkkgv/",
          insta: "girltalkkgv"
        },
        {
          school: "Girl Talk Sha Tin College",
          name: "Isabelle Mak",
          image: "/image/chapterpresidents/Audrey.png",
          bio: "Isabelle is a strong advocate for social justice and gender equality. She believes in the power of education and community to bring about change.",
          contact: "https://www.instagram.com/girltalk_stc/",
          insta: "girltalkshatin"
        },
        {
          school: "Girl Talk Sha Tin College",
          name: "Christa Chen",
          image: "/image/chapterpresidents/Audrey.png",
          bio: "Christa is committed to creating a supportive environment for all girls, where they can freely express themselves and learn from one another.",
          contact: "https://www.instagram.com/girltalk_stc/",
          insta: "girltalkshatin"
        },
        {
          school: "Girl Talk CDNIS",
          name: "Chloe Chan",
          image: "/image/chapterpresidents/Audrey.png",
          bio: "Chloe is enthusiastic about promoting gender equality and providing resources for young women to succeed. She believes in the power of collective effort.",
          contact: "https://www.instagram.com/girltalkcdnis/",
          insta: "girltalkcdnis"
        },
        {
          school: "Girl Talk CDNIS",
          name: "Summer-Sophie Guenot",
          image: "/image/chapterpresidents/Audrey.png",
          bio: "Summer-Sophie is passionate about empowering young women through education and community involvement. She is dedicated to making a positive impact.",
          contact: "https://www.instagram.com/girltalkcdnis/",
          insta: "girltalkcdnis"
        },
      ],
    },
    {
      country: "China",
      presidents: [
        {
          school: "Girl Talk CISHZ",
          name: "Lilly Larard",
          image: "/image/chapterpresidents/Audrey.png",
          bio: "Lilly is committed to creating a supportive environment for all girls, encouraging them to pursue their passions and stand up for what they believe in.",
          contact: "https://www.instagram.com/girltalkcishz/",
          insta: "girltalkcishz"
        },
        {
          school: "Girl Talk CISHZ",
          name: "Kaitlyn Liu",
          image: "/image/chapterpresidents/Audrey.png",
          bio: "Kaitlyn is passionate about fostering a community where girls can support and uplift one another. She is always looking for ways to make a difference.",
          contact: "https://www.instagram.com/girltalkcishz/",
          insta: "girltalkcishz"
        },
        {
          school: "Girl Talk CISHZ",
          name: "Monique Siu",
          image: "/image/chapterpresidents/Audrey.png",
          bio: "Monique is driven by a desire to see all girls succeed. She works hard to create opportunities for young women to learn, grow, and thrive.",
          contact: "https://www.instagram.com/girltalkcishz/",
          insta: "girltalkcishz"
        },
      ],
    },
    {
      country: "Korea",
      presidents: [
        {
          school: "Girl Talk YISS",
          name: "Michelle Ko",
          image: "/image/chapterpresidents/Michelle.jpg",
          bio: "Michelle Ko is a senior at YISS. You could probably find her baking, singing, or being with her friends. She wants to give a shoutout to Michelle Obama for being her much more girlboss and impressive name twin. She's super excited to be a chapter lead for Girl Talk and hopes to represent its cause as well as possible!",
          contact: "https://www.instagram.com/girltalkseoul/",
          insta: "girltalkseoul"
        },
        {
          school: "Girl Talk YISS",
          name: "Brooke Lai",
          image: "/image/chapterpresidents/Brooke.jpg",
          bio: "Brooke Lai is a junior at YISS. She is passionate about history, theater, art/design, and social justice. In her free time, you can find her listening to Frank Ocean, re-watching 2000s chick flicks, trying new restaurants on @byhleats, or in a bookstore. She can't wait to continue Girl Talk's impact in Korea!",
          contact: "https://www.instagram.com/girltalkseoul/",
          insta: "girltalkseoul"
        },
        {
          school: "Girl Talk YISS",
          name: "Kaiden Holst",
          image: "/image/chapterpresidents/Kaiden.jpg",
          bio: "Kaiden Holst is a junior at YISS. She is passionate about social justice, the humanities, and the environment. You can probably find her doing NYT word games, playing with her dog, or spending time with friends. She is so excited to be a chapter lead for Girl Talk, and can't wait to further its impact in Seoul!",
          contact: "https://www.instagram.com/girltalkseoul/",
          insta: "girltalkseoul"
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
          bio: "Maisha is dedicated to empowering girls through education and community service. She believes in the power of collective action to bring about change.",
          contact: "https://www.instagram.com/g1rltalktoronto/",
           insta: "g1rltalktoronto"
        },
        {
          school: "Girl Talk Toronto",
          name: "Mahi Gohel",
          image: "/image/chapterpresidents/Amelie.jpg",
          bio: "Mahi is passionate about creating a supportive environment for young women to thrive. She is committed to promoting equality and justice.",
          contact: "https://www.instagram.com/g1rltalktoronto/",
           insta: "g1rltalktoronto"
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
          bio: "Saanvi is focused on building a strong community of girls who support each other and work together to achieve their goals.",
          contact: "https://www.instagram.com/girltalk_phoenix/",
           insta: "girltalk_pheonix"
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

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 lg:grid-cols-2 xl:grid-cols-2">
                {chapter.presidents.map((president, index) => (
                  <div
                    key={index}
                    className="col-span-1 border border-black p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
                    style={{
                      background:
                        "linear-gradient(135deg, #ff9a9e, #fad0c4, #fad0c4, #fbc2eb, #a6c1ee, #d4fc79, #96e6a1, #84fab0, #8fd3f4, #a6c1ee, #fbc2eb, #fad0c4, #ff9a9e)",
                      backgroundSize: "150% 150%",
                    }}
                  >
                    <div className="flex flex-col md:flex-row items-center font-Futura bg-gradient-radial from-yellow-400 via-orange-400 to-pink-400 p-5 rounded-lg shadow-md h-full">
                      <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                        <img
                          src={president.image}
                          alt={`${president.name}'s image`}
                          className="h-24 w-24 sm:h-28 sm:w-28 lg:h-32 lg:w-32 object-cover rounded-lg border border-black"
                        />
                      </div>
                      <div className="text-center md:text-left flex flex-col justify-between space-y-2 lg:space-y-4">
                        <p className="font-Motley text-lg sm:text-2xl text-black lg:text-3xl">
                          {president.name.toUpperCase()}
                        </p>
                        <p className="text-sm sm:text-md lg:text-lg text-gray-700">
                          {president.school}
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-900">
                          {president.bio}
                        </p>
                        <p className="text-xs sm:text-sm lg:text-base text-gray-700">
                          Contact:{" "}
                          <a
                            href={president.contact}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            @{president.insta}
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
