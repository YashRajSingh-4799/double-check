import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 w-[50%]">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:p-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          "Discover your Domain at Unbeatable Prices"
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400">
          Double Check compares the domain price on markets 
          So that you can get your domain at Unbeatable price.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
