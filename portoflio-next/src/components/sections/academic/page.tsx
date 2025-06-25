import { SubTitle } from "@/components/text/text"
import { AcademicTimeLine } from "@/components/timeline/timeline"
import { useEffect, useState } from "react";
import AOS from 'aos';


export const AcademicSection = () => {
    const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('academic');
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

    useEffect(() => {
        AOS.init({
          duration: 800,  
          easing: 'ease-out-cubic', 
          once: true, 
        });
      }, []);

    return(
        <div className="flex flex-col justify-center items-center w-full min-h-screen py-24" id="academic">
            <div>
                  <SubTitle styles="h-16 font-bold font-poppins text-[34px] mb-24">Trajetória acadêmica</SubTitle>
            </div>
            <AcademicTimeLine />
        </div>
    )
}