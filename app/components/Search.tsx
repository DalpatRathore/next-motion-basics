"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`${search}/`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        name="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-lg"
        placeholder="Search"
      />
      <button
        type="submit"
        className="p-2 text-xl rounded-full bg-indigo-200 ml-2"
      >
        🚀
      </button>
    </form>
  );
};
export default Search;
