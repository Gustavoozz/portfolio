"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaReact, FaCss3Alt } from 'react-icons/fa';
import { SiCsharp, SiFramer } from 'react-icons/si';
import { DiMsqlServer } from 'react-icons/di';
import { FaHtml5 } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { ProjectCard } from '@/components/card/card';
import { RiJavascriptFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { BsFiletypeJson } from "react-icons/bs";
import { LiaReact } from "react-icons/lia";
import { RiTailwindCssFill } from "react-icons/ri";
import { PiFileCSharpBold } from "react-icons/pi";
import { SiMongodb } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { VscAzureDevops } from "react-icons/vsc";
import { BiLogoTypescript } from "react-icons/bi";
import { VscAzure } from "react-icons/vsc";
import { SubTitle } from '@/components/text/text';


export const ProjectSection = () => {
  const [projectCard] = useState([
    {
      id: 1,
      title: 'Event Plus',
      description: 'Sistema completo para gestão de eventos, oferecendo funcionalidades avançadas como cadastro de eventos e gerenciamento de usuários.',
      buttons: [
        { type: 'code', url: 'https://github.com/Gustavoozz/event-deploy' },
        { type: 'visit', url: 'https://event-deploy-lilac.vercel.app/' },
      ],
      icon: [
        { component: <FaReact className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "React" },
        { component: <RiJavascriptFill className="text-black dark:text-white text-[20px] sm:text-[30px]" />, name: "JavaScript" },
        { component: <SiCsharp className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "C#" },
        { component: <DiMsqlServer className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "SQL Server" },
        { component: <SiFramer className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "Framer Motion" },
        { component: <FaCss3Alt className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "CSS3" },
      ],
      image: '/images/event-image.png'
    },
    {
      id: 2,
      title: 'To do List',
      description: 'Aplicação prática para organização pessoal, permitindo criar, editar, visualizar e excluir tarefas de maneira simples e eficiente.',
      buttons: [
        { type: 'code', url: 'https://github.com/Gustavoozz/toDo-list' }
      ],
      icon: [
        { component: <FaReact className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "React" },
        { component: <RiJavascriptFill className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "JavaScript" },
        { component: <FaCss3Alt className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "CSS3" },
        { component: <FaHtml5 className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "HTML5" },
      ],
      image: '/images/todolist-image.png'
    },
    {
      id: 3,
      title: 'TechSchool',
      description: 'Aplicativo mobile para gestão de alunos e professores, integrado a um sistema de agenda eficiente, gestão de tarefas e análise gráfica.',
      buttons: [
        { type: 'code', url: 'https://github.com/Gustavoozz/tecschool' }
      ],
      icon: [
        { component: <LiaReact className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "React Native" },
        { component: <RiJavascriptFill className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "JavaScript" },
        { component: <SiStyledcomponents className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "Styled Components" },
        { component: <PiFileCSharpBold className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "C#" },
        { component: <VscAzure className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "Azure Services" },
        { component: <FaGitAlt className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "GIT" },
      ],
      image: '/images/techschool-image.png'
    },
    {
      id: 4,
      title: 'Tech Connect',
      description: 'Plataforma social voltada para desenvolvedores e entusiastas de tecnologia, promovendo a interação e colaboração entre usuários.',
      buttons: [
        { type: 'visit', url: 'https://www.linkedin.com/feed/update/urn:li:activity:7259256883658575873/' }
      ],
      icon: [
        { component: <FaReact className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "React" },
        { component: <RiJavascriptFill className="text-black dark:text-white text-[30px] sm:text-[30px]" />, name: "JavaScript" },
        { component: <RiTailwindCssFill className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "Tailwind CSS" },
        { component: <BsFiletypeJson className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "JSON Server" },
        { component: <VscAzure className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "Azure Services" },
        { component: <VscAzureDevops className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "Azure DevOps" },
        { component: <FaGitAlt className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "GIT" },
      ],
      image: '/images/techconnect-image.png'
    },
    {
      id: 5,
      title: 'Vitalhub',
      description: 'Plataforma robusta para gerenciamento de consultas médicas, com funcionalidades abrangentes para médicos e pacientes.',
      buttons: [
        { type: 'code', url: 'https://github.com/Gustavoozz/vital_hub' }
      ],
      icon: [
        { component: <LiaReact className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "React Native" },
        { component: <RiJavascriptFill className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "JavaScript" },
        { component: <SiStyledcomponents className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "Styled Components" },
        { component: <PiFileCSharpBold className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "C#" },
        { component: <VscAzure className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "Azure Services" },
        { component: <FaGitAlt className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "GIT" },
        { component: <DiMsqlServer className="text-black dark:text-white text-[25px] sm:text-[30px]" />, name: "SQL Server" },
      ],
      image: '/images/vitalhub-image.png'
    },
    {
      id: 6,
      title: 'Checkpoint',
      description: 'Um sistema focado na administração de estagiários, oferecendo: Geração de relatórios, análise de métricas via Dashboard, entre outros.',
      buttons: [
        { type: 'code', url: 'https://github.com/Gustavoozz/checkpoint' }
      ],
      icon: [
        { component: <SiMongodb className="text-black dark:text-white text-[15px] sm:text-[30px]" />, name: "Mongo DB" },
        { component: <BiLogoTypescript className="text-black dark:text-white text-[20px] sm:text-[30px]" />, name: "TypesScript" },
        { component: <RiTailwindCssFill className="text-black dark:text-white text-[20px] sm:text-[30px]" />, name: "Tailwind CSS" },
        { component: <PiFileCSharpBold className="text-black dark:text-white text-[20px] sm:text-[30px]" />, name: "C#" },
        { component: <VscAzure className="text-black dark:text-white text-[20px] sm:text-[30px]" />, name: "Azure Services" },
        { component: <FaGitAlt className="text-black dark:text-white text-[20px] sm:text-[30px]" />, name: "GIT" },
        { component: <DiMsqlServer className="text-black dark:text-white text-[20px] sm:text-[30px]" />, name: "SQL Server" },
        { component: <RiNextjsFill className="text-black dark:text-white text-[20px] sm:text-[30px]" />, name: "Next JS" },
      ],
      image: '/images/checkpoint-image.png'
    },
  ]);

  return (
    <div className="flex flex-col">
      <div className="w-full h-[150px] flex justify-center mb-0 sm:mb-12">
        <SubTitle styles="font-bold font-poppins text-[34px] mt-20 text-center">
          Projetos
        </SubTitle>
      </div>

      <div id="projects" className="h-full w-full flex justify-center">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={50}
          loop={true}
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          className="w-[90%] custom-swiper "
          breakpoints={{
            0: {
              slidesPerView: 1,
              centeredSlides: false,
              loop: false,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 3,
              centeredSlides: true,
              loop: true,
              spaceBetween: 50,
            },
          }}
        >

          {projectCard.length > 0 ? (
            projectCard.map((item) => (
              <SwiperSlide
                key={item.id}
                className="custom-slide  w-[100%] sm:w-[500px] h-full flex items-center justify-center"
              >
                <ProjectCard
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  image={item.image}
                  buttons={item.buttons}
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide className="h-full flex items-center justify-center">
              <div>Sem projetos disponíveis</div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      <style jsx global>{`
  .custom-swiper .swiper-slide {
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 0.5;
    transform: scale(0.9);
  }

  .custom-swiper .swiper-slide.swiper-slide-active {
    opacity: 1;
    transform: scale(1);
  }
`}</style>
    </div >
  );
};