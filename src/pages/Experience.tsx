type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  duration: string;
  description: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Junior Web Developer",
    company: "In1go Technologies Inc.",
    location: "Onsite / Philippines",
    duration: "Sept 2023 – Nov 2024",
    description: [
      "Designed and developed scalable web applications utilizing a microservices architecture, ensuring modularity, flexibility, and ease of maintenance across various services.",

      "Enhanced database performance by strategically optimizing SQL queries, reducing query execution time, and utilizing ORM frameworks to streamline database interactions and improve overall application efficiency.",

      "Developed responsive, user-friendly interfaces with React, Reactstrap, and JavaScript, ensuring seamless navigation and a positive user experience across multiple devices and screen sizes.",

      "Built robust RESTful APIs with Node.js and Express, following best practices for API design to enable efficient data exchange between the client and server, while ensuring scalability and security.",

      "Performed thorough testing on API endpoints, validating their functionality, reliability, and performance under various conditions to ensure smooth data integration and consistent user experiences.",
    ],
  },
  {
    role: "Capstone Project Developer",
    company: "Cavite State University - Bacoor Campus",
    location: "Bacoor, Cavite, Philippines",
    duration: "April 2022 – Dec 2022",
    description: [
      "Designed and developed an intuitive and user-friendly User Interface (UI), focusing on enhancing the user experience through clear navigation, visual appeal, and seamless interactions.",

      "Applied Object-Oriented Programming (OOP) principles to create scalable, maintainable, and efficient code using PHP, ensuring high-quality software architecture and development practices.",

      "Collaborated in the UI/UX design process, actively contributing ideas for improving the visual aesthetics and user journey, and implemented responsive layouts to ensure optimal usability across various devices and screen sizes.",

      "Conducted thorough user testing to identify pain points and gather actionable feedback, applying insights to continuously refine and improve the interface, ultimately enhancing user satisfaction and engagement.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-[#18181b] w-screen py-12 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-bold text-left text-teal-600 dark:text-teal-500 mb-6 pt-20">
          My Professional Journey
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10 sm:max-w-xl">
          From web development to quality assurance, I’ve gained hands-on
          experience across different roles in tech. Each opportunity has helped
          me grow, improve my skills, and discover where I thrive the most.
        </p>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-slate-100 dark:bg-zinc-800/90 rounded-3xl shadow-md p-6 sm:p-8 border-l-4 border-teal-600 hover:shadow-lg"
            >
              <div className="mb-2">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-600 dark:text-gray-300">
                  {exp.role}
                </h2>
                <p className="text-sm sm:text-base text-gray-500">
                  {exp.company} • {exp.location}
                </p>
                <p className="text-sm sm:text-base text-gray-500 italic">
                  {exp.duration}
                </p>
              </div>
              <ul className="list-disc list-inside text-gray-500 dark:text-gray-400 mt-4 space-y-2">
                {exp.description.map((point, idx) => (
                  <li key={idx} className="text-sm sm:text-base">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
