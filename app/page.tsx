import Header from "@/components/header";
import clipArt from "../assets/clipart.jpg"
import Image from "next/image";
import Info from "@/components/info";
import Description from "@/components/description";
import Languages from "@/components/languages";
import Experience from "@/components/experience.js"
import Aboutme from "@/components/aboutme.js"
import Projects from "@/components/projects.js"
import Contact from "@/components/contact.js"
import Ending from "@/components/ending.js"
import Footer from "@/components/footer.js"
import ContactCard from "@/components/contactcard";
import linkedin from '../assets/linkedin.png'
import facebook from '../assets/Facebook.png'
import instagram from '../assets/instagram.png'
import github from '../assets/github.png'

export default function Home() {
  return (
    <div>
      <Header/>
      <main className="w-screen pt-[60px] md:pt-[80px] gap-[15px] flex gap-[60px] flex-col justify-center items-center justify-center">
          <div className=" mx-auto w-9/10 gap-[30px] flex flex-col p-[15px] md:px-[50px] md:flex-row-reverse md:w-3/4" > 
            <Image src={ clipArt } alt="clip art image" width={ 600 }/> 
            <div className="flex flex-col gap-[50px] justify-center">
              <Info/>
              <Description/>
              <div className="flex flex-row gap-[30px]">
                <ContactCard contactimg={ linkedin } contactlink={ `https://www.linkedin.com/in/maglasang-chip-collins-100466369/` }/>
                <ContactCard contactimg={ facebook } contactlink={ `https://www.facebook.com/Chip.Collins.M/` }/>
                <ContactCard contactimg={ instagram } contactlink={ `https://www.instagram.com/chip.maglasang/` }/>
                <ContactCard contactimg={ github } contactlink={ `https://github.com/Kolenss` }/>
              </div>
            </div>
          </div>
          <section id="skills"><Languages/></section>
          <Experience/>
          <section id="about"><Aboutme/></section>
          <section id="projects" className="md:w-full"><Projects/></section>
          <section id="contact">
            <div className="md:flex md:flex-row">
              <Contact/>
              <Ending/>
            </div>
          </section>
          
          <Footer/>
      </main>
    </div>
  );
}
