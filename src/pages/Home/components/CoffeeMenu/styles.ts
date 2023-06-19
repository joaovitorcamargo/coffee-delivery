import styled from "styled-components";

export const CoffeeMenuContainer = styled.div`
  margin-top: 8.75rem;
  h1 {
    font-weight: 800;
    font-size: 2rem;
    color: ${(props) => props.theme["base-subtitle"]};
  }
  .coffeeMenu{
    margin-top: 4rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
  }
`