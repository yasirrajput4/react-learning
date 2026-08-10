import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, password.length);
    window.navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div
      className="w-full min-h-screen flex items-center justify-center px-4"
      style={{
        background:
          "radial-gradient(circle at 20% 20%, #142027 0%, #0B0F12 55%, #08090B 100%)",
        fontFamily: "'Inter', ui-sans-serif, system-ui, sans-serif",
      }}
    >
      <div
        className="w-full max-w-md rounded-2xl overflow-hidden"
        style={{
          background: "#11161B",
          border: "1px solid #1F2A30",
          boxShadow: "0 20px 60px -20px rgba(0,0,0,0.6)",
        }}
      >
        {/* Header */}
        <div
          className="px-6 pt-6 pb-5"
          style={{ borderBottom: "1px solid #1B2328" }}
        >
          <div className="flex items-center gap-x-2 mb-1">
            <span
              className="inline-block rounded-full"
              style={{
                width: "8px",
                height: "8px",
                background: "#22E3A5",
                boxShadow: "0 0 8px #22E3A5",
              }}
            />
            <span
              style={{
                color: "#5C6B70",
                fontSize: "11px",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
              }}
            >
              Secure Key Generator
            </span>
          </div>
          <h1
            style={{
              color: "#EAF2F0",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            Generate a password
          </h1>
        </div>

        {/* Body */}
        <div className="px-6 py-6">
          {/* Password display */}
          <div
            className="flex items-stretch rounded-xl overflow-hidden mb-6"
            style={{ border: "1px solid #263239", background: "#0C1114" }}
          >
            <input
              type="text"
              value={password}
              readOnly
              ref={passwordRef}
              className="outline-none w-full py-3 px-4 bg-transparent"
              style={{
                color: "#22E3A5",
                fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                fontSize: "16px",
                letterSpacing: "0.03em",
              }}
              placeholder="Password"
            />
            <button
              onClick={copyPasswordToClipboard}
              className="shrink-0 px-4 text-sm font-medium transition-colors"
              style={{
                background: copied ? "#1B4B3D" : "#17222A",
                color: copied ? "#22E3A5" : "#9AAAB0",
                borderLeft: "1px solid #263239",
              }}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          {/* Length slider */}
          <div className="mb-5">
            <div className="flex items-center justify-between mb-2">
              <label
                style={{
                  color: "#9AAAB0",
                  fontSize: "13px",
                  fontWeight: 500,
                }}
              >
                Length
              </label>
              <span
                style={{
                  color: "#22E3A5",
                  fontFamily: "'JetBrains Mono', ui-monospace, monospace",
                  fontSize: "13px",
                }}
              >
                {length}
              </span>
            </div>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="w-full cursor-pointer"
              style={{ accentColor: "#22E3A5" }}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
          </div>

          {/* Toggles */}
          <div className="flex gap-x-3">
            <label
              className="flex items-center gap-x-2 flex-1 rounded-lg px-3 py-2.5 cursor-pointer select-none"
              style={{
                background: numberAllowed ? "#132A24" : "#0C1114",
                border: `1px solid ${numberAllowed ? "#1E4F41" : "#1F2A30"}`,
              }}
            >
              <input
                type="checkbox"
                checked={numberAllowed}
                id="numberInput"
                onChange={() => {
                  setNumberAllowed((prev) => !prev);
                }}
                style={{ accentColor: "#22E3A5" }}
              />
              <span
                style={{
                  color: numberAllowed ? "#EAF2F0" : "#7C8A90",
                  fontSize: "13px",
                }}
              >
                Numbers
              </span>
            </label>
            <label
              className="flex items-center gap-x-2 flex-1 rounded-lg px-3 py-2.5 cursor-pointer select-none"
              style={{
                background: charAllowed ? "#132A24" : "#0C1114",
                border: `1px solid ${charAllowed ? "#1E4F41" : "#1F2A30"}`,
              }}
            >
              <input
                type="checkbox"
                checked={charAllowed}
                id="characterInput"
                onChange={() => {
                  setCharAllowed((prev) => !prev);
                }}
                style={{ accentColor: "#22E3A5" }}
              />
              <span
                style={{
                  color: charAllowed ? "#EAF2F0" : "#7C8A90",
                  fontSize: "13px",
                }}
              >
                Symbols
              </span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
