import { useState } from "react";

const FAQ = ({ curData }) => {
  const { question, answer } = curData;
  const [activeId, setActiveId] = useState(false);

  function hanldeButton() {
    setActiveId(!activeId);
  }
  return (
    <li>
      <div className=" accordion-grid  ">
        <p className="accordion-question">{question}</p>
        <button onClick={hanldeButton}>{activeId ? "Close" : "Show"}</button>
      </div>
      <p> {activeId && answer} </p>
    </li>
  );
};

export default FAQ;
