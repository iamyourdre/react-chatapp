import React, { useEffect, useState } from 'react'
import { LuSearch } from "react-icons/lu";
import { HiXMark } from "react-icons/hi2";


const SearchInput = () => {
  const [search, setSearch] = useState('');
  return (
    <label className="input input-bordered flex items-center gap-2 focus-within:text-slate-700 hover:bg-slate-100 focus-within:bg-slate-100 outline-none mx-3 my-3">
      <input type="text" className="grow" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
      {!search ? <LuSearch /> : <HiXMark onClick={(e) => setSearch('')}/>}
    </label>
  )
}

export default SearchInput