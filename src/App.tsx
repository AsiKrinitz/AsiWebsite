import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import ErrorPage from "./ErrorPage/ErrorPage";
import { AsiFooter } from "./AsiFooter/AsiFooter";
import { Accessibility } from "./Accessibility/Accessibility";
import { PrivacyPolicy } from "./PrivacyPolicy/PrivacyPolicy";
import { AccessibilityWidget } from "./AccessibilityWidget/AccessibilityWidget";

function App() {
  if (window.location.pathname === "/AsiWebsite") {
    window.location.replace("/AsiWebsite/");
  }
  return (
    <Router basename="/AsiWebsite">
      {/* <-- must wrap all routes */}
      <div className="appRoot">
        <Header />

        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>

        <Footer />
        <AsiFooter />
        <AccessibilityWidget />
      </div>
    </Router>
  );
}

export default App;
