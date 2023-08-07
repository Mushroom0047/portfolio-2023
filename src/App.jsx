import { Banner } from "./Components/Banner/Banner"
import { FloatContact } from "./Components/Contacto/Contact floating/FloatContact"
import { Contact } from "./Components/Contacto/Contact"
import { Footer } from "./Components/Footer/Footer"
import NavbarMenu from "./Components/Navbar/NavbarMenu"
import Portfolio from "./Components/Portfolio/Portfolio"
import Knowledge from "./Components/BannerKnowledge/Knowledge"
import { Container } from "react-bootstrap"


function App() {
  
  return (
    <>      
      <NavbarMenu />
      <Container fluid="lg">    
        <Banner />
        <Knowledge />
        <Portfolio />
        <Contact />
      </Container>
      <Footer />     
      <FloatContact /> 
    </>
  )
}

export default App
