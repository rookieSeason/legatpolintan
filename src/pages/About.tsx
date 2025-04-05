import avatar from "../assets/avatar.jpg";

const aboutText = {
  heading:
    "I’m Lester, <br /> I live in the Philippines, <br /> where I ensure software quality.",
  paragraph1:
    "A passionate tech enthusiast with a background in web development and a growing interest in QA engineering. I started my journey as a junior web developer, where I worked on building web applications, optimizing databases, and ensuring seamless API integrations. Along the way, I discovered my love for testing, debugging, and preventing bugs before they happen.",
  paragraph2: `Currently, I’m focused on transitioning into automation testing, leveraging my coding skills to enhance software quality and streamline testing processes. I enjoy identifying potential issues, creating efficient test strategies, and continuously learning about new tools and methodologies in the QA field.`,
};
const AboutMe: React.FC = () => {
  return (
    <section className="flex flex-col bg-white dark:bg-[#18181b] min-h-screen justify-center items-center w-screen p-4">
      <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-20">
        {/* Image Section */}
        <div className="flex pt-12 justify-center items-center order-1 md:order-2 md:pt-12">
          <img
            src={avatar}
            alt="Profile"
            className="rounded-xl w-60 h-60 sm:w-68 sm:h-68 md:w-96 md:h-96 shadow-lg rotate-6"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left order-2 md:order-1 md:pt-12">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-teal-600 dark:text-teal-500"
            dangerouslySetInnerHTML={{ __html: aboutText.heading }}
          />

          <p className="text-gray-500 dark:text-gray-400 py-4 text-md">
            {aboutText.paragraph1}
          </p>

          <p className="text-gray-500 dark:text-gray-400 py-2 text-md">
            {aboutText.paragraph2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
