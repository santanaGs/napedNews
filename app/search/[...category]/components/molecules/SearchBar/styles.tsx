import Image from "next/image";
import styled from "styled-components";

export const SearchInput = styled.input`
    width: 100%;
    padding: 1rem;
    border: none;
    outline: none;
    background-color: #282830;

    ::placeholder{
        color: #989898;
        text-align: right;
        font-family: Lexend Deca;
        font-size: 1.25rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    color: #989898; 
    font-family: Lexend Deca;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

export const SearchDiv = styled.div`
    position: relative;
    margin-top: 2.6rem;
`

export const Icon = styled(Image)`
    position: absolute;
    right: 2%;
    top: 25%;
`