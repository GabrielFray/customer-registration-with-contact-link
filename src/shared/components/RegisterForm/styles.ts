import styled from "styled-components";

export const RegisterContent = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;

width: 30rem;
height: 100vh;
max-height: 50rem;
padding: 1.5rem;

background-color: #fff;
border-radius: .3125rem;
`
export const ContentTitle = styled.div`
display: flex;
flex-direction: column;
gap: .625rem;

    h2 {
        font-size: 1.6rem;
    }
    p {
        font-size: .9375rem;
        font-weight: 500;
        color: #616161;
        
        span {
            color: #1976d2;
            font-weight: 500;

            :hover {
                cursor: pointer;
                text-decoration: underline #1976d2;
            }
        }
    }

   
`
export const ContentForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
gap: 2.5rem;
width: 100%;
height: 65%;
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
export const LoginAccount = styled.p`
text-align: center;
`