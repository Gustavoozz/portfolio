import React from 'react';
import { ButtonAccess } from '../button/button';
import { TextLink } from '../text/text';
import Image from 'next/image';
import TooltipComponent from '@/components/tooltipComponent'; // Importe o TooltipComponent

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  buttons: Array<string>;
}

export const ProjectCard: React.FC<CardProps> = ({ title, description, icon, image, buttons }) => {
  return (
    <div className="w-96 h-full duration-500 group overflow-hidden relative bg-neutral-800 text-neutral-50 border font-poppins border-white p-4 flex flex-col justify-evenly rounded-2xl">
      <div className="absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-900 right-1 -bottom-24" />
      <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-700 right-12 bottom-12" />
      <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-800 right-1 -top-12" />
      <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12" />
      <div className="z-10 flex flex-col justify-evenly w-full h-full items-start">
        <div className="relative w-full font-poppins h-44">
          {image && (
            <Image
              src={image}
              alt={title}
              layout="fill"
              className="absolute inset-0 object-cover rounded-xl duration-500"
            />
          )}
        </div>
        <span className="text-2xl font-semibold mt-4">{title}</span>
        <p>{description}</p>

        <div className="mt-8 mb-4 flex gap-2 flex-wrap justify-center">

          {React.Children.map(icon, (child, index) => (
            <TooltipComponent key={index} text={`Ícone ${index + 1}`} triggerClassName="font-semibold pointer">
              {child}
            </TooltipComponent>
          ))}
        </div>

        {buttons.length > 0 && (
          <div className="mt-4 flex gap-4 justify-center">
            {buttons.includes('code') && (
              <ButtonAccess>
                <TextLink>Code</TextLink>
              </ButtonAccess>
            )}

            {buttons.includes('visit') && (
              <ButtonAccess>
                <TextLink>Visit</TextLink>
              </ButtonAccess>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
