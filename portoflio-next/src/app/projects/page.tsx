import { SwiperProject } from '@/components/swiper/swiper'
// import { motion } from "framer-motion"


export const Projects = () => {
  // const { ref: sectionRef, inView } = useInView({
  //   triggerOnce: false, // Permite que a animação seja acionada várias vezes
  //   threshold: 0.5, // Proporção da seção visível para disparar o evento
  // });

  return(
    <div
    className="w-full min-h-screen bg-bkgGradient overflow-hidden"
  >
  
    
    <div className="flex flex-col ">
    <SwiperProject />
    </div>

    
  </div>
  )
}