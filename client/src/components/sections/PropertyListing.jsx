import { useState } from "react";
import { motion } from "framer-motion";
import PropertyCard from "../common/PropertyCard";

const PropertyListing = () => {
  const [filter, setFilter] = useState("all");

  const properties = [
    {
      id: 1,
      type: "residential",
      title: "The Palm Jumeirah Villa",
      location: "Palm Jumeirah, Dubai",
      price: "AED 3,500,000",
      annualReturn: "8.2%",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      sold: 85,
      investors: 412,
    },
    {
      id: 2,
      type: "commercial",
      title: "Downtown Office Space",
      location: "Downtown Dubai, UAE",
      price: "AED 5,200,000",
      annualReturn: "7.5%",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      sold: 62,
      investors: 284,
    },
    {
      id: 3,
      type: "residential",
      title: "Marina Penthouse",
      location: "Dubai Marina, UAE",
      price: "AED 2,800,000",
      annualReturn: "9.1%",
      image:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      sold: 94,
      investors: 527,
    },
    {
      id: 4,
      type: "commercial",
      title: "Business Bay Retail",
      location: "Business Bay, Dubai",
      price: "AED 4,100,000",
      annualReturn: "8.7%",
      image:
        "https://images.unsplash.com/photo-1604868189265-219e28717541?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      sold: 76,
      investors: 342,
    },
  ];

  const filteredProperties =
    filter === "all"
      ? properties
      : properties.filter((property) => property.type === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Properties
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our exclusive selection of prime real estate opportunities.
            Invest with confidence in properties vetted by our expert team.
          </p>
        </motion.div>

        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 p-1 rounded-full">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === "all"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter("all")}
            >
              All Properties
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === "residential"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter("residential")}
            >
              Residential
            </button>
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === "commercial"
                  ? "bg-primary text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setFilter("commercial")}
            >
              Commercial
            </button>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <button className="btn bg-primary hover:bg-primary/90 text-white rounded-full py-3 px-8 font-medium">
            View All Properties
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PropertyListing;
