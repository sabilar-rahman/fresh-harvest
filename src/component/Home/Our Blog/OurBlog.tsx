import SectionHeading from "@/component/Helper/SectionHeading";
import React from "react";

const OurBlog = () => {
  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col justify-center items-center">
        <SectionHeading subheading="Our Blog" heading="Fresh Harvest Blog" />
        <p>
          Welcome to the Fresh Harvest Blog, your go-to resource for all things
         <br /> related to fresh produce, healthy eating, and culinary inspiration.
        </p>
      </div>
    </div>
  );
};

export default OurBlog;
