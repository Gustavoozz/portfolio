import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { tv } from "tailwind-variants";
import { ReactNode } from "react"; // Importe ReactNode

type TooltipComponentProps = {
  text: string;
  maxLength?: number;
  triggerClassName?: string; // Para permitir estilos externos
  children: ReactNode; // Adicione a prop children
};

const tooltipTriggerStyles = tv({
  base: "text-black w-max",
  variants: {
    isTruncated: {
      true: "cursor-pointer font-semibold", // Estilo quando o texto está truncado
      false: "font-normal", // Estilo quando o texto não está truncado
    },
  },
});

const TooltipComponent = ({ text, maxLength = 10, triggerClassName, children }: TooltipComponentProps) => {
  const isTextoMaiorQueOEsperado = text.length > maxLength;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={tooltipTriggerStyles({
            isTruncated: isTextoMaiorQueOEsperado,
            className: triggerClassName,
          })}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent className="font-poppins text-dark dark:text-white !mr-0">
          {text}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipComponent;
