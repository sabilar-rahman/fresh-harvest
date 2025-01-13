import Image from "next/image";
import React from "react";
import aboutUsThumb from "../../../../public/assets/aboutUsThumb.png";
import { Button } from "@/components/ui/button";

const AboutUS = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side Image */}
        <div className="flex justify-center items-center">
          <Image
            src={aboutUsThumb}
            alt="Fruits"
            width={686}
            height={570}
            className="rounded-lg"
          />
        </div>

        {/* Right side About Us text */}
        <div className="flex flex-col justify-center">
          {/* Subheading */}
          <h1 className="border-2 px-4 text-[#749B3F] w-fit rounded-full bg-[#749B3F1A] py-1 font-bold">
            About Us
          </h1>

          {/* Heading */}
          <h2 className="text-4xl font-bold mt-6">About Fresh Harvest</h2>

          {/* Paragraph */}
          <p className="mt-4 text-lg text-justify leading-relaxed">
            Welcome to Fresh Harvest, your premier destination for high-quality
            and fresh produce. We are passionate about providing you with the
            finest fruits, vegetables, and salad ingredients to nourish your
            body and delight your taste buds. With a commitment to excellence,
            sustainability, and customer satisfaction, Fresh Harvest is here to
            revolutionize your grocery shopping experience.
          </p>

          <Button variant={"outline"} className="mt-6 text-[#FF6A1A]  border border-[#FF6A1A] w-fit rounded-xl hover:bg-[#FF6A1A] hover:text-white transition duration-300 ease-in-out">
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
