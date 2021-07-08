import styled from "styled-components";

export const  Head = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 60px;
    background-color: brown;

    a{
        text-decoration: none;
        cursor: pointer;
    }

    a:first-child{
        font-size: 30px;
        color: #FFF;    
    }

    a:last-child{
        background-color: #FFF;
        border-radius: 5px;
        padding: 5px;
        font-weight: bold;
        color: #000;    
    }
`;
