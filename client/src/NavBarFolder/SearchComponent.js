import React from 'react'
import './searchCSS.css'

const SearchComponent = ({search, setSearch}) => {
  return (
    <form className='search'>
    <label>Search:</label>
    <input
    type="text"
    id="search"
    placeholder="Type to begin search..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    />
</form>
  )
}

export default SearchComponent