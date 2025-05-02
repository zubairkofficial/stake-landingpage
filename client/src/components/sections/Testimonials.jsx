import { useState, useRef } from "react";
import { motion } from "framer-motion";
import venus from "../../assets/images/venusimg.avif";
import david from "../../assets/images/davidimg.avif";
import dan from "../../assets/images/danimg.avif";
import venusvideo from "../../assets/images/venusinvster.mp4";
import davidvideo from "../../assets/images/davidinvter.mp4";
import danvideo from "../../assets/images/daninvester.mp4";

// Define our success stories data
const successStories = [
  {
    id: 1,
    name: "Venus",
    role: "Stake investor",
    avatarUrl: venus,
    videoUrl: venusvideo,
    quote:
      "I really enjoyed using the app! Being able to actually own a stake in a property with just a button, literally like you're shopping for a property, that's a really cool concept honestly",
  },
  {
    id: 2,
    name: "David",
    role: "Stake investor",
    avatarUrl: david,
    videoUrl: davidvideo,
    quote:
      "[You're] solving that problem of not necessarily having to explore too many different investment opportunities, while still having the opportunity to invest with a couple of clicks, into an asset that I'm really interested in",
  },
  {
    id: 3,
    name: "Dan",
    role: "Stake investor",
    avatarUrl: dan,
    videoUrl: danvideo,
    quote:
      "Liquidity in property is sometimes tough, but with the Stake exit windows it just makes life so much easier if you want to sell certain stakes – you just put them on the secondary market",
  },
];

const Testimonials = () => {
  const [activeStory, setActiveStory] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Reset video state when changing testimonials
  const handleChangeStory = (index) => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    setActiveStory(index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Header */}
        <div className="text-center mb-10">
          <h3 className="text-[#30D48C] text-lg font-medium mb-2">
            Success Stories
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold">
            Hear from our
            <br />
            global investors
          </h2>
        </div>

        {/* Investor selector with moving green line */}
        <div className="max-w-[1000px] mx-auto mb-16">
          {/* Green line indicator */}
          <div className="h-0.5 bg-[#EAEAEA] w-full relative mb-10">
            <motion.div
              className="h-0.5 bg-[#30D48C] w-[33.33%] absolute top-0"
              initial={{ left: `${activeStory * 33.33}%` }} // Correct interpolation syntax
              animate={{ left: `${activeStory * 33.33}%` }} // Correct interpolation syntax
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Investor buttons */}
          <div className="flex justify-between">
            {successStories.map((story, index) => (
              <button
                key={story.id}
                className={`flex items-center space-x-4 ${
                  activeStory === index ? "" : "opacity-80"
                }`}
                onClick={() => handleChangeStory(index)}
              >
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={story.avatarUrl}
                    alt={story.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-medium text-[#121726] sm:font-extralight">
                    {story.name}
                  </h3>
                  <p className="text-sm ">{story.role}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Testimonial content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[1000px] mx-auto">
          {/* Video section - Left side */}
          <div className=" rounded-xl overflow-hidden h-full w-full aspect-video relative">
            <video
              ref={videoRef}
              src={successStories[activeStory].videoUrl}
              className="w-full h-full object-cover"
              poster={successStories[activeStory].avatarUrl}
              preload="metadata"
            />

            {/* Play button overlay */}
            {!isPlaying && (
              <div
                className="absolute py-15 inset-0 flex items-center justify-center cursor-pointer"
                onClick={handlePlayVideo}
              >
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <svg
                    className="w-8 h-8 text-[#30D48C] ml-1"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            )}
          </div>

          {/* Quote section - Right side */}
          <div className="flex flex-col justify-between border border-[#EBECED] py-8 px-12 rounded-2xl">
            {/* Stake logo and testimonials text */}
            <div className="flex items-center mb-6 text-right">
              <span className="text-black text-[22px] font-semibold">
                sta<span className="text-[#30D48C]">k</span>e
              </span>
              <span className="ml-2 text-[#1A1C1E] text-[18px]">
                Testimonials
              </span>
            </div>

            {/* Quote start */}
            <div className="text-[#30D48C] mb-4">
              <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                <path
                  d="M12 0H0V12H12V28H24V12H12V0ZM36 0H24V12H36V28H48V12H36V0Z"
                  fill="#30D48C"
                />
              </svg>
            </div>

            {/* Quote text */}
            <blockquote className="text-[18px] leading-[27px] text-[#0C625E] font-semibold italic mb-8">
              "{successStories[activeStory].quote}"
            </blockquote>

            {/* Investor info and quote end */}
            <div className="mt-auto">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">
                  {successStories[activeStory].name}
                </h3>
                <div className="text-[#30D48C] opacity-20 rotate-180">
                  <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
                    <path
                      d="M12 0H0V12H12V28H24V12H12V0ZM36 0H24V12H36V28H48V12H36V0Z"
                      fill="#30D48C"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-gray-600 text-sm">
                {successStories[activeStory].role}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
