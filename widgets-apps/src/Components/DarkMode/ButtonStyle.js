import styled from "styled-components";

export const Button = styled.button`
background: ${({ theme }) => theme.gradient};
border: 2px solid ${({ theme }) => theme.toggleBorder};
border-radius: 30px;
display: flex;
font-size: 0.5rem;
justify-content: space-between;
margin: 0 auto;
overflow: hidden;
padding: 0.5rem;
position: relative;
width: 8rem;
height: 4rem;
`;
