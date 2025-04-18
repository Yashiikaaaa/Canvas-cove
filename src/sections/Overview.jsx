import React from 'react';
import image from '../assets/gallery/gallery_9.png';
import Button from '../components/button/buttonMain';

// Overview Component
export const Overview = ({ contactmodal, setContactModal }) => {
  return (
    <div className="bg-PrestigeGrey">
      <section
        className="w-full flex flex-wrap items-center justify-center gap-[20px] mx-auto pb-10 md:py-16 px-5 md:px-[7.5rem]"
        id="Overview"
      >
        {/* Overview Text Section */}
        <div className="flex flex-col justify-center items-center text-center gap-8 h-full md:items-start md:text-left">
          <h1 className="font-subheading font-normal text-3xl md:text-5xl text-black uppercase">
            Overview
          </h1>
          <p className="max-w-2xl md:text-base text-sm text-black font-body font-light">
          <span className="font-body font-bold text-xs md:text-lg ">
          Experience upscale living at Canvas & Cove, a thoughtfully planned 17-acre township overlooking a serene 137-acre lake in Begur, just off Hosur Road.
          </span>
          <br />
          
            <span>
            <p>With 85% open space, the community is designed for wellness and leisure, featuring expansive greenery, landscaped gardens, a modern clubhouse, and a scenic lakefront park.  </p>
            <br />
            <p>-Structure G + 28</p><p>-Possession 2027</p>
            <br />
           <p> An ideal blend of nature, design, and location — perfect for families and future-focused investors.</p>

            

</span>
          </p>

          {/* Enquire Now Button using the reusable Button component */}
          <Button
                text="Enquire Now!"
                className=""
                onClick={() => setContactModal(!contactmodal)} // Toggle contact modal on button click
              />
          
        </div>

        {/* Image and Download Button Section */}
        <div className="hidden md:flex flex-col items-center">
          {/* Image Section */}
          <div className="w-full h-auto flex justify-center border-PrestigeDarkGrey">
            <img
              src={image}
              alt="Assetz Canvs & Cove"
              className=" w-[420px] h-[300px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
