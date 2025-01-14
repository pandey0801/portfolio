import NavBar from "./components/NavBar";
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Contanct from "./components/Contanct";
import Skill from "./components/Skill"
import Testimonial from "./components/Testimonial";
import Achievements from "./components/Achievements";



function App() {
  return (
  <>
  <NavBar></NavBar> 
  <Home></Home>
  <About/>
  <Experience/>
<Testimonial/>
<Achievements/>
  <Skill/>
  <Contanct/>
  <SocialLinks></SocialLinks>

  </>
  );
}
 
export default App;
