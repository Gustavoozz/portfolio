"use client";
import { SubTitle } from '@/components/text/text';
import { Swiper, SwiperSlide } from 'swiper/react';
import { skills } from '@/data/skills';
import 'swiper/swiper-bundle.css'; 
// import { Navigation } from 'swiper/modules';

export const SkillSection = () => {
  return (
    <section id="skills" className='w-full h-[385px] mt-10'>
      <div className='flex justify-center'>
         <SubTitle styles='font-bold uppercase text-xl'>Experience with</SubTitle>
      </div>
     
      <div className='flex flex-row justify-center  w-full h-full items-center'>
        <Swiper
        spaceBetween={50}
          slidesPerView={7} 
          className='w-[65%]' 
          // modules={[Navigation]}
          // navigation={true} 
        >
          {skills.map((item, index) => (
            <SwiperSlide key={index} style={{ width: 'auto', height: 'auto' }}>
              <div className='flex flex-col justi fy-center  items-center hover:scale-125  h-28  transition-all duration-700'>
                {item.icon}
                <span className='text-sm mt-2'>{item.name}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
