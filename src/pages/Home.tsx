import avatar from "../assets/avatar.jpg";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const socialIcons = [
  { icon: <FaLinkedin />, key: "linkedin" },
  { icon: <FaGithub />, key: "github" },
  { icon: <BsTwitterX />, key: "twitter" },
  { icon: <FaFacebook />, key: "facebook" },
];

const description = `I’m Lester, a former web developer turned QA enthusiast. With a keen
            eye for bugs and a passion for software quality, I specialize in
            manual and automation testing. I also explore UI/UX and graphic
            design, blending creativity with precision. Let’s connect!`;
const Home: React.FC = () => {
  const handleDownload = () => {
    // Path to your resume PDF file
    const resumeUrl = "../../public/LEG-Resume.pdf";

    // Create an anchor element to trigger the download
    const a = document.createElement("a");
    a.href = resumeUrl;
    a.download = "LEG-Resume.pdf"; // Name of the downloaded file
    a.click(); // Trigger the download
  };
  return (
    <section className="flex flex-col bg-white dark:bg-[#18181b] min-h-screen justify-center items-center w-screen scroll-smooth p-4">
      <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20">
        {/* Text Section */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-500">
            Aspiring QA Engineer
          </h1>
          <p className="text-gray-500 dark:text-gray-400 py-4 text-md">
            {description}
          </p>
          {/* Social Icons & Button */}
          <div className="flex justify-center md:justify-start items-center mt-2 gap-4">
            <div className="flex text-xl gap-4">
              {socialIcons.map(({ icon, key }) => (
                <span
                  key={key}
                  className="text-gray-500 dark:text-gray-400 hover:text-teal-600"
                >
                  {icon}
                </span>
              ))}
            </div>
            <button
              className="px-3 py-2 bg-teal-600 text-slate-100 rounded-full hover:bg-teal-700"
              onClick={handleDownload}
            >
              Download CV
            </button>
          </div>
        </div>
        {/* Avatar Section */}
        <div className="flex justify-center items-center">
          <img
            src={avatar}
            alt="Avatar"
            className="rounded-full w-50 h-50 sm:w-58 sm:h-58 md:w-70 md:h-70"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
