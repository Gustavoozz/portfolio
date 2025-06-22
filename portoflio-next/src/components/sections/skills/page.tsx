import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AvatarContainer } from '@/components/avatar/avatar';
import { Paragraph, SubTitle } from '@/components/text/text';
import { Swiper, SwiperSlide } from 'swiper/react';
import { skills } from '@/data/skills';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';

export const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about');
      if (section) {
        const { top } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section
      id='about'
      className='w-full h-[550px] mb-20 mt-0'
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className='flex flex-col items-center justify-center'>
        <SubTitle styles='font-bold font-poppins text-[34px] mt-10 mb-24'>Sobre mim...</SubTitle>

        <div className='flex items-start justify-between'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Paragraph styles='w-[90%] ml-4 text-center sm:w-[50%] m-0 sm:text-start sm:ml-[150px] sm:mt-[130px]'>
              Oi! Meu nome é Gustavo Magalhães, sou apaixonado por tecnologia desde o momento em que nasci, em 2005. Desde pequeno sempre me interessei pelos conceitos de hardware e software, conceitos que me fizeram seguir uma carreira profissional dedicada à programação e desenvolvimento de sistemas. Sempre busco aprender cada dia mais sobre novas tecnologias que podem me auxiliar no meu trabalho e busco me manter sempre atualizado sobre elas.
            </Paragraph>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <AvatarContainer
              width={450}
              height={450}
              image='/images/avatar-photo.png'
              styles='hidden sm:flex mr-[150px] w-[400px] h-[400px]'
              tooltipText="Olha eu aqui!"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export const SkillSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('skills');
      if (section) {
        const { top } = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        if (top < windowHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.section
      data-aos="fade-down-left"
      id="skills"
      className="w-full h-[385px] mt-24"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="flex justify-center">
        <SubTitle styles="font-bold font-poppins text-[34px] mb-12">Experiência com...</SubTitle>
      </div>

      <div className="flex flex-row justify-center w-full h-full items-center">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={4}
          breakpoints={{
            640: {
              slidesPerView: 7,
            },
          }}
          className="w-[80%] sm:w-[65%]"
        >
          {skills.map((item, index) => (
            <SwiperSlide key={index} style={{ width: 'auto', height: 'auto' }}>
              <motion.div
                className="flex flex-col justify-center items-center h-28 mb-12 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                whileHover={{
                  scale: 1.2
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeOut',
                }}
              >
                {item.icon}
                <span className="text-sm mt-2 font-poppins transition-colors duration-200">
                  {item.name}
                </span>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  );
};
