import { Banner } from "./Components/Banner/Banner"
import { Contact } from "./Components/Contact/Contact"
import { Footer } from "./Components/Footer/Footer"
import NavbarMenu from "./Components/Navbar/NavbarMenu"
import Portfolio from "./Components/Portfolio/Portfolio"


function App() {
  
  return (
    <>
      <NavbarMenu />
      <Banner />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App
