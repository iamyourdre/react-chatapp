import React, { useEffect, useState } from 'react'
import { LuSearch } from "react-icons/lu";
import { HiXMark } from "react-icons/hi2";
import useConversation from '../../zustand/useConversation';
import toast from 'react-hot-toast';
import useGetConversations from '../../hooks/useGetConversations';


const SearchInput = () => {
  const [search, setSearch] = useState('');
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length<3){
      return toast.error('Search term must be at least 3 characters long');
    }
    const conversation = conversations.find(c => c.fullName.toLowerCase().includes(search.toLowerCase()));
    if(conversation){
      setSelectedConversation(conversation);
      setSearch('');
    } else {
      return toast.error('No conversation found');
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className="input input-bordered flex items-center gap-2 focus-within:text-slate-700 hover:bg-slate-100 focus-within:bg-slate-100 outline-none mx-3 my-3">
        <input type="text" className="grow" value={search} placeholder="Search" onChange={(e) => setSearch(e.target.value)} />
        {!search ? <LuSearch /> : <HiXMark onClick={(e) => setSearch('')}/>}
          <button type="submit" className='hidden'></button>
      </label>
    </form>
  )
}

export default SearchInput