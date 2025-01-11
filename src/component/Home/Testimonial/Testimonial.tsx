/* eslint-disable react/no-unescaped-entities */
import SectionHeading from '@/component/Helper/SectionHeading';
import React from 'react';

const Testimonial = () => {
  return (
    <div className='container mx-auto'>
    <div className="flex flex-col justify-center items-center">
        <SectionHeading
          subheading="Testimonial"
          heading="What Our Customers Say"
        />
        <p>
        Don't just take our word for it—here's what some of our customers have to say about their experience with Fresh Harvest:
        </p>
      </div>
    </div>
  );
};

export default Testimonial;