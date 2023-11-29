import Description from "../../atoms/Description";
import ImageNews from "../../atoms/Image";
import { DivS } from "./styles";

interface BodyProps {
    path: string,
    pathTwo: string,
    descriptionOne: string,
    descriptionTwo: string,
    descriptionTree: string,
}

export default function BodyS({
    path,
    pathTwo,
    descriptionOne,
    descriptionTwo,
    descriptionTree
}: BodyProps) {
    return (
        <>
            <ImageNews path={path} height={450} />
            <DivS>
                <Description description={descriptionOne} />
                <Description description={descriptionTwo} />
            </DivS>
            <ImageNews path={pathTwo} height={349}/>
            <Description description={descriptionTree} />
        </>
    )
}