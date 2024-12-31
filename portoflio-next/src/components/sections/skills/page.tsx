"use client";
import { SubTitle } from '@/components/text/text';
import { Swiper, SwiperSlide } from 'swiper/react';
import { skills } from '@/data/skills';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { motion } from 'framer-motion';


export const SkillSection = () => {
  return (
    <section id="skills" className="w-full h-[385px] mt-24">
      <div className="flex justify-center">
        <SubTitle styles="font-bold font-poppins text-[34px]">Experiência com...</SubTitle>
      </div>

      <div className="flex flex-row justify-center w-full h-full items-center">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={7}
          className="w-[65%]"
        >
          {skills.map((item, index) => (
            <SwiperSlide key={index} style={{ width: 'auto', height: 'auto' }}>

              <motion.div
                className="flex flex-col justify-center items-center border-red-300  h-28  mb-10 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
              >
                {item.icon}
                <span className="text-sm mt-2 font-poppins">{item.name}</span>

              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
