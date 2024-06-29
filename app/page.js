import Image from "next/image";
import Navbar from './Components/Navbar.js'
import Section1 from "./Components/Section1.js";
import Section2 from "./Components/Section2.js" ; 
import Section3 from "./Components/Section3.js"; 
import Section4 from "./Components/Section4.js"; 
import Section5 from "./Components/Section5.js"; 
import Footer from "./Components/Footer.js"
export default function Home() {
  return (
   <div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Footer/>
   </div>
  );
}
