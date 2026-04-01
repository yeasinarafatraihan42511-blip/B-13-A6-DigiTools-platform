import { use } from "react"


const Models = ({ modelsPromise }) => {
    const models = use(modelsPromise)
  

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
                <h1 className=" text-2xl font-bold text-black ">Premium Digital Tools</h1>
                <p className="text-gray-400">Choose from our curated collection of premium digital products designed  <br /> to boost your productivity and creativity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-15">
                {models.map((model) => (
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
                        <button  className="btn btn-primary text-white py-3">Buy now</button>




                    </div>
                ))}
            </div>
        </div>
    );
};

export default Models;