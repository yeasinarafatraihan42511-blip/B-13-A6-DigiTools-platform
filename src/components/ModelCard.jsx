import React from 'react';
import { useState } from 'react';
import { toast } from 'react-toastify';

const tagColor = {
"Best Seller": "bg-green-200",
"Popular": "bg-purple-100",
"New": "bg-yellow-300",
}

const ModelCard = ({ model, carts, setCarts }) => {
     const [isSubscribed, setIsSubscribed] = useState(false);

     const handleBuyNow = () => {
        
        setIsSubscribed(true);

        const isFound = carts.find(item =>item.id === model.id)
        if (!isFound) {
            setCarts([...carts, model]);
            toast.success("Model added to cart!");
        } else {
            toast.error("Model is already in the cart!");
        }
     }
    
        
    return (
        <div key={model.id} className="border border-gray-300 rounded-lg p-6 grid grid-cols-1">
            <div className="flex justify-between  gap-2">
                <div>{model.icon}</div>
                <div className={` ${tagColor[model.tag] || 'bg-gray-500'} btn btn-outline btn-primary rounded-3xl`}>{model.tag}</div>
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