import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsCircleFill } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#0f0f11] text-white ">
      
      <section className=" min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 max-w-[1440px] mx-auto ">
        {/* Left Side */}
      <div className="max-w-[60%] space-y-6 ">
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m Ojehomon <span className="inline-block animate-wave">👋</span>
        </h1>

        <p className="text-gray-400 leading-relaxed">
          I’m a frontend developer with a focus on creating (and occasionally designing) digital experiences that are fast, accessible, and visually appealing. I love building clean, functional interfaces and bringing ideas to life on the web.
        </p>

        {/* Location and availability */}
        <div className="flex flex-col gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <HiOutlineLocationMarker className="text-lg" />
            <span>Lagos, Nigeria</span>
          </div>
          <div className="flex items-center gap-2">
            <BsCircleFill className="text-green-400 text-[10px]" />
            <span>Available for new projects</span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex gap-5 text-2xl mt-4">
          <a href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="relative mt-10 md:mt-0 md:ml-12 w-fit mx-5">
         {/* Gray shadow layer */}
        <div className="absolute -bottom-4 -right-4 w-full h-full bg-gray-700 z-0" />
  
         {/* Profile image */}
        <img
            src="/your-photo.jpg"
            alt="Ojehomon Ojeomogha"
            className="relative z-10  shadow-lg object-cover max-w-[250px]"
        />
    </div>

      </section>
    </section>
  );
};

export default Hero;
