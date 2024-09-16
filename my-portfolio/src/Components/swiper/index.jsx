// src/ComplexSwiper.js
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { ProjectCard } from '../../Components/projectCard';
import './index.css'
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion'
import eventImage  from '../../assets/event-image.png'
import { FaReact } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { SiFramer } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

export const SwiperProject = () => {
  const [projectCard, setProjectCard] = useState([
    { id: 1, title: 'Event Plus', 
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus sem, mattis et vulputate non, semper eget ligula. Pellentesque neque quam, ultricies non vehicula eget, posuere quis tellus...', 
      image: {src: eventImage}, 
      icon: [<FaReact fill="#FFFFFF" size="30" />, <SiCsharp fill="#FFFFFF" size="30"/>, <DiMsqlServer fill="#FFFFFF" size="30"/>, <SiFramer fill="#FFFFFF" size="30"/>, <FaCss3Alt fill="#FFFFFF" size="30"/>]},
      
    { id: 2, title: 'To do List', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus sem, mattis et vulputate non, semper eget ligula. Pellentesque neque quam, ultricies non vehicula eget, posuere quis tellus...',  },
    { id: 3, title: 'Project 3', description: 'Description 3' },
    { id: 4, title: 'Project 4', description: 'Description 4' }
  ]);

  return (
    <motion.div 
    initial={{ opacity: 0, y: -50, scale: 1.0}} 
    animate={{ opacity: 1, y: 0 }} 
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    exit={{ opacity: 0, y: 50, scale: 0.5 }} 
    transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
    className="flex flex-row justify-center items-center relative mt-12">
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        spaceBetween={30} // Ajusta o espaço entre os slides se necessário
        className="w-full max-w-lg"
      >
        {projectCard.length > 0 ? (
          projectCard.map((item) => (
            <SwiperSlide key={item.id} className="py-10">
              <ProjectCard
                title={item.title}
                description={item.description}
                image={item.image}
                icon={item.icon}
              />
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide className="flex justify-center items-center">
            <div>Sem projetos disponíveis</div>
          </SwiperSlide>
        )}
      </Swiper>
    </motion.div>
  );
};
