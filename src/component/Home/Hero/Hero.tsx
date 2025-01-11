import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";


import childImage from "../../../../public/assets/childImagecover.png";

const Hero = () => {
  return (
    <div className="relative w-full h-[110vh] sm:h-screen bg-[url('/assets/Bg.png')  ]  bg-center flex justify-center flex-col">
      <div className="w-[90%] md:w-[80%] mx-auto items-center grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* text content  */}

        <div>
  {/* subheading */}
  <h2 className="text-2xl font-medium text-[#749B3F] bg-[rgba(116, 155, 63, 0.1)] mt-6 inline-block py-1 w-[266px] h-[32px] rounded-tl-[8px] rounded-br-[8px]">
    Welcome to Fresh Harvest
  </h2>

  {/* heading */}
  <h1 className="text-4xl font-bold mt-6">
    Fresh Fruits and Vegetables
  </h1>

  <p className="mt-4">
    At Fresh Harvest, we are passionate about providing you with the freshest and most flavorful fruits and vegetables.
  </p>

  <Button className="mt-6 px-6 py-3 bg-[#FF6A1A] text-white font-semibold rounded-lg hover:bg-[#5d7c2e] transition duration-300 ease-in-out">
    Shop Now
  </Button>
</div>

        {/* Image content */}
        <div className="mx-auto hidden xl:block">

            <Image src={childImage} alt="Fruits" width={500} height={500} />


        </div>
      </div>
    </div>
  );
};

export default Hero;
