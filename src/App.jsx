import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import AboutUs from "./pages/AboutUs/AboutUs"
import Contact from "./pages/Contact/Contact"
import Home from "./pages/Home/Home"
import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default App