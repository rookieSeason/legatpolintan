import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Project from "./pages/Project";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import { useEffect, useState, CSSProperties } from "react";
import { HashLoader } from "react-spinners";

function Layout() {
  const location = useLocation();

  // Determine if current route is 404

  const is404 = ![
    "/",
    "/about",
    "/skills",
    "/projects",
    "/experience",
    "/contact",
  ].includes(location.pathname);

  return (
    <>
      {!is404 && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      {!is404 && <Footer />}
    </>
  );
}
const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  const [loading, setLoading] = useState(true);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Detect dark mode preference
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setIsDark(darkQuery);

    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && (
        <div
          className={`fixed inset-0 flex justify-center items-center z-50 ${
            isDark ? "bg-[#18181b]" : "bg-white"
          }`}
        >
          <HashLoader
            color="#36d7b7"
            size={70}
            loading={loading}
            cssOverride={override}
          />
        </div>
      )}
      {!loading && (
        <Router>
          <Layout />
        </Router>
      )}
    </>
  );
}

export default App;
