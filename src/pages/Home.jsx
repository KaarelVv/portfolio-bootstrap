import CardWrapper from "../components/CardWrapper";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  const introLines = [
    "Initializing portfolio.exe...",
    "Loading modules...",
    "Establishing secure connection...",
    "Connected.",
    "Welcome, user."
  ];

  const [visibleLines, setVisibleLines] = useState(0);
  const [command, setCommand] = useState("");
  const [error, setError] = useState("");
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    const revealNextLine = (index = 0) => {
      if (index >= introLines.length) {
        setShowInput(true);
        setTimeout(() => {
          const input = document.querySelector('.terminal-input');
          input?.focus(); // Re-focus to reset the blinking caret
        }, 10);
        return;
      }

      const delay = index === 2 ? 1500 : 500;
      setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
        revealNextLine(index + 1);
      }, delay);
    };

    revealNextLine();
  }, []);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const cmd = command.trim().toLowerCase();
      setError("");

      switch (cmd) {
        case "projects":
          navigate("/projects");
          break;
        case "contact":
          navigate("/contact");
          break;
        case "resume":
          navigate("/resume");
          break;
        default:
          setError(`Command not found: ${cmd}`);
          setCommand(""); // ← clear input
      }
    }
  };

  return (
    <CardWrapper alignTop>
      <div className="text-start">
        <h1 className="hero-heading mb-4 fade-in-up">helloWorld!</h1>

        <div className="terminal-box mb-4 fade-in-up-slow">
          {introLines.slice(0, visibleLines).map((line, i) => (
            <div className="terminal-line" key={i}>
              <span className="prompt">&gt;</span> {line}
            </div>
          ))}

          {showInput && (
            <>
              <div className="terminal-line">
                <span className="prompt">&gt;</span>
                <div className="terminal-input-wrapper">
                  <input
                    className="terminal-input"
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={handleCommand}
                    autoFocus
                    placeholder="Type a command..."
                  />

                </div>
              </div>

              {/* Hint line */}
              <div className="terminal-line small">
                <span className="prompt">#</span> Available:
                <div className="hint-group">
                  <code>projects </code>
                  <code>contact </code>
                  <code>resume</code>
                </div>
              </div>
            </>
          )}


          {error && (
            <div className="terminal-line error">
              <span className="prompt">!</span> {error}
            </div>
          )}
        </div>
      </div>
    </CardWrapper>
  );
}
