import { ImageS } from "./styles";

interface ImageProps {
    path: string;
    height: number;
}

export default function ImageNews({ path, height }: ImageProps) {
    return (
        <>
            <ImageS
                src={path}
                alt="Image da noticia"
                width={1119}
                height={height}
                loading="lazy"
            />
        </>
    )
}