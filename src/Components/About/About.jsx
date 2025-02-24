

import { BsInstagram } from "react-icons/bs"
import { GrLinkedinOption } from "react-icons/gr"
import { FaGithub } from "react-icons/fa"
import pic from "../../assets/pictures/AboutPagePic.jpeg"

const socialLinks = [
  { href: "https://www.instagram.com/vikasgulia17?igsh=bXFoMXNrMnM2dXdq", Icon: BsInstagram, label: "Instagram" },
  { href: "https://www.linkedin.com/in/vikas-gulia-b28255298", Icon: GrLinkedinOption, label: "LinkedIn" },
  { href: "https://github.com/VIKASGULIA17", Icon: FaGithub, label: "GitHub" },
]
  
const About = () => {
  return (
    <section id="About" className="w-full bg-[#212527] md:px-8 lg:px-16 lg:py-20 md:py-6 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center lg:items-start bg-slate-900/100 text-zinc-50 pb-5">
        <AboutContent />
        <AboutImage />
      </div>
    </section>
  )
}

const AboutContent = () => (
  <div className="flex flex-col lg:w-1/2 lg:pl-16 lg:pr-10 lg:pt-16 lg:pb-20 p-4 text-center lg:text-start">
    <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold pb-4 hd:text-[120px]">About Me</h1>
    <h4 className="text-xl md:text-2xl lg:text-3xl font-semibold pb-6 hd:text-[65px] hd:font-[500] hd:py-[40px]">
      My name is Vikas Gulia
    </h4>
    <p className="text-base md:text-lg lg:text-xl font-medium pb-6 text-justify md:px-10 lg:px-0 px-40 hd:text-[35px] hd:leading-[40px] hd:pt-10 hd:pb-10">
      I am a dedicated programmer with a passion for coding and problem-solving, aspiring to become a data scientist. My
      commitment to continuous learning drives me to deliver efficient, data-driven solutions. As an adaptable team
      player, I thrive in collaborative environments, consistently meeting and exceeding project goals.
    </p>
    <SocialLinks />
    <AboutButton />
  </div>
)

const SocialLinks = () => (
  <div className="flex space-x-4 lg:text-2xl lg:content-start lg:justify-start pb-6 justify-center content-center text-lg">
    {socialLinks.map(({ href, Icon, label }) => (
      <a key={label} href={href} className="hover:text-gray-300 border-2 border-white p-2 rounded-full bg-transparent">
        <Icon aria-label={label} />
      </a>
    ))}
  </div>
)

const AboutButton = () => (
  <button className="bg-[#E6C7EB] border-2 border-[#E6C7EB] font-extralight w-32 h-10 mt-6 text-lg text-black hover:bg-slate-900/100 hover:text-[#E6C7EB] duration-300 mx-60 md:mx-72 lg:mx-0 hd:w-48 hd:h-16 hd:text-3xl hd:mt-20 overflow-hidden">
    About Me
  </button>
)

const AboutImage = () => (
  <div className="w-full lg:w-[50vw]">
    <img
      src={pic || "/placeholder.svg"}
      alt="Vikas Gulia"
      width={500}
      height={500}
      className="w-[95%] h-[70vh] mx-1 border-4 border-white object-cover lg:py-10 lg:border-none lg:h-[90vh] lg:pr-0 xl:border-none xl:py-20 xl:px-10 2xl:py-10 2xl:border-none 2xl:h-full 2xl:px-10 md:h-[50rem] md:w-[60%] md:mx-36 md:object-cover xl:rounded-[60px] hd:rounded-[100px] rounded-3xl xl:h-[50%] hd:h-[60vh]"
    />
  </div>
)

export default About

