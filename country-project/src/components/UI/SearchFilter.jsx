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
      const nameA = a?.names?.common || "";
      const nameB = b?.names?.common || "";

      return value === "asc"
        ? nameA.localeCompare(nameB)
        : nameB.localeCompare(nameA);
    });
    setCountries(sortCountry);
  };

  return (
    <section className="mb-10 flex flex-col flex-wrap items-stretch gap-4 sm:flex-row sm:items-center justify-between">
      <div className="flex-1 min-w-60">
        <input
          type="text"
          placeholder="Search country by name..."
          value={search}
          onChange={handleInputChange}
          className="w-full rounded-full border border-line bg-surface/80 px-5 py-2.5 text-sm text-parchment placeholder:text-muted/60 transition-all duration-200 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass"
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex rounded-full border border-line bg-surface/40 p-1">
          <button
            type="button"
            onClick={() => sortCountries("asc")}
            className="rounded-full px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-muted transition-all duration-200 hover:bg-surface-2 hover:text-brass-light active:scale-95"
          >
            Asc
          </button>
          <button
            type="button"
            onClick={() => sortCountries("des")}
            className="rounded-full px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-wider text-muted transition-all duration-200 hover:bg-surface-2 hover:text-brass-light active:scale-95"
          >
            Desc
          </button>
        </div>

        <div>
          <select
            className="w-full rounded-full border border-line bg-surface/80 px-5 py-2.5 font-mono text-xs uppercase tracking-wider text-parchment transition-all duration-200 focus:border-brass focus:outline-none focus:ring-1 focus:ring-brass sm:w-auto"
            value={filter}
            onChange={handleSelectChange}
          >
            <option value="all" className="bg-surface text-parchment">
              All Regions
            </option>
            <option value="Africa" className="bg-surface text-parchment">
              Africa
            </option>
            <option value="Americas" className="bg-surface text-parchment">
              Americas
            </option>
            <option value="Asia" className="bg-surface text-parchment">
              Asia
            </option>
            <option value="Europe" className="bg-surface text-parchment">
              Europe
            </option>
            <option value="Oceania" className="bg-surface text-parchment">
              Oceania
            </option>
          </select>
        </div>
      </div>
    </section>
  );
}

export default SearchFilter;
