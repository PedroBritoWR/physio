import React, { useState, useEffect, useRef } from "react";
import { Users, CaretDown, CaretRight } from "@phosphor-icons/react";

const Usuarios = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
        setSubDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      {/* icone */}
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center justify-center p-2 text-black hover:text-gray-500 bg-transparent"
      >
        <Users size={24} />
      </button>

      {/* primeiro dropdown */}
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[#121a28] text-white rounded-md shadow-lg z-10">
          <button
            onClick={() => setSubDropdownOpen(!subDropdownOpen)}
            className="flex justify-between items-center w-full px-4 py-2 text-sm font-medium bg-[#121a28] hover:bg-[#1a2434] rounded-t-md"
          >
            <div className="flex items-center gap-2">
              <Users size={20} />
              <span>Usuários</span>
            </div>
            {subDropdownOpen ? (
              <CaretDown size={16} />
            ) : (
              <CaretRight size={16} />
            )}
          </button>

          {/* segundo dropdown */}
          {subDropdownOpen && (
            <div>
              <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-[#1a2434] rounded-t-md"
              >
                Aprovados
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm hover:bg-[#1a2434] rounded-b-md"
              >
                Não aprovados
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Usuarios;
