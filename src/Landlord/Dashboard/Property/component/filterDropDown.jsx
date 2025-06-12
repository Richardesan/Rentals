import { useState } from "react";
import { ChevronDown, Check } from "lucide-react";

const filterOptions = ["All", "Date", "Amount", "Interval","Location"];

export default function FilterDropdown({ selected, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left z-30">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex justify-between items-center w-40 px-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        {selected}
        <ChevronDown className="ml-2 h-4 w-4" />
      </button>

      {open && (
        <div className="absolute z-10 mt-2 w-44  rounded-md shadow-lg px-3 bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1 space-y-1">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setOpen(false);
                }}
                className={`${
                  option === selected
                    ? "bg-renatal-blue text-white "
                    : "text-black hover:bg-renatal-blue/70 hover:text-white"
                } group flex items-center w-full px-4 py-2 text-sm rounded-md `}
              >
                {option}
                {option === selected && <Check className="ml-auto h-4 w-4 text-green-500" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
