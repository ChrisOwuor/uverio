import { Routes, Route } from "react-router-dom";
import About from "../../pages/About";
import Home from "../../pages/Home";
import Projects from "../../pages/Projects";
import Blog from "../../pages/Blog";
import NotFound from "../../pages/NotFound";
import SingleBlog from "../../pages/SingleBlog";


const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/:slug" element={<SingleBlog />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRouter;