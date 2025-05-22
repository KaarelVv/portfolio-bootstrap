import CardWrapper from "../components/CardWrapper";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (
  <CardWrapper>
    <div className="p-4 ">
      <h2 className="hero-heading text-start mb-3 fade-in-up">Contact Me</h2>
      <ContactForm />
    </div>
    </CardWrapper>
  );
}
