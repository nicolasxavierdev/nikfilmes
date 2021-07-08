import styled from "styled-components";

export const Favorito = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ul li {
        padding: 0;
        list-style: none;
        min-width: 600px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 10px;
    }

    span {
        font-size: 23px;
    }

    button {
        margin-left: 10px;
    }

    ul li div a {
        text-decoration: none;
        color: brown;
    }
`;