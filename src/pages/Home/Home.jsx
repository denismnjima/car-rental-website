import About from "../../components/About/About"
import CarCollectionContainer from "../../components/CarCollectionContainer/CarCollectionContainer"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import SatisfactionSection from "../../components/SatisfactionSection/SatisfactionSection"
import ServicesCard from "../../components/ServicesCard/ServicesCard"
import './Home.css'

function Home() {
  return (
    <>
     <Header/>
     <Hero/>
     {/* car collection */}
     <CarCollectionContainer/>

     {/* satisfaction component */}
     <SatisfactionSection/>
     <About/>

     <Footer/>
    </>
  )
}

export default Home