import styled from "styled-components";

export const ContentContacts = styled.div`
display: flex;
flex-direction: column;
align-items: center;

width: 100%;
height: 100%;

padding: .625rem;
`
export const ContentSpan = styled.div`
font-size: 1rem;
font-weight: 600;
padding: .9375rem 0rem 0rem .375rem;
`
export const ContentImage = styled.div`
  @media (min-width: 48rem) {
    width: 70%;
  }
`;

export const NoContacts = styled.div`
display: flex;
flex-direction: column;
align-items: center;


width: 100%;
height: 100%;
margin-top: 1.875rem;

h2{
  font-size: 1.5rem;
  color: #1962D1;
}

@media (min-width: 48rem) {
  justify-content: center;


    h2 {
      font-size: 2.5rem;
      font-weight: 500;
    }

  }
 
 
 
`