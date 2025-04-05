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
import Error from "./pages/Error";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

function Layout() {
  const location = useLocation();

  // Determine if current route is 404

  const is404 = ![
    "/",
    "/about",
    "/skills",
    "/projects",
    "/experience",
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
        <Route path="*" element={<Error />} />
      </Routes>
      {!is404 && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
