import { FaLongArrowAltRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <main className="overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 md:grid-cols-2 lg:px-8">
        <div className="order-2 md:order-1">
          <p className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-brass">
            Field Guide &mdash; 195 Nations
          </p>
          <h1 className="mb-6 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Explore the World,{" "}
            <span className="italic text-brass">One Country</span> at a Time.
          </h1>
          <p className="mb-8 max-w-md text-base leading-relaxed text-muted sm:text-lg">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
          </p>
          <button className="group inline-flex items-center gap-3 rounded-full bg-brass px-6 py-3 font-semibold text-ink transition-colors duration-200 hover:bg-brass-light">
            Start Exploring
            <FaLongArrowAltRight className="transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>
        <div className="order-1 flex justify-center md:order-2">
          <img
            src="/images/world.png"
            alt="world is beauty"
            className="w-4/5 max-w-md drop-shadow-[0_0_60px_rgba(200,155,60,0.15)] md:w-full"
          />
        </div>
      </div>
    </main>
  );
};
export default HeroSection;
