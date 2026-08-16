const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="py-16 sm:py-24">
      <h2 className="mb-12 text-center font-display text-3xl sm:text-4xl">
        Contact Us
      </h2>

      <div className="mx-auto max-w-lg px-4 sm:px-6">
        <form action={handleFormSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            className="rounded-lg border border-line bg-surface px-4 py-3 text-sm text-parchment placeholder:text-muted transition-colors focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
            placeholder="Enter your name"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="email"
            className="rounded-lg border border-line bg-surface px-4 py-3 text-sm text-parchment placeholder:text-muted transition-colors focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
            placeholder="Enter you email"
            name="email"
            required
            autoComplete="off"
          />

          <textarea
            className="resize-none rounded-lg border border-line bg-surface px-4 py-3 text-sm text-parchment placeholder:text-muted transition-colors focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
            rows="8"
            placeholder="Enter your message"
            name="message"
            required
            autoComplete="off"
          ></textarea>

          <button
            type="submit"
            className="mt-2 rounded-full bg-brass px-6 py-3 font-semibold text-ink transition-colors duration-200 hover:bg-brass-light"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
