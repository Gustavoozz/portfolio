import { AvatarContainer } from '@/components/avatar/avatar'
import { Paragraph, SubTitle } from '@/components/text/text'

export const AboutSection = () => {
  return (
    <section id='about' className='w-full h-[550px] mb-20 mt-0'>
      <div className='flex flex-col items-center justify-center '>
        <SubTitle styles='font-bold font-poppins text-[34px] mt-10 mb-24'>Sobre mim...</SubTitle>

        <div className='flex items-start justify-between'>
          <Paragraph styles='w-[90%] ml-4 text-center sm:w-[50%] m-0 sm:text-start sm:ml-[150px] sm:mt-[130px]'>Oi! Meu nome é Gustavo Magalhães, sou apaixonado por tecnologia desde o momento em que nasci, em 2005. Desde pequeno sempre interessei pelos conceitos de hardware e software, conceitos que me fizeram seguir uma carreira profissional dedicada a programação e desenvolvimento de sistemas. Sempre busco aprender cada dia mais sobre novas tecnologias que podem me auxiliar no meu trabalho e busco me manter sempre atualizado sobre elas.</Paragraph>

          <AvatarContainer
            width={450}
            height={450}
            image='/images/avatar-photo.png'
            styles='hidden sm:flex mr-[150px] w-[400px] h-[400px]'
            tooltipText="Olha eu aqui!"
          />
        </div>

      </div>
    </section>
  )
}