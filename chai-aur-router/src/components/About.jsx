function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://raw.githubusercontent.com/cuuupid/undraw-illustrations/master/svg/startup_life_2du2.svg"
              alt="Illustration of a developer working on a laptop, representing a startup"
              className="w-full h-auto drop-shadow-md"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl leading-snug">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              We're a small team of developers who love building fast,
              accessible, and delightful web experiences with React. Every
              project we take on is crafted with care, clean code, and a genuine
              focus on the people who'll actually use it.
            </p>
            <p className="mt-4 text-gray-600">
              From early-stage startups to established products, we partner with
              teams to design, build, and ship interfaces that feel simple on
              the outside and solid underneath.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
