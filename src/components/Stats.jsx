import React from 'react';

const Stats = () => {
    return (
     <div className='w-full bg-blue-700 flex gap-4'>
           <div className="stats shadow flex gap-2 w-1200 mx-auto">
            <div className="stat place-items-center">
                
                <div className=" font-bold text-white stat-value">50K+</div>
                <div className="stat-desc text-white">Active Users</div>
            </div>

            <div className="stat place-items-center">
                <div className=" font-bold text-white stat-value">200+</div>
                <div className="stat-desc text-white">Premium Tools</div>
            </div>

            <div className="stat place-items-center">
                <div className=" font-bold text-white stat-value">4.9</div>
                <div className="stat-desc text-white">Rating</div>
            </div>
        </div>
     </div>
    );
};

export default Stats;