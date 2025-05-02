import React from "react";

const reviews = [
  {
    name: "Muhammad Waqas Ahmad",
    text: "I've been investing in real estate with Stake for the past year now. These guys keep on improving month after month. I collect my monthly dividends every month and have invested in all types of properties. It's easy, accessible, and very transparent. Highly recommended.",
    rating: 5,
    icon: "apple",
  },
  {
    name: "Dakota Woods",
    text: "I started investing in Stake and the platform is very easy to understand and trade. Mohammed Burhan is very kind to answer all my queries with proper explaination thanks for making it comfortable.",
    rating: 5,
    icon: "google",
  },
  {
    name: "Mohammed Alkanderi",
    text: "Stake is the best, easiest, and most reliable platform for real estate investment, whether you are a high, medium, or small capital investor.",
    rating: 5,
    icon: "google",
  },
  {
    name: "Christopher Madtha",
    text: "One of the best real estate investing options available. Just start from AED 500. It's simple and equally rewarding with least amount of effort.",
    rating: 5,
    icon: "apple",
  },
  {
    name: "Muhammad Waqas Ahmad",
    text: "I've been investing in real estate with Stake for the past year now. These guys keep on improving month after month. I collect my monthly dividends every month and have invested in all types of properties. It's easy, accessible, and very transparent. Highly recommended.",
    rating: 5,
    icon: "apple",
  },
  {
    name: "Mohammed Alkanderi",
    text: "Stake is the best, easiest, and most reliable platform for real estate investment, whether you are a high, medium, or small capital investor.",
    rating: 5,
    icon: "google",
  },
];

const ReviewCarousel = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-3">
        <div className="overflow-hidden relative">
          <div className="flex animate-marquee">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="flex-none w-full max-w-md mx-1 p-5 bg-white rounded-xl shadow-sm border border-gray-100"
              >
                <div className="flex justify-between items-center mb-4">
                  <div className="flex">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-green-400"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {review.icon === "apple" ? (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="black">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path
                        d="M22.018 11.018c0-.821-.068-1.611-.203-2.368H12V12.3h5.638c-.242 1.316-.986 2.43-2.102 3.177v2.637h3.403c1.994-1.835 3.142-4.538 3.142-7.746"
                        fill="#4285F4"
                      />
                      <path
                        d="M12 22.5c2.84 0 5.223-.941 6.969-2.545l-3.403-2.637c-.943.633-2.151 1.007-3.542 1.007-2.723 0-5.033-1.84-5.857-4.312H2.66v2.722C4.409 20.135 7.952 22.5 12 22.5"
                        fill="#34A853"
                      />
                      <path
                        d="M6.167 13.984c-.21-.627-.328-1.298-.328-1.984s.118-1.357.328-1.984V7.296H2.66C1.92 8.68 1.5 10.296 1.5 12s.42 3.32 1.16 4.704l3.507-2.72"
                        fill="#FBBC05"
                      />
                      <path
                        d="M12 5.628c1.534 0 2.912.526 3.996 1.56l3.019-3.02C17.193 2.553 14.809 1.5 12 1.5c-4.048 0-7.591 2.365-9.34 5.796l3.507 2.721c.824-2.473 3.134-4.315 5.857-4.315"
                        fill="#EA4335"
                      />
                    </svg>
                  )}
                </div>

                <p className="text-gray-700 leading-relaxed mb-4">
                  {review.text}
                </p>
                <p className="font-medium">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewCarousel;
