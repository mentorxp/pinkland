import styled from 'styled-components';


export const Buttondesign = styled.button`
text-transform: capitalize;
font-size: 1rem;
background:transparent;
border: 0.1rem solid var(--mainlightPurple);
border-radius:0.5rem;
padding: 0.2rem 0.5rem;
margin: 0.2 rem 0.5rem 0.2rem 0;
cursor: pointer;
transition: all 0.5s ease-in-out;
&:hover {
    background: var(--mainGreen);
}
&:focus {
    outline: none;
}
`


