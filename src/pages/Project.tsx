import bacoorLogo from "../assets/bacoor-logo.png";
import { FaLink } from "react-icons/fa6";
import { DiLaravel } from "react-icons/di";
import { SiSelenium } from "react-icons/si";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Login Test Automation using Selenium JavaScript",
      icon: <SiSelenium className="text-4xl text-green-500 rounded-full" />,
      description:
        "A login test automation using Selenium to login a valid credentials and to check if it login successfully and redirected to the next page or not",
      link: "https://github.com/rookieSeason/login-automation-selenium.git",
      tech: [
        "Selenium WebDriver",
        "Miscrosoft Edge Driver",
        "Test Cases Design",
      ],
    },
    {
      title: "Students System Laravel",
      icon: <DiLaravel className="text-4xl text-red-700" />,
      description:
        "This project is a simple web-based application to manage a list of students. It allows users to add, view, edit, and delete student records through basic operations. ",
      link: "https://github.com/rookieSeason/laravel_practice.git",
      tech: ["Laravel", "MySQL", "Tailwind CSS", "Alpine JS"],
    },
    {
      title: "Online Relocation Management System",
      image: bacoorLogo,
      description:
        "A capstone project for informal settler families that needs to relocate and must submit necessary requirements to move forward.",
      link: "https://github.com/rookieSeason/Online-Relocation-MIS.git",
      tech: ["PHP", "MySQL", "Bootstrap", "ApexChart"],
    },
  ];

  return (
    <div className="bg-white dark:bg-[#18181b] p-6 min-h-screen w-screen">
      <div className="max-w-6xl mx-auto pt-20">
        <div className="text-left mb-6">
          <h1 className="text-4xl max-w-md sm:text-5xl sm:max-w-lg text-teal-600 dark:text-teal-500 font-bold mb-2">
            Things I’ve made trying to put my dent in the industry.
          </h1>
          <h2 className="text-md max-w-xl text-gray-500 dark:text-gray-400 py-4">
            I’ve worked on little projects over the years but these are the ones
            that I’m most proud of. They are open-source, so if you see
            something that piques your interest, check out the code and
            contribute if you have ideas for how it can be improved.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {projects.map((project, index) => (
            <Link
              to={project.link}
              key={index}
              className="bg-white dark:bg-[#18181b] hover:bg-slate-100 dark:hover:bg-zinc-800/90 p-4 hover:rounded-3xl text-gray-500 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-500"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt=""
                  className="w-13 h-13 rounded-full bg-slate-50 border border-solid border-gray-300 dark:border-none dark:bg-zinc-800/90 p-2"
                />
              ) : (
                <div className="text-gray-500 dark:text-gray-400 w-13 h-13 rounded-full border border-solid border-gray-300 dark:border-none bg-slate-50 dark:bg-zinc-800/90 p-2">
                  {project.icon}
                </div>
              )}
              <h2 className="text-xl text-gray-700 dark:text-gray-200 font-semibold pt-10 px-2">
                {project.title}
              </h2>
              <p className="text-gray-500 text-md dark:text-gray-400 pt-4 max-w-md px-2">
                {project.description}
              </p>
              {project.tech && (
                <div className="flex flex-wrap gap-2 mt-4 px-2">
                  {project.tech.map((item, i) => (
                    <span
                      key={i}
                      className="bg-gray-100 dark:bg-zinc-700 text-gray-800 dark:text-gray-300 text-xs font-medium px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
              <div className="pt-4">
                {" "}
                <p className="text-sm font-bold px-2">
                  <FaLink className="inline-block me-2" />
                  github.com
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
