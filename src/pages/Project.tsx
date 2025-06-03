import { useState } from "react";
import bacoorLogo from "../assets/bacoor-logo.png";
import { FaLink } from "react-icons/fa6";
import { DiLaravel } from "react-icons/di";
import { SiSelenium, SiCypress } from "react-icons/si";
import { Link } from "react-router-dom";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"All" | "Web App" | "Automation">(
    "All"
  );

  const projects = [
    {
      title: "E2E Testing for E-Commerce Website",
      icon: <SiCypress className="text-4xl text-gray-600 dark:text-gray-300" />,
      description:
        "This project automates the End-to-End (E2E) testing of the login and add-to-cart features using Cypress. It simulates the user journey by validating authentication processes, testing error handling for invalid inputs, and ensuring the correct flow for both successful login and item addition to the cart.",
      link: "https://github.com/rookieSeason/login-automation-cypress.git",
      tech: ["Cypress", "JavaScript", "Test Cases Design"],
      type: "Automation",
    },
    {
      title: "Functional Testing for Login Feature",
      icon: <SiSelenium className="text-4xl text-green-500 rounded-full" />,
      description:
        "An automated login test using Selenium to verify successful login with valid credentials and ensure redirection to the next page.",
      link: "https://github.com/rookieSeason/login-automation-selenium.git",
      tech: [
        "Selenium WebDriver",
        "Miscrosoft Edge Driver",
        "Test Cases Design",
      ],
      type: "Automation",
    },
    {
      title: "Students System Laravel",
      icon: <DiLaravel className="text-4xl text-center text-red-700" />,
      description:
        "This project is a simple web-based application to manage a list of students. It allows users to add, view, edit, and delete student records through basic operations. ",
      link: "https://github.com/rookieSeason/laravel_practice.git",
      tech: ["Laravel", "MySQL", "Tailwind CSS", "Alpine JS"],
      type: "Web App",
    },
    {
      title: "Online Relocation Management Information System",
      image: bacoorLogo,
      description:
        "A capstone project for families in informal settlements who need to relocate and are required to submit the necessary documents to proceed.",
      link: "https://github.com/rookieSeason/Online-Relocation-MIS.git",
      tech: ["PHP", "MySQL", "Bootstrap", "ApexChart"],
      type: "Web App",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.type === activeTab);

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
        {/* Tabs */}
        <div className="w-full flex justify-center mb-8">
          <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:justify-center sm:gap-4">
            <button
              className={`px-2 py-1 text-xs rounded-full font-semibold sm:px-4 sm:py-2 sm:text-base ${
                activeTab === "All"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("All")}
            >
              All
            </button>
            <button
              className={`px-2 py-1 text-xs rounded-full font-semibold sm:px-4 sm:py-2 sm:text-base ${
                activeTab === "Web App"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("Web App")}
            >
              Web Application
            </button>
            <button
              className={`px-2 py-1 text-xs rounded-full font-semibold sm:px-4 sm:py-2 sm:text-base ${
                activeTab === "Automation"
                  ? "bg-teal-600 text-white"
                  : "bg-gray-200 dark:bg-zinc-700 text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setActiveTab("Automation")}
            >
              Automation Testing
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredProjects.map((project, index) => (
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
// ...existing code...
