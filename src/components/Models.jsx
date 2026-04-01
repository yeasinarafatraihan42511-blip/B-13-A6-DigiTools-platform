import { use } from "react"
import ModelCard from "./ModelCard";


const Models = ({ modelsPromise }) => {
    const models = use(modelsPromise);
    
  

    return (
        <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
                <h1 className=" text-2xl font-bold text-black ">Premium Digital Tools</h1>
                <p className="text-gray-400">Choose from our curated collection of premium digital products designed  <br /> to boost your productivity and creativity.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8 px-15">
                {models.map((model) => (
              <ModelCard key={model.id} model={model} />
                ))}
            </div>
        </div>
    );
};

export default Models;