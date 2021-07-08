import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 800px;

    article {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fff;
        margin: 15px;
        padding: 15px;
        border-radius: 5px;
    }

    strong {
        padding-bottom: 15px;
        font-size: 22px;
    }

    img {
        width: 900px;
        max-height: 350px;
    }

    article a {
        text-decoration: none;
        color: #fff;
        background-color: brown;
        font-size: 25px;
        width: 100%;
        text-align: center;
        padding-top: 10px;
        padding-bottom: 10px;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
`;