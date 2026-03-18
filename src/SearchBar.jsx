import { useState } from "react";
function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");
  return (
    <div className="flex gap-2">
      <input type="text" placeholder="Enter city" className="flex-1 px-3 py-2 border 
      rounded-lg" value={city}
      onChange={(e) => setCity(e.target.value)}/>
      <button onClick={() => onSearch(city)} className="bg-blue-500 text-white px-4 py-2 
      rounded-lg w-full hover:bg-blue-600"> 🔍 </button>
    </div>
  );
}
export default SearchBar;