import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#808000");

  const colors = [
    { name: "Red", value: "#ef4444" },
    { name: "Green", value: "#22c55e" },
    { name: "Blue", value: "#3b82f6" },
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: color,
        transition: "background-color 0.5s ease-in-out",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px",
          backgroundColor: "rgba(255,255,255,0.9)",
          backdropFilter: "blur(4px)",
          padding: "16px 24px",
          borderRadius: "24px",
          boxShadow:
            "0 20px 25px -5px rgba(0,0,0,0.2), 0 8px 10px -6px rgba(0,0,0,0.2)",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
      >
        {colors.map((c) => (
          <button
            key={c.name}
            onClick={() => setColor(c.value)}
            style={{
              outline: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 24px",
              borderRadius: "9999px",
              color: "white",
              fontWeight: 500,
              letterSpacing: "0.02em",
              backgroundColor: c.value,
              boxShadow:
                color === c.value
                  ? `0 0 0 3px white, 0 0 0 5px ${c.value}`
                  : "0 10px 15px -3px rgba(0,0,0,0.2)",
              transition: "all 0.2s ease-in-out",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            {c.name}
          </button>
        ))}
      </div>
    </div>
  );
}
