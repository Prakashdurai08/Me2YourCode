import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import BackToTop from "./components/BackToTop";
import ScrollProgress from "./components/ScrollProgress";
import PageTransition from "./components/PageTransition";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollProgress />
      <Header />
      <PageTransition>
        <Routes>
          <Route path="/"               element={<Home />} />
          <Route path="/projects"       element={<ProjectsPage />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Routes>
      </PageTransition>
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </BrowserRouter>
  );
}