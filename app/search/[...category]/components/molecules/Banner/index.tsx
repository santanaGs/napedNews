import Description from "../../atoms/Description";
import Title from "../../atoms/Title";
import { BannerS, FilterS } from "./styles";

interface BannerProps {
    title: string | undefined;
    description: string;
}

export default function Banner({title, description} :BannerProps){
    return(
        <BannerS>
            <FilterS>
                <Title title={title}/>
                <Description description={description}/>
            </FilterS>
        </BannerS>
    )
}