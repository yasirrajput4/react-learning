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
            <div
              key={id}
              className="rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ocean/50"
            >
              <p className="mb-3 font-display text-xl text-parchment">
                {countryName}
              </p>
              <p className="mb-1.5 text-sm">
                <span className="mr-2 font-mono text-xs uppercase tracking-wider text-muted">
                  Capital:
                </span>
                <span className="text-parchment">{capital}</span>
              </p>
              <p className="mb-3 text-sm">
                <span className="mr-2 font-mono text-xs uppercase tracking-wider text-muted">
                  Population:
                </span>
                <span className="text-parchment">{population}</span>
              </p>
              <p className="text-sm leading-relaxed text-muted">
                <span className="mb-1 block font-mono text-xs uppercase tracking-wider text-ocean">
                  Interesting Fact:
                </span>
                {interestingFact}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
export default About;
