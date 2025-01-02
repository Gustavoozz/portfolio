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
      description: 'Sistema completo para gestão de eventos, oferecendo funcionalidades avançadas como cadastro de eventos, gerenciamento de usuários e análise de dados.',
      buttons: [
        { type: 'code', url: 'https://github.com/Gustavoozz/event-deploy' },
        { type: 'visit', url: 'https://event-deploy-lilac.vercel.app/' },
      ],
      icon: [
        { component: <FaReact className="text-black dark:text-white" size="30" />, name: "React" },
        { component: <RiJavascriptFill className="text-black dark:text-white" size="30" />, name: "JavaScript" },
        { component: <SiCsharp className="text-black dark:text-white" size="30" />, name: "C#" },
        { component: <DiMsqlServer className="text-black dark:text-white" size="30" />, name: "SQL Server" },
        { component: <SiFramer className="text-black dark:text-white" size="30" />, name: "Framer Motion" },
        { component: <FaCss3Alt className="text-black dark:text-white" size="30" />, name: "CSS3" },
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
        { component: <FaReact className="text-black dark:text-white" size="30" />, name: "React" },
        { component: <RiJavascriptFill className="text-black dark:text-white" size="30" />, name: "JavaScript" },
        { component: <FaCss3Alt className="text-black dark:text-white" size="30" />, name: "CSS3" },
        { component: <FaHtml5 className="text-black dark:text-white" size="30" />, name: "HTML5" },
      ],
      image: '/images/todolist-image.png'
    },
    {
      id: 3,
      title: 'TechSchool',
      description: 'Aplicativo mobile para gestão de alunos e professores, integrado a um sistema de agenda eficiente, além de gestão de tarefas.',
      buttons: [
        { type: 'code', url: 'https://github.com/Gustavoozz/tecschool' }
      ],
      icon: [
        { component: <LiaReact className="text-black dark:text-white" size="30" />, name: "React Native" },
        { component: <RiJavascriptFill className="text-black dark:text-white" size="30" />, name: "JavaScript" },
        { component: <SiStyledcomponents className="text-black dark:text-white" size="40" />, name: "Styled Components" },
        { component: <PiFileCSharpBold className="text-black dark:text-white" size="30" />, name: "C#" },
        { component: <VscAzure className="text-black dark:text-white" size="30" />, name: "Azure Services" },
        { component: <FaGitAlt className="text-black dark:text-white" size="30" />, name: "GIT" },
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
        { component: <FaReact className="text-black dark:text-white" size="30" />, name: "React" },
        { component: <RiJavascriptFill className="text-black dark:text-white" size="30" />, name: "JavaScript" },
        { component: <RiTailwindCssFill className="text-black dark:text-white" size="40" />, name: "Tailwind CSS" },
        { component: <BsFiletypeJson className="text-black dark:text-white" size="30" />, name: "JSON Server" },
        { component: <VscAzure className="text-black dark:text-white" size="30" />, name: "Azure Services" },
        { component: <VscAzureDevops className="text-black dark:text-white" size="30" />, name: "Azure DevOps" },
        { component: <FaGitAlt className="text-black dark:text-white" size="30" />, name: "GIT" },
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
        { component: <LiaReact className="text-black dark:text-white" size="30" />, name: "React Native" },
        { component: <RiJavascriptFill className="text-black dark:text-white" size="30" />, name: "JavaScript" },
        { component: <SiStyledcomponents className="text-black dark:text-white" size="40" />, name: "Styled Components" },
        { component: <PiFileCSharpBold className="text-black dark:text-white" size="30" />, name: "C#" },
        { component: <VscAzure className="text-black dark:text-white" size="30" />, name: "Azure Services" },
        { component: <FaGitAlt className="text-black dark:text-white" size="30" />, name: "GIT" },
        { component: <DiMsqlServer className="text-black dark:text-white" size="30" />, name: "SQL Server" },
      ],
      image: '/images/vitalhub-image.png'
    },
    {
      id: 6,
      title: 'Checkpoint',
      description: 'Um sistema que viabiliza a administração de estagiários, oferecendo: Controle de frequência, geração de relatórios e análise de métricas via Dashboard.',
      buttons: [
        { type: 'code', url: 'https://github.com/Gustavoozz/checkpoint' }
      ],
      icon: [
        { component: <SiMongodb className="text-black dark:text-white" size="30" />, name: "Mongo DB" },
        { component: <BiLogoTypescript className="text-black dark:text-white" size="30" />, name: "TypesScript" },
        { component: <RiTailwindCssFill className="text-black dark:text-white" size="40" />, name: "Tailwind CSS" },
        { component: <PiFileCSharpBold className="text-black dark:text-white" size="30" />, name: "C#" },
        { component: <VscAzure className="text-black dark:text-white" size="30" />, name: "Azure Services" },
        { component: <FaGitAlt className="text-black dark:text-white" size="30" />, name: "GIT" },
        { component: <DiMsqlServer className="text-black dark:text-white" size="30" />, name: "SQL Server" },
        { component: <VscAzureDevops className="text-black dark:text-white" size="30" />, name: "Azure DevOps" },
        { component: <RiNextjsFill className="text-black dark:text-white" size="30" />, name: "Next JS" },
      ],
      image: '/images/checkpoint-image.png'
    },
  ]);


  return (
    <div className='flex flex-col'>
      <div className='w-full h-[150px] flex justify-center'>
        <SubTitle styles='font-bold font-poppins text-[34px] mt-20 text-center border-red-500'>Projetos</SubTitle>
      </div>
      <div
        id='projects'
        className="h-screen flex ml-6 sm:ml-20 justify-center items-center"
      >
        <Swiper
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 3,
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
          className="h-[100%] sm:h-[70%] mb-10"
        >
          {projectCard.length > 0 ? (
            projectCard.map((item) => (
              <SwiperSlide key={item.id} className="flex justify-center mb-0 sm:mb-10">
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
            <SwiperSlide className="flex justify-center items-center">
              <div>Sem projetos disponíveis</div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>
    </div>
  );
};
