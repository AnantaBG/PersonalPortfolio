import About from "./Component/About/About"
import Contact from "./Component/Contact/Contact"
import EducationalQ from "./Component/EducationalQ/EducationalQ"
import Experience from "./Component/Experience/Experience"
import FooTer from "./Component/Footer/FooTer"
import Header from "./Component/Header/Header"
import NavBar from "./Component/Navbar/NavBar"
import Portfolio from "./Component/Porfolio/Portfolio"

function App() {

  return (
    <div className="m-0 p-0 border-0 outline-0 list-none box-content">
      <Header></Header>
      <NavBar></NavBar>
      <About></About>
      <Experience></Experience>
      <EducationalQ></EducationalQ>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <FooTer></FooTer>
    </div>
  )
}

export default App
