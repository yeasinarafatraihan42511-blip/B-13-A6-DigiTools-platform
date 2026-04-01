import React from 'react';
import { useState } from 'react';


const ModelCard = ({ model, carts, setCarts }) => {
     const [isSubscribed, setIsSubscribed] = useState(false);

     const handleBuyNow = () => {
        
        setIsSubscribed(true);
        setCarts([...carts, model]);
     }
    
        
    return (
        <div key={model.id} className="border border-gray-300 rounded-lg p-6 grid grid-cols-1">
            <div className="flex justify-between  gap-2">
                <div>{model.icon}</div>
                <div className="btn btn-outline btn-primary rounded-3xl">{model.tag}</div>
            </div>
            <div className="text-2xl font-bold ">{model.name}</div>
            <div className="text-gray-600">{model.description}</div>
            <div className="flex gap-0.5">
                <div className="font-bold text-2xl">${model.price.toFixed(2)}</div>
                <div className="text-gray-500">{model.period}</div>
            </div>
            <div className="text-gray-600">
                {model.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                        <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                    </div>
                ))}
            </div>
            <button onClick={() => handleBuyNow()} className="btn btn-primary text-white py-3">{isSubscribed ? "Purchased" : "Buy Now"}</button>




        </div>
    );
};

export default ModelCard;