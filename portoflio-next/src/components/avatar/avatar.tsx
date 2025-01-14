
import Image from "next/image";
import TooltipComponent from '../tooltipComponent';

interface AvatarContainerProps {
    image: string;
    width: number;
    height: number;
    styles?: string;
    tooltipText?: string; // Texto para o tooltip
}

export const AvatarContainer: React.FC<AvatarContainerProps> = ({
    styles,
    image,
    width,
    height,
    tooltipText,
}) => {
    return (
        <TooltipComponent text={tooltipText || ""}>
            <div
                className={`w-[250px] h-[250px] border-2 border-gray-300 rounded-full overflow-hidden flex items-center justify-center mb-4 hover:-translate-y-2 duration-300 ${styles}`}
            >
                <Image
                    src={image}
                    alt="Descrição da imagem"
                    width={width}
                    height={height}
                    className="object-cover"
                />
            </div>
        </TooltipComponent>
    );
};
