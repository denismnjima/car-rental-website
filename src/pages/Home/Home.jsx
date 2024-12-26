import About from "../../components/About/About"
import Header from "../../components/Header/Header"
import Hero from "../../components/Hero/Hero"
import ServicesCard from "../../components/ServicesCard/ServicesCard"
import './Home.css'

function Home() {
  return (
    <>
     <Header/>
     <Hero/>
     <About/>

     {/* services */}
     <div className="services-ctainery">
      <h2>Explore our wide range of rental services.</h2>
      <div className="services">
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
      </div>

      <p>Discover our range of cars rental services to meet all your travel needs.</p>
     </div>
    </>
  )
}

export default Home