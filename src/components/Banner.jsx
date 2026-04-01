import React from 'react';
import BannerPng from '../assets/products/banner.png';

const Banner = () => {
    return (
      <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={BannerPng} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
        <button className="btn bg-blue-400 rounded-3xl text-blue-800">New: AI-Powered Tools Available</button>
      <h1 className="text-5xl font-bold">Supercharge Your <br /> <span className="text-primary">Digital Workflow</span></h1>
      <p className="py-6">
        Access premium AI tools, design assets, templates, and productivity <br />
software—all in one place. Start creating faster <br />

Explore Products

      </p>
      <div className=' flex gap-7'>
        <button className="btn btn-primary rounded-3xl">Explore Products</button>
<button className="btn btn-outline btn-primary rounded-3xl">Watch Demo</button>
      </div>
    </div>
  </div>
</div>
    );
};

export default Banner;