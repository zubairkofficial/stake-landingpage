import React, { useEffect, useRef, useState } from "react";
import bloombergLogo from "../../assets/images/bloomberg.png";
import techcrunchLogo from "../../assets/images/tc.png";
import arabNewsLogo from "../../assets/images/arab.png";
import timeLogo from "../../assets/images/time.png";
import forbesLogo from "../../assets/images/forbesline.png";
import cnnLogo from "../../assets/images/cnnline.png";

const Featured = () => {
  const carouselRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  // Array of featured logos
  const logos = [
    { src: bloombergLogo, alt: "Bloomberg" },
    { src: techcrunchLogo, alt: "TechCrunch" },
    { src: arabNewsLogo, alt: "Arab News" },
    { src: timeLogo, alt: "TIME" },
    { src: forbesLogo, alt: "Forbes" },
    { src: cnnLogo, alt: "CNN" },
  ];

  // Duplicate logos for seamless infinite scroll
  const allLogos = [...logos, ...logos, ...logos];

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationId;
    let position = 0;

    const moveCarousel = () => {
      if (!carousel) return;

      // Slower speed by default (0.2), and even slower when hovering (0.05)
      const speed = isHovering ? 0.05 : 0.1;
      position -= speed;

      // Reset position when first set of logos moves out of view
      if (position <= -100) {
        position = 0;
      }

      carousel.style.transform = `translateX(${position}%)`;
      animationId = requestAnimationFrame(moveCarousel);
    };

    animationId = requestAnimationFrame(moveCarousel);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [isHovering]);

  return (
    <div className="py-12 bg-[#F6F7F9]">
      <div
        className="mx-auto px-4 mb-6"
        style={{ width: "1000px", maxWidth: "100%" }}
      >
        <h3 className="text-center text-[#A3AAB9] text-[16px] font-light mb-12">
          We've been featured in
        </h3>

        <div
          className="overflow-hidden relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Gradient overlay on both sides */}
          <div className="absolute top-0 left-0 w-60 h-full bg-gradient-to-r from-[#F6F7F9] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-60 h-full bg-gradient-to-l from-[#F6F7F9] to-transparent z-10"></div>

          {/* Carousel container */}
          <div
            className="flex items-center whitespace-nowrap transition-transform"
            ref={carouselRef}
            style={{
              transition: isHovering ? "transform 1s ease-out" : "none",
            }}
          >
            {allLogos.map((logo, index) => (
              <div
                key={index}
                className="inline-block mx-5 lg:mx-5 cursor-pointer"
                style={{
                  minWidth: logo.alt === "Bloomberg" ? "160px" : "130px",
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`object-contain max-w-full transition-all duration-300 ${
                    logo.alt === "Bloomberg" ? " lg:h-38" : "h-10 lg:h-12"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
