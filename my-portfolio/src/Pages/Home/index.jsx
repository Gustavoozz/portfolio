import { Button } from '../../Components/button/button';
import { Header } from '../../Components/header/index';
import { Paragraphy, Title } from '../../Components/text';
import { SubTitle } from '../../Components/text';
import { motion } from 'framer-motion'

// Import dos ícones:
import { IoCloudDownload } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";

export const Home = () => {
  // Botões:
  const Buttons = [
    { text: 'Social Media', icon: <TbBrandGithubFilled size="16" fill="#E7E7E7"/>},
    { text: 'Curriculum', icon:  <IoCloudDownload size="16" fill="#E7E7E7"/>},
    { text: 'Contact Me', icon: <MdEmail size="16" fill="#E7E7E7"/>},
  ]
  return (
    <main className="bg-bkgGradient h-screen flex flex-col">
      <Header />

      <div className="flex flex-grow items-center px-20 mb-10">

        <motion.div   
          initial={{ opacity: 0, y: -50, scale: 0.6}} 
          animate={{ opacity: 1.0, y: 0 }} 
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.5 }} 
          transition={{ duration: 0.5, type: "spring", stiffness: 50 }}
          className="flex flex-col gap-4"
        >

          <Title>Hi, I'm Gustavo Magalhães</Title>
          <SubTitle>Fullstack Developer.</SubTitle>
          <Paragraphy styles="w-[50%]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus sem, mattis et vulputate non, semper eget ligula. Pellentesque neque quam, ultricies non vehicula eget, posuere quis tellus...</Paragraphy>

          <div className="mt-8 flex gap-4">
          {Buttons.map((button, index) => (
          <Button key={index} styles={button.styles} icon={button.icon}>
            {button.text}
          </Button>
        ))}
          </div>
       
        </motion.div>

      </div>
    </main>
  );
};
