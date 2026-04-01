import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"
import Footer from "./components/Footer"
import Models from "./components/Models"
import Steps from "./components/Steps"
import Price from "./components/Price"
import Cta from "./components/Cta"
import Cart from "./components/Cart"
import { useState } from "react"
const getModels = async () => {
  const res = await fetch("/public/models.json")
  return res.json()
}
const modelsPromise = getModels()
function App() {
  const [activeTab, setActiveTab] = useState("model");
  const [carts, setCarts] = useState([]);
 
  


  return (
    <>

      <Navbar />
      <Banner />
      <Stats />
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center mt-10">
        <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full" onClick={() => setActiveTab("model")} aria-label="Products" defaultChecked />
        <input type="radio" name="my_tabs_1" className="tab w-40 rounded-full" onClick={() => setActiveTab("cart")} aria-label="Cart" />
        
      </div>
    {activeTab === "model"  ? <Models modelsPromise={modelsPromise} carts={carts} setCarts={setCarts} /> : null}
    {activeTab === "cart"  ? <Cart  carts={carts}/> : null}
      <Steps />
      <Price />
      <Cta />
      <Footer />





    </>
  )
}

export default App
