// src/ComplexSwiper.js
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { ProjectCard } from '../../Components/projectCard';
import './index.css'
import { Pagination } from 'swiper/modules';

export const Projects = () => {
  const [projectCard, setProjectCard] = useState([
    { id: 1, title: 'Project 1', description: 'Description 1' },
    { id: 2, title: 'Project 2', description: 'Description 2' },
    { id: 3, title: 'Project 3', description: 'Description 3' },
    { id: 4, title: 'Project 4', description: 'Description 4' }
  ]);



  return (
    
    <div className="flex flex-row justify-center items-center min-h-screen">

      <Swiper
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        
        spaceBetween={30} // Ajusta o espaço entre os slides se necessário
        className="w-full max-w-lg" // Ajusta a largura máxima do Swiper
        
      >
        {projectCard.length > 0 ? (
          projectCard.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center items-center">
              <ProjectCard
                title={item.title}
                description={item.description}
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
  );
};
