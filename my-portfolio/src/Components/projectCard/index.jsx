// src/Components/projectCard.js
import React from 'react';
import { Button, ButtonAccess } from '../../Components/button/button'
import { TextLink } from '../text';

export const ProjectCard = ({ title, description, image, icon }) => {
  return (
    <div className="flex items-center justify-center">
       <div className="inline-flex animate-shine max-w-[450px] w-full items-center justify-center rounded-xl text-sm border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 transition-colors">
      <div className="flex flex-col gap-2 w-full">
        {/* Contêiner da imagem */}
        <div className="relative w-full h-48">
          {image && (
            <img
              src={image.src}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          )}
        </div>
        
        <h3 className="text-xl font-semibold text-neutral-200">{title}</h3>
        <p className="text-sm leading-[1.5] text-neutral-400">
          {description}
        </p>

        <div className="mt-4 flex gap-2">
        {icon}
        </div>

        <div className="mt-2 ">     
        <ButtonAccess>
          <TextLink>Code</TextLink>
        </ButtonAccess>

        <ButtonAccess>
          <TextLink>Visit</TextLink>
        </ButtonAccess>
        </div>
      </div>
    </div>
    </div>
   
  );
};
