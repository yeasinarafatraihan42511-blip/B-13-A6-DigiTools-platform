import React from 'react';

const Cta = () => {
    return (
        <div>
            <section className="py-20 text-center text-white bg-gradient-to-r from-purple-600 to-indigo-700">
                <h2 className="text-3xl font-bold mb-4">
                    Ready To Transform Your Workflow?
                </h2>

                <p className="mb-6 text-gray-200">
                    Join thousands of professionals who are already using DigiTools.
                </p>

                <div className="space-x-4">
                    <button className="bg-white text-purple-600 px-6 py-2 rounded-lg">
                        Explore Products
                    </button>
                    <button className="border border-white px-6 py-2 rounded-lg">
                        View Pricing
                    </button>
                </div>
            </section>
        </div>
    );
};

export default Cta;