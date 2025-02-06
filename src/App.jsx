import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"
import EducationalQ from "./Component/EducationalQ/EducationalQ"
import Experience from "./Component/Experience/Experience"
import FooTer from "./Component/Footer/FooTer"
import Header from "./Component/Header/Header"
import NavBar from "./Component/Navbar/NavBar"
import Portfolio from "./Component/Porfolio/Portfolio"
import Services from "./Component/Services/Services"
import Testimonials from "./Component/Testimonials/Testimonials"

function App() {

  return (
    <div className="m-0 p-0 border-0 outline-0 list-none box-content">
      <Header></Header>
      <NavBar></NavBar>
      <About></About>
      <Experience></Experience>
      <Services></Services>
      <Portfolio></Portfolio>
      <EducationalQ></EducationalQ>
      <Testimonials></Testimonials>
      <Contact></Contact>
      <FooTer></FooTer>
    </div>
  )
}

export default App
