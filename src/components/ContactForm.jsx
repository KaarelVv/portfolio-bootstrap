import { useState, useEffect } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [captchaToken, setCaptchaToken] = useState("");
  const [sent, setSent] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Stub grecaptcha in testing environment
    if (import.meta.env.MODE === "development" || import.meta.env.MODE === "test") {
      if (window.Cypress && !window.__mockCaptchaToken__) {
        window.grecaptcha = {
          ready: (cb) => cb(),
          execute: () => Promise.resolve(""),
        };
      }
    }
    const updateTheme = () => {
      const localTheme = localStorage.getItem("theme");
      setTheme(localTheme === "dark" ? "dark" : "light");
    };


    // On load
    updateTheme();

    // Listen for changes in localStorage (from ThemeToggle)
    window.addEventListener("storage", updateTheme);

    return () => window.removeEventListener("storage", updateTheme);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  if (!captchaToken) {
    alert("Please complete the CAPTCHA.");
    return;
  }

  try {
    const formData = new URLSearchParams();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("message", form.message);
    formData.append("token", captchaToken);

    const res = await fetch("https://vso24viilvere.ita.voco.ee/sendMail.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(),
    });

    if (res.ok) {
      setForm({ name: "", email: "", message: "" });
      setCaptchaToken("");
      setSent(true);
      setTimeout(() => setSent(false), 4000);
    } else {
      const text = await res.text();
      alert("Error: " + text);
    }
  } catch (err) {
    alert("Error sending message.");
    console.error(err);
  }
};

  const TerminalPrompt = ({ label }) => (
    <span className="prompt">~/ &gt; {label}</span>
  );

  return (
    <form onSubmit={handleSubmit} className="terminal-box mt-3">
      <div className="terminal-line">input.message.below </div>
      
      <div className="terminal-line">
        <TerminalPrompt label="Name" />
      </div>
      <div className="terminal-line">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="terminal-input"
          placeholder="Enter your name"
        />
      </div>

      <div className="terminal-line">
        <TerminalPrompt label="Email" />
      </div>
      <div className="terminal-line">
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
          className="terminal-input"
          placeholder="Enter your email"
        />
      </div>

      <div className="terminal-line">
        <TerminalPrompt label="Message" />
      </div>
      <div className="terminal-line">
        <textarea
          name="message"
          rows="4"
          value={form.message}
          onChange={handleChange}
          required
          className="terminal-input"
          style={{ resize: "none" }}
          placeholder="Type your message..."
        />
      </div>

      <div className="terminal-line">
        <TerminalPrompt label="CAPTCHA" />
      </div>
      <div className="terminal-line">
        <ReCAPTCHA
          key={theme}
          sitekey="6Ldpmj8rAAAAAE86fAYdT1dBHhIj_HNmABzLz_9R"
          theme={theme}
          onChange={setCaptchaToken}
        />
      </div>

      <div className="terminal-line mt-3">
        <button type="submit" className="btn btn-live btn-glow">Send</button>
      </div>

      {sent && (
        <div className="terminal-line fade-in mt-3" style={{ color: "#00ff99" }}>
          ~/contact &gt; Message sent successfully!
        </div>
      )}
    </form>
  );
}
