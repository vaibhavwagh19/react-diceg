import styled from "styled-components"

export const Button = styled.button`
    padding: 10px 18px;
    gap: 10px;
    min-width: 220px;
    height: 44px;
    border-radius: 4px;
    border: 1px solid transparent;
    cursor: pointer;

    background: black;
    color: white;
    font-size: 1rem;
    transition: transform 0.1s ease-in-out;


    &:active{
        transform: scale(0.95);
    }
    &:hover{
        border: 1px solid black;
        background: white;
        color: black;
    }
`
export const OutlineButton = styled(Button)`
    padding: 10px 18px;
    gap: 10px;
    min-width: 220px;
    height: 44px;
    border-radius: 4px;
    border: 1px solid black;
    cursor: pointer;

    background: white;
    color: black;
    font-size: 1rem;
    transition: transform 0.1s ease-in-out;


    &:active{
        transform: scale(0.95);
    }
    &:hover{
        border: 1px solid black;
        background: #212121 ;
        color: white;
    }
`
