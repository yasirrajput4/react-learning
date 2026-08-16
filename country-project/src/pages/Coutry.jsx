import { useEffect, useState, useTransition } from "react";
import { getCountryData } from "../api/postApi";
import Loader from "../components/UI/Loader";
import CountryCard from "../components/Layout/CountryCard";

function Coutry() {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryData();
        setCountries(res.data.data.objects);
      } catch (err) {
        setError(err);
      }
    });
  }, []);

  if (isPending) return <Loader />;
  if (error) return <h1>Something went wrong. Please try again later.</h1>;

  return (
    <section className="country-section">
      <ul className="grid grid-four-cols">
        {countries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index} />;
        })}
      </ul>
    </section>
  );
}

export default Coutry;
