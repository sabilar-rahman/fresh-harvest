/* eslint-disable @typescript-eslint/no-explicit-any */
import SectionHeading from "@/component/Helper/SectionHeading";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const getProduct = async () => {
  const response = await fetch(
    "https://api-fresh-harvest.code-commando.com/api/v1/products"
  );
  const result = await response.json();
  return result; // Inspecting the result structure
};

const OurProducts = async () => {
  const response = await getProduct();
  //   console.log(response); // Log the response to confirm structure

  // Extract products from the response
  //   const products = response?.data || []; // Default to an empty array if `data` is missing

  const products = response?.data.slice(0, 8) || []; // Limit to 8 products

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col justify-center items-center">
        <SectionHeading
          subheading="Our Products"
          heading="Our Fresh Products"
        />
        <p>
          We pride ourselves on offering a wide variety of fresh and flavorful
          <br /> fruits, vegetables, and salad ingredients.
        </p>
      </div>
      {/* Our Product cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <div
            key={product.id}
            className="w-full h-[340px] border rounded-xl p-2 shadow hover:shadow-lg transition"
          >
            <div className="bg-gray-100  rounded-xl mb-2">
              <Image
                src={product.images[0]} // Assuming images array is not empty
                alt={product.productName}
                width={258}
                height={208}
                className="w-full h-52 object-cover rounded-xl"
              />
            </div>
            <h3 className="text-lg text-center font-semibold">
              {product.productName}
            </h3>
            <p className="text-sm text-center  font-semibold text-gray-500 mb-2">
              ${product.price}/kg
            </p>
            <Button className="border  w-full rounded-xl hover:bg-orange-600 hover:text-white transition ">
              Add to Cart
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;

