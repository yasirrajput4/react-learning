import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flag, names, population, region, capitals } = country;
  return (
    <li className="country-card  card ">
      <div className="container-card bg-white-box">
        {flag?.url_svg && <img src={flag.url_svg} alt={names.common} />}

        <div className="countryInfo">
          <p className="card-title">
            {names.common.length > 10
              ? names.common.slice(0, 10) + "..."
              : names.common}
          </p>
          <p>
            <span className="card-description">Population:</span>
            {population.toLocaleString()}
          </p>
          <p>
            <span className="card-description">Region:</span> {region}
          </p>
          <p>
            <span className="card-description">Capital:</span>
            {capitals?.[0]?.name || "N/A"}
          </p>

          <NavLink to={`/country/${names.common}`}>
            <button>Read More</button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
