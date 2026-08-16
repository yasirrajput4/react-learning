function SearchFilter({
  search,
  setSearch,
  filter,
  setFilter,
  countries,
  setCountries,
}) {
  const handleInputChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  function handleSelectChange(e) {
    e.preventDefault();

    setFilter(e.target.value);
  }

  const sortCountries = (value) => {
    const sortCountry = [...countries].sort((a, b) => {
      const nameA = a.names?.common || "";
      const nameB = b.names?.common || "";

      return value === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="mx-auto mb-10 flex max-w-7xl flex-col flex-wrap items-stretch gap-3 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
      <div className="flex-1 min-w-50">
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={handleInputChange}
          className="w-full rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-parchment placeholder:text-muted transition-colors focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => sortCountries("asc")}
          className="rounded-full border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-brass hover:text-brass"
        >
          Asc
        </button>

        <button
          onClick={() => sortCountries("des")}
          className="rounded-full border border-line px-4 py-2.5 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:border-brass hover:text-brass"
        >
          Desc
        </button>
      </div>

      <div>
        <select
          className="w-full rounded-full border border-line bg-surface px-5 py-2.5 text-sm text-parchment transition-colors focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass sm:w-auto"
          value={filter}
          onChange={handleSelectChange}
        >
          <option value="all">All</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </div>
    </section>
  );
}

export default SearchFilter;
