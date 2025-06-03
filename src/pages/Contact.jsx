import CardWrapper from "../components/CardWrapper";
import ContactForm from "../components/ContactForm";
import {
  Mail,
  Phone,
  Github,
} from "lucide-react";

export default function Contact() {
  return (
    <CardWrapper>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 fade-in-up">
        <div className="space-y-4">
          <h2 className="hero-heading mb-3">Contact Me</h2>

          <div className="flex items-center gap-3">
            <Mail className="text-primary" />
            <a href="mailto:kaarel.viilvere@voco.ee" className="hover:underline btn btn-contact">
              kaarel.viilvere@voco.ee
            </a>
          </div>
          {/* <div className="flex items-center gap-3">
            <Phone className="text-primary" />
            <a href="tel:+1234567890" className="hover:underline btn btn-contact">
              +372 566 85 372
            </a>
          </div> */}

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              {/* LinkedIn SVG icon from simpleicons.org */}
              <svg
                className="text-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <a
                href="https://linkedin.com/in/kaarel-viilvere-441452262"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline btn btn-contact"
              >
                linkedin.com/in/KaarelViilvere
              </a>
            </div>
            <div className="flex items-center gap-3">
              {/* GitHub SVG icon from simpleicons.org */}
              <svg
                className="text-primary"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.93 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              <a
                href="https://github.com/KaarelVv"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline btn btn-contact"
              >
                github.com/KaarelVv
              </a>
              </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}


