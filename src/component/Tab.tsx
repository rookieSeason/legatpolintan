import { useState } from "react";
import { FaReact, FaNodeJs, FaBootstrap, FaGitAlt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiSelenium,
  SiPostman,
  SiJira,
  SiCypress,
  SiAppium,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine } from "react-icons/ri";
import { VscVscode } from "react-icons/vsc";

const tabs = [
  {
    id: 1,
    label: "Web Development",
    content: [
      { icon: <FaReact />, label: "React" },
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiTailwindcss />, label: "Tailwind CSS" },
      { icon: <TbBrandTypescript />, label: "TypeScript" },
      { icon: <FaBootstrap />, label: "Bootstrap" },
      { icon: <RiJavascriptLine />, label: "JavaScript" },
    ],
  },
  {
    id: 2,
    label: "QA Automation",
    content: [
      { icon: <SiSelenium />, label: "Selenium" },
      { icon: <SiCypress />, label: "Cypress" },
      { icon: <SiAppium />, label: "Appium" },
      { icon: <SiPostman />, label: "Postman" },
    ],
  },
  {
    id: 3,
    label: "Tools",
    content: [
      { icon: <FaGitAlt />, label: "Git" },
      { icon: <SiJira />, label: "JIRA" },
      { icon: <VscVscode />, label: "VS Code" },
    ],
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="min-h-screen w-full bg-white dark:bg-[#18181b] flex flex-col items-center px-4">
      <div className="text-center pt-20 my-10 w-full max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-500">
          Technical Skills & Expertise
        </h1>
        <p className="text-base sm:text-md md:text-lg text-gray-600 dark:text-gray-400 mt-2">
          A collection of technologies and tools I have worked with, covering
          frontend and backend development, database management, and testing
          frameworks.
        </p>
      </div>
      <div className="w-full max-w-2xl p-4 rounded-xl bg-white border border-solid border-gray-300 dark:bg-zinc-800 dark:border-none">
        <div className="flex border-b border-gray-300 overflow-x-auto no-scrollbar">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`p-2 text-sm md:text-base flex-1 text-center border-b-2 transition-all duration-300 whitespace-nowrap 
                ${
                  activeTab === tab.id
                    ? "border-teal-600 dark:border-teal-500 text-teal-600 dark:text-teal-500 font-semibold"
                    : "border-transparent text-gray-500 dark:text-gray-400"
                }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-4 bg-gray-100 dark:bg-[#18181b] rounded-xl mt-4 grid sm:grid-cols-3 gap-4 text-center">
          {tabs
            .find((tab) => tab.id === activeTab)
            ?.content.map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-lg text-gray-600 dark:text-gray-400 bg-white dark:bg-zinc-800/90 shadow-md flex flex-col items-center justify-center text-4xl"
              >
                {item.icon}
                <span className="text-sm mt-2">{item.label}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
