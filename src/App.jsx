import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Stats from "./components/Stats"
import Footer from "./components/Footer"
import Models from "./components/Models"
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
    <Footer/>
    
    



    </>
  )
}

export default App
