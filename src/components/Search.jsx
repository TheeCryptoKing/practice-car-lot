import React from "react";

function Search({ filter, search ,onNewSearch, onNewFilter}) {

  
  return (
    <div className="search">
      <div className="select">
        <label htmlFor="filter">Filter</label>
        <select
          name="model search"
          id="model search"
          className="border-2 border-solid ml-[10px] border-slate-900"
          value={filter}
          onChange={onNewFilter}
          >
          <option value="">Choose a manufacturer</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Chevrolet">Chevrolet</option>
          <option value="Ford">Ford</option>
          <option value="Hyundai">Hyundai</option>
          <option value="Mazda">Mazda</option>
          <option value="Mercedes-Benz">Mercedes-Benz</option>
          <option value="Toyota">Toyota</option>
        </select>
      </div>
      <div className="ml-[10px]">
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          placeholder="Type a name to search..."
          className="searchField ml-[10px] border-2 border-solid border-slate-900"
          value={search}
          onChange={onNewSearch}
        />
      </div>
    </div>
  );
}

export default Search;
