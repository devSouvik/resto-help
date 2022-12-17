import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

function FilterBar() {
  return (
    <>
      {/* flex overflow-auto */}
      {/* veg button */}
      <div className="bg-gray-50 py-2 flex overflow-auto container-snap">
        <button className="px-4 py-2 mx-2 min-h-fit min-w-fit bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg">
          <img
            src="https://img.icons8.com/color/48/null/vegetarian-food-symbol.png"
            className="inline w-5 h-5 mr-1"
          />
          veg
        </button>
        {/* non-veg button */}
        <button className="px-4 py-2 min-h-fit min-w-fit bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg">
          <img
            src="https://img.icons8.com/color/48/null/non-vegetarian-food-symbol.png"
            className="inline w-5 h-5 mr-1"
          />
          Non-veg
        </button>
        {/* price asc button */}
        <button className="px-4 py-2 ml-2 min-h-fit min-w-fit bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg">
          <FaArrowUp className="inline w-3 h-3 mr-1" />
          Price
        </button>

        {/* price desc button */}
        <button className="px-4 py-2 mx-2 h-1/2 w-20 min-h-fit min-w-fit bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg">
          <FaArrowDown className="inline w-3 h-3 mr-1" />
          Price
        </button>

        {/* gluten free */}
        <button className="px-4 py-2 mr-2 min-h-fit min-w-fit bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-lg">
          <img
            src="https://img.icons8.com/ios-glyphs/30/null/no-gluten.png"
            className="inline w-5 h-5 mr-1"
          />
          Gluten free
        </button>
      </div>
    </>
  );
}

export default FilterBar;
