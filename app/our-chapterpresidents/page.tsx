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
          name: "Amelie",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Amelie is a Y12 student at KGV who’s favourite song is Iris by the Goo Goo Dolls. A strange fact about her is that despite being extremely clumsy and dropping things all the time, she has the talent of not breaking things. She wants to join Girl Talk because she loves wholesome girl moments and wants to build a chapter within our school that will serve as an inclusive and empowering community amongst girls.",
          contact: "https://www.instagram.com/girltalkkgv/",
          insta: "girltalkkgv"
        },
        {
          school: "Girl Talk KGV",
          name: "Audrey",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Audrey is a Y12 student at KGV who’s favourite artist is Coldplay. A strange fact about her is that she finds insects cool. She wants to join Girl Talk to form a tight knit community within her school that can help empower younger girls and provoke a sense of belonging.",
          contact: "https://www.instagram.com/girltalkkgv/",
          insta: "girltalkkgv"
        },
        {
          school: "Girl Talk Sha Tin College",
          name: "Isabelle",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Isabelle is a strong advocate for social justice and gender equality. She believes in the power of education and community to bring about change.",
          contact: "https://www.instagram.com/girltalk_stc/",
          insta: "girltalkshatin"
        },
        {
          school: "Girl Talk Sha Tin College",
          name: "Christa",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Christa is committed to creating a supportive environment for all girls, where they can freely express themselves and learn from one another.",
          contact: "https://www.instagram.com/girltalk_stc/",
          insta: "girltalkshatin"
        },
        {
          school: "Girl Talk CDNIS",
          name: "Chloe",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Chloe is enthusiastic about promoting gender equality and providing resources for young women to succeed. She believes in the power of collective effort.",
          contact: "https://www.instagram.com/girltalkcdnis/",
          insta: "girltalkcdnis"
        },
        {
          school: "Girl Talk CDNIS",
          name: "Summer-Sophie",
          image: "/image/chapterpresidents/profile.jpg",
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
          name: "Lilly",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Lilly is committed to creating a supportive environment for all girls, encouraging them to pursue their passions and stand up for what they believe in.",
          contact: "https://www.instagram.com/girltalkcishz/",
          insta: "girltalkcishz"
        },
        {
          school: "Girl Talk CISHZ",
          name: "Kaitlyn",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Kaitlyn is passionate about fostering a community where girls can support and uplift one another. She is always looking for ways to make a difference.",
          contact: "https://www.instagram.com/girltalkcishz/",
          insta: "girltalkcishz"
        },
        {
          school: "Girl Talk CISHZ",
          name: "Monique",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Monique is driven by a desire to see all girls succeed. She works hard to create opportunities for young women to learn, grow, and thrive.",
          contact: "https://www.instagram.com/girltalkcishz/",
          insta: "girltalkcishz"
        },
        {
          school: "Girl Talk Shanghai",
          name: "Sophia",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Sophia has an extensive list of favorite movies, but if she were to give her top 3 it would probably consist of Juno, Pitch Perfect, and Booksmart. Outside of Girl Talk, she plays rugby and football, and does costuming for her school’s theater productions. She joined Girl Talk because she felt her school was missing a student-led safe space for girls. She's really looking forward to this year with Girl Talk!",
          contact: "https://www.instagram.com/g1rltalk.shanghai/",
          insta: "g1rltalk.shanghai"
        },
        {
          school: "Girl Talk Shanghai",
          name: "Caridee",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "From the debate podium to the karaoke booth, Caridee enjoys using her voice. In her free time, Caridee enjoys making puns, taekwondo, and feeding stray cats. She joined Girl Talk because she believes that mentorship through sisterhood is one of the most powerful bonds people can share, and wants to bring more sincerity to the feminist discourse on campus. ",
          contact: "https://www.instagram.com/g1rltalk.shanghai/",
          insta: "g1rltalk.shanghai"
        },
        {
          school: "Girl Talk Beijing",
          name: "Angelina",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Angelina absolutely loves jazz and musicals! Laufey is her all-time favorite singer. She's also gone through her own struggles with an eating disorder. Now she's focusing on her passions—public speaking, feminism, and psychology. She really hopes to make a positive impact with them!",
        },
      ],
    },
    {
      country: "Korea",
      presidents: [
        {
          school: "Girl Talk YISS",
          name: "Michelle",
          image: "/image/chapterpresidents/Michelle.jpg",
          bio: "Michelle is a senior at YISS. You could probably find her baking, singing, or being with her friends. She wants to give a shoutout to Michelle Obama for being her much more girlboss and impressive name twin. She's super excited to be a chapter lead for Girl Talk and hopes to represent its cause as well as possible!",
          contact: "https://www.instagram.com/girltalkseoul/",
          insta: "girltalkseoul"
        },
        {
          school: "Girl Talk YISS",
          name: "Brooke",
          image: "/image/chapterpresidents/Brooke.jpg",
          bio: "Brooke is a junior at YISS. She is passionate about history, theater, art/design, and social justice. In her free time, you can find her listening to Frank Ocean, re-watching 2000s chick flicks, trying new restaurants on @byhleats, or in a bookstore. She can't wait to continue Girl Talk's impact in Korea!",
          contact: "https://www.instagram.com/girltalkseoul/",
          insta: "girltalkseoul"
        },
        {
          school: "Girl Talk YISS",
          name: "Kaiden",
          image: "/image/chapterpresidents/Kaiden.jpg",
          bio: "Kaiden is a junior at YISS. She is passionate about social justice, the humanities, and the environment. You can probably find her doing NYT word games, playing with her dog, or spending time with friends. She is so excited to be a chapter lead for Girl Talk, and can't wait to further its impact in Seoul!",
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
          name: "Mahi",
          image: "/image/chapterpresidents/profile.jpg",
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
          name: "Saanvi",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Saanvi is focused on building a strong community of girls who support each other and work together to achieve their goals.",
          contact: "https://www.instagram.com/girltalk_phoenix/",
           insta: "girltalk_pheonix"
        },
        {
          school: "Girl Talk Miami",
          name: "Sam",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Sam's favorite song is 'Pink Pony Club' by Chappell Roan and her favorite book right now is The Seven Husbands of Evelyn Hugo. A fun fact about her is that she's obsessed with putting every single movie she sees into her Letterboxd account and the reason she joined Girl Talk was because creating a tight-knit community that can educate each other through our their lived experiences is something important to her.",
          contact: "https://www.instagram.com/girltalkmiami_305/",
           insta: "girltalkmiami_305"
        },
        {
          school: "Girl Talk Miami",
          name: "Andrea",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Andrea's favorite song is 'Guess' by Charli XCX and her favorite book is Romeo and Juliet. A fun fact about her is that she doesn't get the appeal of Pinterest and the reason she joined Girl Talk was to help the next generation of women find their voice in society.",
          contact: "https://www.instagram.com/girltalkmiami_305/",
           insta: "girltalkmiami_305"
        },
        {
          school: "Girl Talk Miami",
          name: "Elizabeth",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Elizabeth's favorite song is 'Don't Know Why' by Norah Jones and her favorite book is Pride and Prejudice, a fun fact about her is that she doesn't like marshmallows and the reason she joined Girl Talk was because she loves talking to the girls around her in her community and finding the importance in education through communication.",
          contact: "https://www.instagram.com/girltalkmiami_305/",
           insta: "girltalkmiami_305"
        },
      ],
    },
    {
      country: "Indonesia",
      presidents: [
        {
          school: "Girl Talk Jakarta",
          name: "Stella",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Stella's favorite movie is currently Spiderman: Across the Spider-Verse. A weird fact about her is she only has one pair of shoes, and they are colored bright neon yellow. The reason she chose to join Girl Talk is because she believes that girls should be able to be educated and feel confident about themselves, and she strives to provide that opportunity to girls in her area.",
          contact: "https://www.instagram.com/girltalk_jakarta/",
          insta: "girltalk_jakarta"
        },
        {
          school: "Girl Talk Jakarta",
          name: "Eileen",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Eileen's all time favorite show is Modern Family. A weird fact about her is that she's allergic to the sun… and the reason why she joined Girl Talk is because she really wants to create a supportive space for girls to ask and share their experiences.",
          contact: "https://www.instagram.com/girltalk_jakarta/",
          insta: "girltalk_jakarta"
        },
        {
          school: "Girl Talk Jakarta",
          name: "Gyumin (Erin)",
          image: "/image/chapterpresidents/profile.jpg",
          bio: "Erin's favorite book right now is a memoir called “This is going to hurt” by Adam Kay. A weird fact about her is that she loves pineapple on pizza, and the reason she joined Girl Talk is because she's really interested in promoting equal opportunities for girls in education.",
          contact: "https://www.instagram.com/girltalk_jakarta/",
          insta: "girltalk_jakarta"
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
