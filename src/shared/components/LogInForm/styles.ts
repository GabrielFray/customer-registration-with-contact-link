import { Link } from "react-router-dom";
import styled from "styled-components";

export const LogInContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;

width: 30rem;
height: 100vh;
max-height: 50rem;
padding: 1.5rem;
border-radius: .3125rem;

background-color: #fff;
box-shadow: .75rem .75rem .3125rem -0.0625rem rgba(0,0,0,0.2);

`

export const ContentButton = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
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

export const ContentForm = styled.form`
display: flex;
flex-direction: column;
gap: 2.5rem;
`

export const ContentRemember = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
font: .875rem;
`

export const ForgotPassword = styled.span`
color: #1976d2;
font-weight: 500;
font-size: .875rem;

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
`
export const StyledLink = styled(Link)`
    font-weight: 500;
    color: #1976d2;

    :hover {
        cursor: pointer;
        text-decoration: underline #1976d2;
    }
`