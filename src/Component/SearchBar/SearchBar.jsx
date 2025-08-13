import { useState } from "react";
import PropTypes from "prop-types";
import { IoSearch } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      const res = await fetch(
        `https://prakritik-shongi-backend.vercel.app/search?q=${encodeURIComponent(searchTerm)}`
      );
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();

      setResults(data);
      setNoResults(data.length === 0);
      if (onSearch) onSearch(data);
    } catch (error) {
      console.error("Search error:", error);
      setResults([]);
      setNoResults(true);
      if (onSearch) onSearch([]);
    }
  };

  const handleResultClick = (id) => {
    setResults([]); // close dropdown
    setSearchTerm(""); // clear input
    navigate(`/craftdetails/${id}`); // <-- make sure this matches your router path
  };

  return (
    <div className="relative w-64">
      <form
        onSubmit={handleSearch}
        className="flex items-center bg-white rounded-lg overflow-hidden"
      >
        <input
          type="text"
          placeholder="Search by ID or Title..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-3 py-1 text-black outline-none w-full"
          autoComplete="off"
        />
        <button
          type="submit"
          className="bg-[#ad9773] p-2 flex items-center justify-center"
        >
          <IoSearch size={20} color="white" />
        </button>
      </form>

      {(results.length > 0 || noResults) && (
        <div className="absolute top-full mt-1 left-0 w-full bg-white rounded-md shadow-lg z-50 max-h-60 overflow-auto">
          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={item._id}
                onClick={() => handleResultClick(item._id)}
                className="p-2 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
                title={item.title}
              >
                <div className="font-semibold">{item.title}</div>
                <div className="text-xs text-gray-500">{item._id}</div>
              </div>
            ))
          ) : (
            <div className="p-2 text-center text-gray-500">Item not found</div>
          )}
        </div>
      )}
    </div>
  );
}

// ✅ Props validation
SearchBar.propTypes = {
  onSearch: PropTypes.func,
};
