import React from "react";

const Stats = () => {
  return (
    <section className="pb-20 pt-32 bg-[#F6F7F9] overflow-hidden relative">
      <div className="container mx-auto p-5 max-w-[1200px] text-center ">
        <p className="text-[#209476] font-medium mb-4">
          The global leader in digital real estate investing
        </p>

        <h2 className="text-[#121726] text-5xl md:text-5xl font-bold max-w-4xl mx-auto mb-20 leading-tight ">
          Diversify across different asset
          <br />
          types and countries
        </h2>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:px-14  ">
          <div className="flex flex-col items-center">
            <h3 className="text-[#121726] text-3xl md:text-4xl font-bold flex items-center">
              <span>1</span>
              <span className="text-[#6DCB93] font-bold">M+</span>
            </h3>
            <p className="text-gray-500 mt-2">Registered users</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#121726] text-3xl md:text-4xl font-bold flex items-center">
              <span>AED 909</span>
              <span className="text-[#6DCB93] font-bold">M+</span>
            </h3>
            <p className="text-gray-500 mt-2">Property transactions</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#121726] text-3xl md:text-4xl font-bold">
              209
            </h3>
            <p className="text-gray-500 mt-2">User nationalities</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-[#121726] text-3xl md:text-4xl font-bold flex items-center">
              <span>AED 32.2</span>
              <span className="text-[#6DCB93] font-bold">M+</span>
            </h3>
            <p className="text-gray-500 mt-2">Rental income paid</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
