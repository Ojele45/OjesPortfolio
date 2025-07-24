const projects = [
  {
    title: "My Portfolio Website",
    description: "A responsive personal portfolio built with React and Tailwind CSS. It showcases my skills, projects, and contact info.",
    image: "/project1.png", // Place this image in your /public folder
    liveLink: "https://ojes-portfolio-i3lc.vercel.app/",
    githubLink: "https://github.com/Ojele45/OjesPortfolio.git",
  },
  {
    title: "Todo App",
    description: "A simple todo app built using React and localStorage. Allows users to add, delete, and mark tasks as completed.",
    image: "/project2.png",
    liveLink: "https://your-todo-app.vercel.app",
    githubLink: "https://github.com/your-username/todo-app",
  },
];

const Projects = () => {
  return (
    <section className="bg-[#1f2937] text-white px-6 md:px-20 py-20" id="projects">
     <main className="max-w-[1440px] mx-auto">
       <div className="text-center mb-12">
        <button className="px-4 py-1 text-sm bg-[#4b5563] rounded-full mb-4 cursor-default">
          Projects
        </button>
        <h2 className="text-3xl font-bold">Some of the projects I’ve built:</h2>
      </div>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1d] p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="rounded-lg w-full h-48 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            <div className="flex gap-4 text-sm">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
     </main>
    </section>
  );
};

export default Projects;
