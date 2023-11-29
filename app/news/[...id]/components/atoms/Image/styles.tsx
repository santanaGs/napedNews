import Image from "next/image";
import styled from "styled-components";

export const ImageS = styled(Image)`
    @media screen and (max-width: 768px){
        width: 100%;
        max-height: 349px;
        object-fit: cover;
    }
`