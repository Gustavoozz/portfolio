"use client";
import { AvatarContainer } from '@/components/avatar/avatar'
import { Paragraph, SubTitle } from '@/components/text/text'

export const AboutSection = () => {
  return (
    <section id='about' className='w-full h-[550px] '>
      <div className='flex flex-col items-center justify-center '>
         <SubTitle styles='font-bold uppercase text-xl mt-10 mb-24'>About me</SubTitle>

          <div className='flex items-start justify-between'>
           <Paragraph styles='w-[50%] text-start ml-[150px] mt-[130px]'>Oi! Meu nome é Gustavo Magalhães, sou apaixonado por tecnologia desde o momento em que nasci, em 2005. Desde pequeno sempre interessei pelos conceitos de hardware e software, conceitos que me fizeram seguir uma carreira profissional dedicada a programação e desenvolvimento de sistemas. Sempre busco aprender cada dia mais sobre novas tecnologias que podem me auxiliar no meu trabalho e busco me manter sempre atualizado sobre elas.</Paragraph>

           <AvatarContainer styles='mr-[150px] w-[400px] h-[400px]'/>
         </div>
         
      </div>      
    </section>
  )
}