// src/Components/projectCard.js
import React from 'react';

export const ProjectCard = ({ title, description }) => {
  return (
    <div className="relative flex flex-col rounded-xl bg-white text-gray-700 shadow-md w-full max-w-xs">
      <div className="relative h-40 overflow-hidden rounded-xl bg-blue-gray-500 text-white shadow-lg bg-gradient-to-r from-blue-500 to-blue-600">
        {/* Você pode adicionar uma imagem ou algum conteúdo aqui */}
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-semibold text-blue-gray-900">
          {title || 'Card Title'}
        </h5>
        <p className="text-base font-light text-gray-700">
          {description || 'Description text goes here.'}
        </p>
      </div>
      <div className="p-6 pt-0">
        <button
          data-ripple-light="true"
          type="button"
          className="rounded-lg bg-blue-500 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg focus:opacity-85 active:opacity-85"
        >
          Read More
        </button>
      </div>
    </div>
  );
};
