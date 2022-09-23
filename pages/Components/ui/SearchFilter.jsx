import { React, useState } from "react";
import jsonData from "../../../data/data.json";
import { FaSearch } from "react-icons/fa";
const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState(``);
  return (
    <div className="flex flex-col w-full items-center mt-5">
      <input
        type="text"
        placeholder="Search Food and Recipes..."
        onChange={(event) => setSearchTerm(event.target.value)}
        className="w-full"
      ></input>
      {jsonData
        .filter((value) => {
          if (searchTerm === "") {
            return value;
          } else if (
            value.first_name.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })
        .map((value, key) => {
          return (
            <div
              key={value.id}
              className="w-16 h-7 flex items-center justify-center bg-SecondBrandColor"
            >
              <div>
                <p>{value.first_name}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SearchFilter;