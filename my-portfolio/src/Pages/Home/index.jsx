import { Button } from '../../Components/button/button';
import { Header } from '../../Components/header/index';
import { Paragraphy, Title, SubTitle } from '../../Components/text';
import { motion } from 'framer-motion';
import { IoCloudDownload } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";
import { useInView } from 'react-intersection-observer';
import { Projects } from '../Projects';




export const Home = () => {
  // Botões
  const Buttons = [
    { text: 'Social Media', icon: <TbBrandGithubFilled size="16" fill="#E7E7E7"/> },
    { text: 'Curriculum', icon: <IoCloudDownload size="16" fill="#E7E7E7"/> },
    { text: 'Contact Me', icon: <MdEmail size="16" fill="#E7E7E7"/> },
  ];

  // Uso do react-intersection-observer para detectar quando a segunda seção entra em vista
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: false, // Permite que a animação seja acionada várias vezes
    threshold: 0.5, // Proporção da seção visível para disparar o evento
  });

  return (
    <main className="bg-bkgGradient flex flex-col">
      {/* Primeira Seção - Ocupa a tela inteira */}
      <motion.div
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        className="flex flex-col h-screen"
      >
        <Header />
        <div className="flex flex-grow items-center px-8 sm:px-20">
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.6 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            exit={{ opacity: 0, y: 50, scale: 0.5 }} 
            transition={{ duration: 1.8, type: "spring", stiffness: 50 }}
            className="flex flex-col gap-4"
          >
            <Title>Hi, I'm Gustavo Magalhães</Title>
            <SubTitle>Fullstack Developer.</SubTitle>
            <Paragraphy styles="w-full max-w-screen-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus sem, mattis et vulputate non, semper eget ligula. Pellentesque neque quam, ultricies non vehicula eget, posuere quis tellus...
            </Paragraphy>
            <div className="mt-8 flex gap-4">
              {Buttons.map((button, index) => (
                <Button key={index} styles={button.styles} icon={button.icon}>
                  {button.text}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Segunda Seção - Ocupa a tela inteira com animação de rolagem */}
      <motion.section
        ref={sectionRef}
        // initial={{ opacity: 0, y: 50 }} 
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }} 
        exit={{ opacity: 0, y: 50 }} 
        transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
        className="h-screen"
      >
        
        <div className="flex flex-col justify-center items-center">
        <Projects />
        </div>

        
      </motion.section>
    </main>
  );
};
