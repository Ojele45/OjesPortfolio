import { FaGithub, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Contact = () => {
  return (
    <section className="bg-[#0f0f11] text-white px-6 md:px-20 py-20" id="contact">
      <div className="text-center mb-10">
        <button className="px-4 py-1 text-sm bg-gray-800 rounded-full mb-4 cursor-default">
          Contact
        </button>
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-400 mt-2">
          I’d love to hear from you! Feel free to reach out via any of the platforms below.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="text-center">
          <MdEmail className="text-3xl mx-auto mb-2 text-blue-400" />
          <p className="text-sm">oojehomon72@gmail.com</p>
        </div>

        <div className="text-center">
          <MdPhone className="text-3xl mx-auto mb-2 text-green-400" />
          <p className="text-sm">+234 705 488 2147</p>
        </div>

        <div className="flex gap-6 text-2xl mt-6 md:mt-0">
          <a
            href="https://github.com/your-github-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/your-twitter-handle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://wa.me/2347054882147"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-300"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
