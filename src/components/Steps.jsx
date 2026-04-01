import React from 'react';
import Package from "../assets/products/package.png"
import User from "../assets/products/user.png" 
import Rocket  from "../assets/products/rocket.png"


const Steps = () => {
    return (
        <div>
            <section className="py-16 bg-gray-50 text-center">
                <h2 className="text-3xl font-bold ">Get Started In 3 Steps</h2>
                <p className='text-gray-400 py-6'>Start using premium digital tools in minutes, not hours.</p>

                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">

                    <div className="bg-white p-6 rounded-xl shadow">
                        <div className='flex justify-end '>
                            <button className=" bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition">
                            01
                        </button>
                        </div>
                       <div className="flex justify-center items-center mb-4">
                            <img src={User} alt="User" />
                        </div>
                        <h3 className="font-bold text-lg">Create Account</h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Sign up for free in seconds. No credit card required.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                         <button className=" flex justify-start items-start bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition">
                            01
                        </button>
                         <div className="flex justify-center items-center mb-4">
                            <img src={Package} alt="Package" />
                        </div>
                        <h3 className="font-bold text-lg">Choose Products</h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Browse our catalog and select tools that fit your needs.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow">
                         <button className=" flex justify-start items-start bg-purple-600 text-white py-2 px-4 rounded-full hover:bg-purple-700 transition">
                            01
                        </button>
                        <div className="flex justify-center items-center mb-4">
                            <img src={Rocket} alt="Rocket" />
                        </div>
                        <h3 className="font-bold text-lg">Start Creating</h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Download and start using your premium tools instantly.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Steps;