import React from 'react';
// import { ButtonAccess } from '../button/button';
// import { TextLink } from '../text/text';

interface CardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttons?: React.ReactNode
}

export const ProjectCard:React.FC<CardProps> = ({ title, description,  icon }) => {
  return (
    <div className="w-full flex items-center justify-center px-4">
      <div className="inline-flex animate-shine max-w-[450px] w-96 items-center justify-center rounded-xl text-sm border border-white/10 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-4 py-5 transition-colors">
        <div className="flex flex-col gap-4 w-full items-start ">
  
          <div className="relative w-full font-poppins h-48">
            {/* {image && (
              <img
                src={image.src}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
            )} */}
          </div>

          <h3 className="text-xl font-semibold text-neutral-200">{title}</h3>
          <p className=" text-sm sm:text-base leading-relaxed font-poppins text-neutral-400 hidden sm:block ">
            {description}
          </p>

          <div className="mt-4 flex gap-2 flex-wrap justify-center">
            {icon}
          </div>

          {/* {buttons && buttons.length > 0 && (
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
          )} */}
        </div>
      </div>
    </div>
  );
};
