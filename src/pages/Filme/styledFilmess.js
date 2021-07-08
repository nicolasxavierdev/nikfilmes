import styled from "styled-components";

export const Filmess = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 900px;

    img {
        border-radius: 20px;
    }
    
    button {
        margin-right: 5px;
        margin-top: 15px;
        cursor: pointer;
        border-radius: 5px;
        border: 0;
        font-size: 20px;
        outline: none;
        padding: 12px;
        transition: all 0.5s;
    }

    button:hover{
        background-color: brown;
        transition: all 0.5s;
        color: #fff;
    }

    button a {
        text-decoration: none;
        color: #000;
    }

    a:hover {
        color: #fff;
    }
`;