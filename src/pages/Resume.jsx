

const resumePdf = "/portfolio/resume.pdf"; // Place your resume.pdf in the public folder

const Resume = () => (
    <div className="container my-5">
        <h1 className="mb-4">My Resume</h1>
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
        <div style={{ height: "80vh", border: "1px solid #ccc" }}>
            <iframe
                src={resumePdf}
                title="Resume"
                width="100%"
                height="100%"
                style={{ border: "none" }}
            />
        </div>
    </div>
);

export default Resume;