import { Fade } from "react-awesome-reveal"
import { Banner } from "./Components/Banner/Banner"
import { FloatContact } from "./Components/Contact floating/FloatContact"
import { Contact } from "./Components/Contact/Contact"
import { Footer } from "./Components/Footer/Footer"
import NavbarMenu from "./Components/Navbar/NavbarMenu"
import Portfolio from "./Components/Portfolio/Portfolio"


function App() {
  
  return (
    <>      
      <NavbarMenu />
      <Banner />
      <Fade triggerOnce direction="up">
      <Portfolio />
      </Fade>
      <Contact />
      <Footer />     
      <FloatContact /> 
    </>
  )
}

export default App
