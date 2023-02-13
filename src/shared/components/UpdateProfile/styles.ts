import styled from "styled-components";

export const ProfileModal = styled.div`
position: absolute;
z-index: 1;

display: flex ;
flex-direction: column;
align-items: center;

width: 100%;
max-width: 26.875rem;
height: 70%;
padding: 1rem;

background-color: #fff;
border-radius: 5px;
box-shadow: .75rem .75rem .3125rem -0.0625rem rgba(0,0,0,0.2);
`
export const ProfileHeader = styled.header`
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;

width: 100%;
height: 18rem;

    nav {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }
`
export const ContentAvatar = styled.div`
display: flex;
flex-direction: column;
align-items: center;

gap: .9375rem;
    span {
        font-size: 1.25rem;
        font-weight: 500;
    }
`