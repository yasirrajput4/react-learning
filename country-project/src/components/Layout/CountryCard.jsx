import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flag, names, population, region, capitals } = country;
  return (
    <li className="list-none">
      <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-brass/60">
        {flag?.url_svg && (
          <div className="aspect-[3/2] w-full overflow-hidden bg-surface-2">
            <img
              src={flag.url_svg}
              alt={names.common}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="flex flex-1 flex-col gap-2 p-5">
          <p className="font-display text-lg text-parchment">
            {names.common.length > 10
              ? names.common.slice(0, 10) + "..."
              : names.common}
          </p>

          <p className="flex justify-between border-b border-line/60 pb-1.5 font-mono text-xs">
            <span className="uppercase tracking-wider text-muted">
              Population:
            </span>
            <span className="text-parchment">
              {population.toLocaleString()}
            </span>
          </p>
          <p className="flex justify-between border-b border-line/60 pb-1.5 font-mono text-xs">
            <span className="uppercase tracking-wider text-muted">Region:</span>
            <span className="text-parchment">{region}</span>
          </p>
          <p className="flex justify-between font-mono text-xs">
            <span className="uppercase tracking-wider text-muted">
              Capital:
            </span>
            <span className="text-parchment">
              {capitals?.[0]?.name || "N/A"}
            </span>
          </p>

          <NavLink to={`/country/${names.common}`} className="mt-3">
            <button className="flex w-full items-center justify-center gap-2 rounded-full border border-brass/40 py-2 font-mono text-xs uppercase tracking-widest text-brass transition-colors duration-200 hover:bg-brass hover:text-ink">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
