// import Image from 'next/image';

interface AvatarContainerProps {
    styles?: string
}

export const AvatarContainer:React.FC<AvatarContainerProps> = ({ styles }) => {
    return (
        <div className={`w-[250px] h-[250px] border border-gray-500 rounded-full overflow-hidden flex items-center justify-center mb-4 ${styles}`}>
            {/* <Image 
                src="/avatarimage.png" 
                alt="Descrição da imagem"
                width={250} 
                height={250} 
                className='object-cover' 
            /> */}
        </div>
    );
}
