import NavBar from "./components/NavBar";
import Home from "./components/Home"
import SocialLinks from "./components/SocialLinks";
import About from "./components/About";
import Experience from "./components/Experience";
import Contanct from "./components/Contanct";
import Skill from "./components/Skill"
import Testimonial from "./components/Testimonial";



function App() {
  return (
  <>
  {/* <h1 className="font-signature text-4xl font-bold">hello</h1> */}
  <NavBar></NavBar> 
  <Home></Home>
  <About/>
  <Experience/>
<Testimonial/>
  <Skill/>
  <Contanct/>
  <SocialLinks></SocialLinks>

  </>
  );
}
 
export default App;
