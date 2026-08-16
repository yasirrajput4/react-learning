import { useEffect, useState, useTransition } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getCountryIndData } from "../../api/postApi";
import Loader from "../UI/Loader";

const CountryDetails = () => {
  const params = useParams();

  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    startTransition(async () => {
      try {
        const res = await getCountryIndData(params.id);
        setCountry(res.data.data.objects[0]);
      } catch (err) {
        setError(err);
      }
    });
  }, [params.id]);

  if (isPending) return <Loader />;
  if (error || !country)
    return <h1>Something went wrong. Please try again later.</h1>;

  const nativeNames = country.names.native
    ? Object.values(country.names.native)
        .map((n) => n.common)
        .join(", ")
    : "N/A";

  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            {country.flag?.url_svg && (
              <img
                src={country.flag.url_svg}
                alt={country.flag.description || country.names.common}
                className="flag"
              />
            )}
            <div className="country-content">
              <p className="card-title"> {country.names.official} </p>

              <div className="infoContainer">
                <p>
                  <span className="card-description"> Native Names:</span>
                  {nativeNames}
                </p>
                <p>
                  <span className="card-description"> Population: </span>
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="card-description"> Region:</span>
                  {country.region}
                </p>
                <p>
                  <span className="card-description"> Sub Region:</span>
                  {country.subregion}
                </p>
                <p>
                  <span className="card-description"> Capital:</span>
                  {country.capitals?.length
                    ? country.capitals.map((c) => c.name).join(", ")
                    : "N/A"}
                </p>

                <p>
                  <span className="card-description">Top Level Domain:</span>
                  {country.tlds?.[0] || "N/A"}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {country.currencies?.length
                    ? country.currencies.map((cur) => cur.name).join(", ")
                    : "N/A"}
                </p>
                <p>
                  <span className="card-description">Languages: </span>
                  {country.languages?.length
                    ? country.languages.map((lang) => lang.name).join(", ")
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
export default CountryDetails;
