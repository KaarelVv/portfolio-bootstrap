import { useEffect, useState } from "react";

const resumePdf = "/portfolio/resume.pdf";

const Resume = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <div className="container my-5 fade-in-up">
      <h2 className="hero-heading mb-3">My Resume</h2>

      <div className="mb-3">
        <a
          href={resumePdf}
          download="My_Resume.pdf"
          className="btn btn-live btn-glow"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume (PDF)
        </a>
      </div>

      {isMobile ? (
        <p className="modal-descripion  mt-3">
          PDF preview is disabled on small screens. Please download the resume to view it.
        </p>
      ) : (
        <div className="resume-viewer">
          <iframe
            src={resumePdf}
            title="Resume"
            className="responsive-pdf"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default Resume;
