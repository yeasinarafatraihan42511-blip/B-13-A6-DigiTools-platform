import React from 'react';

const Price = () => {
    return (
        <div>
            <section className="py-16 ">
               <div className='text-center'>
                 <h2 className="text-3xl font-bold mb-4">Simple, Transparent Pricing</h2>
                <p className="text-gray-500 mb-10">
                    Choose the plan that fits your needs.
                </p>
               </div>

                <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">

                    <div className="p-6 border rounded-xl">
                        <h3 className="font-bold text-lg">Starter</h3>
                        <p className='text-gray-500'>Perfect for getting started</p>
                        <p className="text-3xl font-bold my-4">$0<span className="text-sm text-gray-500">/month</span></p>
                        <p className='text-gray-500'>1 project per month <br /> 2 Community support <br />3 Basic templates <br /> 4 Access to 10 free tools</p>
                        <button className="w-full rounded-3xl mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg">
                            Get Started Free
                        </button>
                    </div>

                    <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500 to-purple-700 text-white scale-105">
                        <h3 className="font-bold text-lg">Starter</h3>
                        <p className='text-white'>Perfect for getting started</p>
                        <p className="text-3xl font-bold my-4">$29<span className="text-sm text-white">/month</span></p>
                        <p className='text-white'>1 project per month <br /> 2 Community support <br />3 Basic templates <br /> 4 Access to 10 free tools</p>
                        <button className="mt-4 w-full rounded-3xl bg-white text-purple-600 px-4 py-2 rounded-lg">
                            Start Free Trial
                        </button>
                    </div>

                    <div className="p-6 border rounded-xl">
                         <h3 className="font-bold text-lg">Starter</h3>
                        <p className='text-gray-500'>Perfect for getting started</p>
                        <p className="text-3xl font-bold my-4">$99<span className="text-sm text-gray-500">/month</span></p>
                        <p className='text-gray-500'>1 project per month <br /> 2 Community support <br />3 Basic templates <br /> 4 Access to 10 free tools</p>
                        <button className="mt-4 w-full rounded-3xl bg-purple-600 text-white px-4 py-2 rounded-lg">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Price;