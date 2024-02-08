// src/components/Collapsible.js

import React, { useState } from 'react';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className="flex justify-between w-full px-4 py-2 text-left text-sm font-semibold text-gray-800 bg-gray-100 hover:bg-gray-200 rounded-lg focus:outline-none focus:ring"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="p-4 mt-2 border rounded-lg bg-white">
          {children}
        </div>
      )}
    </div>
  );
};

export default Collapsible;
