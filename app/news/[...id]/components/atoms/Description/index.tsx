import { DescriptionNews } from "./styles";

interface DescriptonProps{
    description: string,
}


export default function Description({description} : DescriptonProps) {
    return(
        <DescriptionNews>
            {description}
        </DescriptionNews>
    )
}