const About = () => {
  return (
    <section className="min-h-screen bg-[#1f2937] text-white">
        <section id="about" className="max-w-[1440px] mx-auto  px-6 md:px-20 py-16 flex flex-col md:flex-row items-center justify-between gap-12 ">
      
      {/* Left: Image */}
      <div className="relative w-full md:w-1/2 max-w-[350px]">
  {/* Shadow layer behind the image */}
  <div className="absolute -bottom-6 -left-6 w-full h-full bg-gray-700 z-0" />

  {/* Actual image */}
  <img
    src="/your-photo.jpg"
    alt="Ojehomon Ojeomogha"
    className="relative z-10  shadow-xl w-full object-cover"
  />
</div>

      {/* Right: Text */}
      <div className="w-full md:w-1/2">
        <button className="px-4 py- mx-auto text-sm bg-[#4b5563] rounded-full mb-4 cursor-default">
          About me
        </button>
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Curious about me? Here you have it:
        </h2>
        <div className="text-gray-300 space-y-4 leading-relaxed text-sm md:text-base">
          <p>
            I'm a frontend developer passionate about building seamless and visually engaging digital products using modern technologies like React. I care deeply about user experience, design consistency, and clean, performant code.
          </p>
          <p>
            My journey into tech has been driven by curiosity and a desire to create. I've spent time learning the fundamentals and continue to explore new tools and best practices as I grow. I focus on translating ideas into responsive, intuitive web interfaces.
          </p>
          <p>
            I enjoy working on meaningful projects that make an impact — from idea to execution. Whether I'm designing UI layouts, connecting APIs, or improving performance, I thrive on solving problems and delivering value through code.
          </p>
          <p>
            When I'm not coding, I enjoy exploring design trends, learning from other developers online, and sharpening my skills with personal projects.
          </p>
        </div>
      </div>
    </section>
    </section>
  );
};

export default About;
