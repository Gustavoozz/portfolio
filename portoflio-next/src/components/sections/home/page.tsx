// import { Button } from '@/components/button/button';
import { AvatarContainer } from '@/components/avatar/avatar';
import { ButtonDownloadCV, SocialMediaButtons } from '@/components/button/button';
import { Paragraph, SubTitle, Title } from '@/components/text/text';
// import { MdEmail } from "react-icons/md";
// import { Projects } from '../projects/page';
// import { IoLocationOutline } from "react-icons/io5";

const HomePage = () => {
  // const Buttons = [
  //   { text: 'Social Media', icon: <TbBrandGithubFilled size="16" fill="black" /> },
  //   { text: 'Curriculum', icon: <IoCloudDownload size="16" fill="black" /> },
  //   // { text: 'Contact Me', icon: <MdEmail size="16" fill="#E7E7E7"/> },
  // ];

  return (
    <main id='home' className="bg-transparent flex flex-col min-h-screen">
      <div className="flex flex-grow items-center justify-center mt-14 px-8 sm:px-20">
        <div className="flex flex-col gap-4 items-center">
          <AvatarContainer
            width={250}
            height={250}
            image='/images/real-photo.jpg'
            tooltipText="Olha eu aqui!"
          />
          <SocialMediaButtons />
          <Title>Olá, eu sou Gustavo Magalhães e sou</Title>
          <SubTitle>Desenvolvedor Fullstack.</SubTitle>
          <Paragraph styles="w-full max-w-screen-md">
            Eu sou Gustavo, tenho 19 anos e sou apaixonado por tecnologia. Atuo nas áreas de front-end e back-end, sempre buscando aprender mais. Estou aberto a novos desafios e pronto para colaborar em projetos incríveis que envolvam desenvolvimento e inovação na área de tecnologia...
          </Paragraph>

          <ButtonDownloadCV />

          {/* <div className='flex mt-2 gap-2'>
          <IoLocationOutline size="24" fill="#E7E7E7"/>
          <p className=''>São Paulo, Brasil</p>
          </div> */}

          {/* <div className="mt-4 mb-24 flex gap-4">
            {Buttons.map((button, index) => (
              <SocialMediaButtons key={index} icon={button.icon}>
                {button.text}
              </SocialMediaButtons>
            ))}
          </div> */}
        </div>
      </div>

    </main>
  );
};

export default HomePage;
