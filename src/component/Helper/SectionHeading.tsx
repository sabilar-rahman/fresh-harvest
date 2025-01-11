import React from 'react';
type Props = {
    heading:string
    subheading:string
};
const SectionHeading = ({heading,subheading}:Props) => {
  return (

    <div className='flex flex-col justify-center items-center'>
        <p className='border-2 px-4 text-[#749B3F] w-fit rounded-full bg-[#749B3F1A] py-1 font-bold'>{subheading}</p>
        <h1 className='text-4xl font-bold mt-6'>{heading}</h1>
    </div>
    
  );
};

export default SectionHeading;