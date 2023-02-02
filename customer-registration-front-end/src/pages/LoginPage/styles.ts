import styled from "styled-components";

export const ContentLoginPage = styled.div`
display: flex;
align-items: center;
justify-content: center;

background-color: #8EC5FC;
background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
width: 100vw;
height: 100vh;

    .logInCarousel {
        display: flex;
        background-color: #ffff;

        width: 50%;
        border-radius: 5px;
    }
    .sc-bcXHqe {
        display: none;
    }

    @media (min-width: 768px) {
        .sc-bcXHqe {
            display: block;
        }
    }
`