import React from 'react';
import { ButtonAccess } from '../button/button';
import { TextLink } from '../text/text';
import Image from 'next/image';
import TooltipComponent from '@/components/tooltipComponent';

interface Button {
  type: string;
  url: string;
}

interface CardProps {
  title: string;
  description: string;
  icon: Array<{ component: React.ReactNode; name: string }>;
  image: string;
  buttons: Button[];
}

export const ProjectCard: React.FC<CardProps> = ({ title, description, icon, image, buttons }) => {
  return (
    <div className="w-80 sm:w-96 h-[70%] sm:h-[100%] duration-500 group overflow-hidden relative bg-slate-50 dark:bg-neutral-800 text-neutral-50 border font-poppins border-white p-4 flex flex-col justify-evenly rounded-2xl">
      <div className=" absolute blur duration-500 group-hover:blur-none w-72 h-72 rounded-full group-hover:translate-x-12 group-hover:translate-y-12 bg-sky-500 dark:bg-sky-900 right-1 -bottom-24" />
      <div className="absolute blur duration-500 group-hover:blur-none w-12 h-12 rounded-full group-hover:translate-x-12 group-hover:translate-y-2 bg-indigo-500 dark:bg-indigo-700 right-12 bottom-12" />
      <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-indigo-400 dark:bg-indigo-800 right-1 -top-12" />
      <div className="absolute blur duration-500 group-hover:blur-none w-24 h-24 bg-sky-700 rounded-full group-hover:-translate-x-12" />
      <div className="z-10 flex flex-col justify-evenly w-full h-full items-start">
        <div className="relative w-full h-48 sm:h-40 mb-4">
          {image && (
            <Image
              src={image}
              alt={title}
              width={384}
              height={192}
              className="rounded-xl object-cover w-full h-full"
            />
          )}
        </div>
        <span className="text-2xl font-semibold mt-4 text-mainColors-black dark:text-mainColors-white">{title}</span>
        <p className="text-mainColors-black dark:text-mainColors-white">{description}</p>

        <div className="mt-8 mb-4 flex gap-2 flex-wrap justify-center">
          {icon.map((iconItem, index) => (
            <TooltipComponent key={index} text={iconItem.name} triggerClassName="font-semibold pointer">
              {iconItem.component}
            </TooltipComponent>
          ))}
        </div>

        {buttons.length > 0 && (
          <div className="mt-4 flex gap-4 justify-center">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ButtonAccess>
                  <TextLink>{button.type === 'code' ? 'Código' : 'Visitar'}</TextLink>
                </ButtonAccess>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

