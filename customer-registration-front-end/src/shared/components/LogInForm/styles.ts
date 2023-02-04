import styled from "styled-components";

export const LogInContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
width: 35rem;
height: 100vh;
max-height: 50rem;
padding: .625rem;

`

export const ContentButton = styled.div`
display: flex;
justify-content: space-between;
`

export const ContentTitle = styled.div`
display: flex;
flex-direction: column;
gap: .625rem;

    h2 {
        font-size: 1.6rem;
    }

    span {
        font-size: .9375rem;
        font-weight: 500;
        color: #616161;
    }

`

export const ContinueWith = styled.div`
display: flex;
align-items: center;
justify-content: center;

    span {
        font-weight: 500;
        color: #616161;
        font-size: .875rem;
        text-align: center;

        padding: 0rem .625rem;
        width: 100%;
    }
    div {
        width: 90%;
        height: .0938rem;
        background-color: #61616172;
    }
`
export const ContentRemember = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const ForgotPassword = styled.span`
color: #1976d2;
font-weight: 500;

    :hover {
        cursor: pointer;
        text-decoration: underline #1976d2;
    }

     span {
        font-size: .875rem;
    }
`

export const CreateAccount = styled.p`
text-align: center;

    span {
        font-weight: 500;
        color: #1976d2;

        :hover {
            cursor: pointer;
            text-decoration: underline #1976d2;
        }
    }
`