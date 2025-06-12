import React, { useState, useEffect, useRef } from 'react';

const PropertyDrop = ({ options, onSelect, placeholder = 'Select Your Property...' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setFilteredOptions(
      options.filter(option =>
        option.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, options]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <div className="relative " ref={dropdownRef}>
      <div
        className="border p-2 rounded cursor-pointer capitalize bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected ? selected.name : placeholder}
      </div>

      {isOpen && (
        <div className="absolute mt-1 w-full z-30 bg-white border rounded-lg ">
          <input
            type="text"
            className="w-full p-2 border-b outline-none"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <ul className="max-h-48 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <li
                  key={option.id}
                  onClick={() => handleSelect(option)}
                  className="p-2 capitalize hover:bg-renatal-blue hover:text-white cursor-pointer"
                >
                  {option.name}
                </li>
              ))
            ) : (
              <li className="p-2 text-gray-500">No results found</li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default PropertyDrop;
