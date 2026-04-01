import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"
import Footer from "./components/Footer"
import Models from "./components/Models"
import Steps from "./components/Steps"
import Price from "./components/Price"
import Cta from "./components/Cta"
const getModels = async () => {
  const res = await fetch("/public/models.json")
  return res.json()
}
 const modelsPromise = getModels()
function App() {
 

  return (
    <>
    
     <Navbar/>
    <Banner/>
    <Stats/>
    <Models modelsPromise={modelsPromise}/>
    <Steps/>
    <Price/>
    <Cta/>
    <Footer/>
    
    



    </>
  )
}

export default App
