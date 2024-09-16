import { motion } from "framer-motion"
import { SwiperProject } from "../../Components/swiper"
import { useInView } from 'react-intersection-observer';
import { Header } from "../../Components/header";

export const Projects = () => {
  // const { ref: sectionRef, inView } = useInView({
  //   triggerOnce: false, // Permite que a animação seja acionada várias vezes
  //   threshold: 0.5, // Proporção da seção visível para disparar o evento
  // });

  return(
    <motion.section
    className="h-screen bg-bkgGradient"
  >
    <Header />
    
    <div className="flex flex-col h-auto">
    <SwiperProject />
    </div>

    
  </motion.section>
  )
}