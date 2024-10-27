"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiCsharp, SiFramer } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { ProjectCard } from '@/components/card/card';
import { SubTitle } from '@/components/text/text';

export const ProjectSection = () => {
  const [projectCard] = useState([
    {
      id: 1,
      title: 'Event Plus',
      description: 'Aplicação para gestão de eventos.',
      buttons: ['code', 'visit'],
      icon: [
        <FaReact key={Math.random()} fill="#FFFFFF" size="30" />,
        <SiCsharp key={Math.random()} fill="#FFFFFF" size="30" />,
        <DiMsqlServer key={Math.random()} fill="#FFFFFF" size="30" />,
        <SiFramer key={Math.random()} fill="#FFFFFF" size="30" />,
        <FaCss3Alt key={Math.random()} fill="#FFFFFF" size="30" />
      ],
    },
    {
      id: 2,
      title: 'To do List',
      description: 'Aplicação para gerenciamento de tarefas.',
      buttons: ['code'] 
    },
    {
      id: 3,
      title: 'TechSchool',
      description: 'Aplicação mobile para gerenciamento de alunos e professores.',
      buttons: ['code'] 
    },
    {
      id: 4,
      title: 'Tech Connect',
      description: 'Rede social para desenvolvedores e amantes de tecnologia.',
      buttons: ['code'] 
    }
  ]);

  return (
    <div className='flex flex-col'>
      <div className='w-full h-auto flex justify-center'>
        <SubTitle styles='font-bold uppercase text-xl mt-20 text-center'>Projetos</SubTitle>
      </div>
      <div
        id='projects'
        className="h-screen flex justify-center items-center"
      >
        <Swiper
          slidesPerView={3}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10, 
            },  
            768: {
              slidesPerView: 1,
              spaceBetween: 20, 
            },
            769: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="w-full"
        >
          {projectCard.length > 0 ? (
            projectCard.map((item) => (
              <SwiperSlide key={item.id} className="flex justify-center mb-10">
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  buttons={item.buttons} 
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className="flex justify-center items-center">
              <div>Sem projetos disponíveis</div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};
