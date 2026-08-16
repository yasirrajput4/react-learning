import countryFacts from "../api/countryData.json";

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <h2 className="mb-12 text-center font-display text-3xl leading-snug sm:text-4xl">
        Here are the Interesting Facts
        <br />
        we're proud of
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {countryFacts.map((country) => {
          const { id, countryName, capital, population, interestingFact } =
            country;
          return (
            <div key={id} className="h-64 w-full perspective-[1000px]">
              <div className="group relative h-full w-full rounded-2xl transition-transform duration-700 transform-3d hover:transform-[rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute inset-0 flex flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-6 backface-hidden">
                  <div>
                    <p className="mb-4 font-display text-2xl text-parchment">
                      {countryName}
                    </p>
                    <p className="mb-2 text-sm">
                      <span className="mr-2 font-mono text-xs uppercase tracking-wider text-muted">
                        Capital:
                      </span>
                      <span className="text-parchment">{capital}</span>
                    </p>
                    <p className="text-sm">
                      <span className="mr-2 font-mono text-xs uppercase tracking-wider text-muted">
                        Population:
                      </span>
                      <span className="text-parchment">
                        {typeof population === "number"
                          ? population.toLocaleString()
                          : population}
                      </span>
                    </p>
                  </div>
                  <span className="font-mono text-xs uppercase text-ocean">
                    Hover For Fact →
                  </span>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 flex flex-col overflow-hidden rounded-2xl border border-ocean/50 bg-surface p-6 backface-hidden transform-[rotateY(180deg)]">
                  <p className="mb-2 font-mono text-xs uppercase tracking-wider text-ocean">
                    Interesting Fact:
                  </p>
                  <p className="text-sm leading-relaxed text-parchment">
                    {interestingFact}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;
