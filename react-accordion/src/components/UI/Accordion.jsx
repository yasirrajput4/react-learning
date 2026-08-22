import faq from "../../api/faq.json";
import { useEffect, useState } from "react";
import FAQ from "../Layout/FAQ";

const Accordion = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(faq);
  }, []);

  return (
    <>
      <h1>The Accordion</h1>
      <ul className="section-accordion">
        {data.map((curElem) => {
          const { id } = curElem;
          return <FAQ key={id} curData={curElem} />;
        })}
      </ul>
    </>
  );
};
export default Accordion;
