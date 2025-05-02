import { motion } from "framer-motion";

const PropertyCard = ({ property }) => {
  const { title, location, price, annualReturn, image, sold, investors } =
    property;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="bg-white rounded-xl overflow-hidden shadow-md"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-primary">
          {annualReturn} Annual ROI
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-3">{location}</p>

        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-primary font-bold">{price}</p>
          </div>

          <div className="bg-primary/10 rounded-lg px-3 py-2">
            <div className="flex items-center gap-1">
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full"
                  style={{ width: `${sold}%` }}
                ></div>
              </div>
              <span className="text-xs font-medium">{sold}%</span>
            </div>
            <p className="text-xs text-gray-500">{investors} investors</p>
          </div>
        </div>

        <motion.button
          className="w-full py-2 bg-gray-100 hover:bg-primary hover:text-white text-gray-800 rounded-lg transition-colors font-medium text-sm"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          View Details
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
