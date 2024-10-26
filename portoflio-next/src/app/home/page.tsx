// import { Button } from '@/components/button/button';
import { AvatarContainer } from '@/components/avatar/avatar';
import { Button } from '@/components/button/button';
import { Paragraph, SubTitle, Title } from '@/components/text/text';
import { IoCloudDownload } from "react-icons/io5";
// import { MdEmail } from "react-icons/md";
import { TbBrandGithubFilled } from "react-icons/tb";
// import { Projects } from '../projects/page';
// import { IoLocationOutline } from "react-icons/io5";

const HomePage = () => {
  const Buttons = [
    { text: 'Social Media', icon: <TbBrandGithubFilled size="16" fill="black"/> },
    { text: 'Curriculum', icon: <IoCloudDownload size="16" fill="black"/> },
    // { text: 'Contact Me', icon: <MdEmail size="16" fill="#E7E7E7"/> },
  ];

  return (
    <main className="bg-transparent flex flex-col min-h-screen">
     

      <div className="flex flex-grow items-center justify-center mt-14 px-8 sm:px-20">
        <div className="flex flex-col gap-4 items-center">
          <AvatarContainer />
          <Title>Olá, eu sou Gustavo Magalhães e sou</Title>
          <SubTitle>Desenvolvedor Fullstack.</SubTitle>
          <Paragraph styles="w-full max-w-screen-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lectus sem, mattis et vulputate non, semper eget ligula. Pellentesque neque quam, ultricies non vehicula eget, posuere quis tellus...
          </Paragraph>

          {/* <div className='flex mt-2 gap-2'>
          <IoLocationOutline size="24" fill="#E7E7E7"/>
          <p className=''>São Paulo, Brasil</p>
          </div> */}
         
          <div className="mt-4 mb-24 flex gap-4">
            {Buttons.map((button, index) => (
              <Button key={index} icon={button.icon}>
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
           
    </main>
  );
};

export default HomePage;
