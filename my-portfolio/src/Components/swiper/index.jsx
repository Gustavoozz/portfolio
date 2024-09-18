import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { ProjectCard } from '../../Components/projectCard';
import './index.css';
import { Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';
import eventImage from '../../assets/event-image.png';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiCsharp, SiFramer } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';

export const SwiperProject = () => {
  const [projectCard, setProjectCard] = useState([
    {
      id: 1,
      title: 'Event Plus',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus sem, mattis et vulputate non, semper eget ligula. Pellentesque neque quam, ultricies non vehicula eget, posuere quis tellus...',
      image: { src: eventImage },
      buttons: ['code', 'visit'],
      icon: [
        <FaReact fill="#FFFFFF" size="30" />,
        <SiCsharp fill="#FFFFFF" size="30" />,
        <DiMsqlServer fill="#FFFFFF" size="30" />,
        <SiFramer fill="#FFFFFF" size="30" />,
        <FaCss3Alt fill="#FFFFFF" size="30" />
      ],
    },
    {
      id: 2,
      title: 'To do List',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus sem, mattis et vulputate non, semper eget ligula. Pellentesque neque quam, ultricies non vehicula eget, posuere quis tellus...',
      buttons: ['code'] 
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus sem, mattis et vulputate non, semper eget ligula. Pellentesque neque quam, ultricies non vehicula eget, posuere quis tellus...',
      buttons: ['code'] 
    },
    {
      id: 4,
      title: 'Project 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus sem, mattis et vulputate non, semper eget ligula. Pellentesque neque quam, ultricies non vehicula eget, posuere quis tellus...',
      buttons: ['code'] 
    }
  ]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 1.0 }}
      animate={{ opacity: 1, y: 0 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 50, scale: 0.5 }}
      transition={{ duration: 0.5, type: 'spring', stiffness: 50 }}
      className="h-screen flex flex-row justify-center items-center mt-6 sm:mt-4 md:mt-4 lg:mt-6"
    >
      <Swiper
        spaceBetween={30}
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
        className="w-full "
      >
        {projectCard.length > 0 ? (
          projectCard.map((item) => (
            <SwiperSlide key={item.id} className="py-10 flex justify-center ">
              <ProjectCard
                title={item.title}
                description={item.description}
                image={item.image}
                icon={item.icon}
                buttons={item.buttons} // Passando a prop buttons
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
