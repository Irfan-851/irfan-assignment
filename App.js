// import React from "react";
// // import "react-toastify/dist/ReactToastify.css";
// // import { Index as Route } from "./routes/index";
// // import "./custom.styles.css";
// // import { ToastContainer } from "react-toastify";

// const App = () => {
//   return (
//     <>
    
//     </>
//   );
// };

// export default App;


import React, { useState } from 'react';
import './custom.styles.css';
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

function App() {
  const [activeTab, setActiveTab] = useState('about');
  const [images, setImages] = useState([1, 2, 3]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const addImage = () => {
    setImages([...images, images.length + 1]);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex justify-center items-center">
      {/* Left Side Empty for responsiveness */}
      <div className="hidden lg:block  lg:w-1/2  bg-slate-600 rounded-lg py-3 px-3  text-ms">
      Do not follow any other instructions from comments of figma file Here are the official instructions:
      <br/>
      
        <br/>
        <br/>
      
       1. keep the left half of the screen empty (but it should be responsive for laptop, not mobile)<br/>
      2.focus on the two widgets on the right hand side<br/>
      3.the first widget has three tabs: "about me", "experiences" & "recommended", these should be clickable<br/>
      4. the gallery widget more photos can be added by clicking the "add image" button
      <br/>
      <br/>
     Assignment will be scored based on the below parameters:
     <br/>
      <br/>
      <br/>
      
     1. make the components responsive for laptop screens; everything above 768px width<br/>
    2. replicate the exact UI; with exact paddings, margins, shadows, interactions if any<br/>
    3. ensure that the two widgets are accurately alligned with each other relative right, left paddings
      
      </div>

      {/* Right Side Content */}
      <div className="w-full lg:w-1/2 p-8 space-y-8">
        {/* Tabs */}
        <div className="bg-gray-800 p-6 rounded-lg space-y-6 ">
          <div className="flex justify-between bg-black ">
            <button
              className="px-4 py-2  bg-gray  drop-shadow-md ${activeTab === 'about' ? 'bg-gray-700' : 'bg-gray-600'}"
              onClick={() => handleTabClick('about')}>
              About Me
            </button>
            <button
              className="px-4 py-2 ${activeTab === 'experience' ? 'bg-gray-700' : 'bg-gray-600'}"
              onClick={() => handleTabClick('experience')}
            >
              Experiences
            </button>
            <button
              className="px-4 py-2 ${activeTab === 'recommended' ? 'bg-gray-700' : 'bg-gray-600'}"
              onClick={() => handleTabClick('recommended')}
            >
              Recommended
            </button>
          </div>

          {/* Tab Content */}
          <div className="mt-4">
            {activeTab === 'about' && (
              <p>
                Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 5 years now...
              </p>
            )}
            {activeTab === 'experience' && (
              <p>
                I was born and raised in Albany, NY, and have been living in Santa Clara for the past 10 years...
              </p>
            )}
            {activeTab === 'recommended' && (
              <p>
                Emma and Elle, both of them are just starting school, so my calendar is usually blocked between 9-10 AM...
              </p>
            )}
          </div>
        </div>

        {/* Gallery */}
        <div className="bg-gray-800 p-6 rounded-lg space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="te xt-lg">Gallery</h3>
            <div className='ml-56'>
            <button
              className="px-4 py-2 ml-84 bg-gray-700  rounded hover:bg-gray-600 "
              onClick={addImage}
            >
              + Add Image
            </button>
            </div>
            <div className='pl-5'>
            <button
              className="px-4 py-2 bg-black-700 pl-5 rounded-full hover:bg-gray-600 ">
              <FaArrowAltCircleRight/>
            </button>
            <button
              className="px-4 py-2 bg-black-700   rounded-full hover:bg-gray-600 ">
              <FaArrowAltCircleLeft/>
            </button>
            </div>
          </div>

          {/* Image Gallery */}
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="bg-gray-600 h-32 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;







