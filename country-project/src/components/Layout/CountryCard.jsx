import { NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
  const { flag, names, population, region, capitals } = country;

  return (
    <li className="list-none perspective-[1000px]">
      <div className="group relative h-80 w-full rounded-2xl transition-transform duration-700 transform-3d hover:transform-[rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-line bg-surface backface-hidden">
          {flag?.url_svg && (
            <div className="h-48 w-full overflow-hidden bg-surface-2">
              <img
                src={flag.url_svg}
                alt={names.common}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          <div className="flex flex-1 items-center justify-between p-5">
            <p className="font-display text-lg font-semibold text-parchment">
              {names.common.length > 15
                ? names.common.slice(0, 15) + "..."
                : names.common}
            </p>
            <span className="font-mono text-xs uppercase text-brass">
              Hover Me →
            </span>
          </div>
        </div>

        {/* Back Side */}
        <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-brass/60 bg-surface p-6 backface-hidden transform-[rotateY(180deg)]">
          <div className="flex flex-col gap-3">
            <p className="font-display text-xl text-brass">{names.common}</p>

            <div className="flex flex-col gap-2 pt-2">
              <p className="flex justify-between border-b border-line/60 pb-1.5 font-mono text-xs">
                <span className="uppercase tracking-wider text-muted">
                  Population:
                </span>
                <span className="text-parchment">
                  {population.toLocaleString()}
                </span>
              </p>
              <p className="flex justify-between border-b border-line/60 pb-1.5 font-mono text-xs">
                <span className="uppercase tracking-wider text-muted">
                  Region:
                </span>
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
            </div>
          </div>

          <NavLink to={`/country/${names.common}`} className="mt-4">
            <button className="flex w-full items-center justify-center gap-2 rounded-full border border-brass/40 py-2.5 font-mono text-xs uppercase tracking-widest text-brass transition-colors duration-200 hover:bg-brass hover:text-ink">
              Read More
            </button>
          </NavLink>
        </div>
      </div>
    </li>
  );
};

export default CountryCard;
