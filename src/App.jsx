import About from "./components/About"
import ContactUs from "./components/ContactUs"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"
import Reviews from "./components/Reviews"
import Services from "./components/Services"

function App() {

  return (
    <div className="flex-1">
      <NavBar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Services />
        <About />
        <Reviews />
        <ContactUs />
      </div>
    </div>
  )
}

export default App
