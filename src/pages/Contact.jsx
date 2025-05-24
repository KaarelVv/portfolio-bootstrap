import CardWrapper from "../components/CardWrapper";
import ContactForm from "../components/ContactForm";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
} from "lucide-react";

export default function Contact() {
  return (
    <CardWrapper>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 fade-in-up">
        <div className="space-y-4">
          <h2 className="hero-heading text-start mb-3">Contact Me</h2>

          <div className="flex items-center gap-3">
            <Mail className="text-primary" />
            <a href="kaarel.viilvere@voco.ee" className="hover:underline btn btn-contact">
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
            <Linkedin className="text-primary" />
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
            <Github className="text-primary" />
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
    </CardWrapper>
  );
}
