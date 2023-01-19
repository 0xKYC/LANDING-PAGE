import Image from "next/image";

interface SvgIconProps {
  src: string;
  width: string;
  height: string;
}

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <Image src={`/svg/${src}`} alt={src} width={width} height={height} />
);
