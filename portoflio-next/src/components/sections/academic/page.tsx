import { SubTitle } from "@/components/text/text"
import { AcademicTimeLine } from "@/components/timeline/timeline"
import { useEffect } from "react";
import AOS from 'aos';


export const AcademicSection = () => {

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
                  <SubTitle styles="font-bold font-poppins text-[34px] mb-24">Trajetória acadêmica</SubTitle>
            </div>
            <AcademicTimeLine />
        </div>
    )
}