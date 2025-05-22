import { useEffect, useState } from "react";
import CardWrapper from "../components/CardWrapper";

export default function About() {
  const [visibleLines, setVisibleLines] = useState(0);
  const lines = [
    "➜ I'm a hands-on web developer with a strong foundation in JavaScript, React, and SQL.",
    "➜ My focus is on building accessible, responsive, and visually engaging applications.",
    "➜ I enjoy making subtle interactions with animations and understanding the code deeply—not just using it.",
    "➜ My goal is to grow from a solid junior developer into a confident and capable contributor.",
    "",
    "➜ Tech Stack",
    "$ skills --list",
    "- JavaScript",
    "- React",
    "- Bootstrap",
    "- Node.js",
    "- SQL",
  ];

  useEffect(() => {
    const revealNextLine = (index = 0) => {
      if (index >= lines.length) return;

      const delay = lines[index].startsWith("➜") ? 800 : 400;
      setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
        revealNextLine(index + 1);
      }, delay);
    };

    revealNextLine();
  }, []);

  return (
    <CardWrapper>
      <h2 className="hero-heading text-start mb-3 fade-in-up">About Me</h2>
      <div className="terminal-box mt-3 fade-in-up-slow">
        {lines.slice(0, visibleLines).map((line, i) => (
          <div className="terminal-line" key={i}>
            {line.startsWith("➜") && <span className="prompt">➜</span>}
            {line.startsWith("$") && <span className="prompt">$</span>}
            {line.startsWith("-") && <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
            <span>{line.replace(/^[➜$-]\s*/, "")}</span>
          </div>
        ))}
      </div>
    </CardWrapper>
  );
}
