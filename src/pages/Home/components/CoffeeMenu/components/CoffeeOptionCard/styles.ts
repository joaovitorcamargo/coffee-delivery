import styled from "styled-components";

export const CoffeeOptionCardContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme["base-card"]};
  width: 18rem;
  border-radius: 0.375rem 2.25rem;
  padding: 2rem;
  img {
    position: absolute;
    right: 5.4rem;
    top: -1rem;
  }
  .type {
    margin-top: 6rem;
    display: flex;
    gap: 0.25rem;
    justify-content: center;
    span {
      font-family: 'Roboto', sans-serif;
      font-size: 0.625rem;
      font-weight: 700;
      padding: .2rem .5rem;
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      border-radius: 16rem;
    }
  }
  .content {
    h2{
      text-align: center;
      font-family: 'Baloo 2', cursive;
      font-size: 1.25rem;
      margin-top: 1.25rem;
      color: ${(props) => props.theme["base-subtitle"]}
    }
    p {
      margin-top: 0.5rem;
      color: ${(props) => props.theme["base-label"]};
      text-align: center;
      font-size: 0.875rem;
    }
  }
  .actions {
    margin-top: 2.0625rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .valueInfo {
      font-size: 0.875rem;
      color: ${(props) => props.theme["base-text"]};
      .value {
        font-family: 'Baloo 2', cursive;
        font-size: 1.5rem;
        font-weight: 800;
      }
    }
    .actionInfo {
      display: flex;
      align-items: center;
      gap: 6px;
      .setQuantity {
        height: 2.375rem;
        display: flex;
        align-items: center;
        padding: 0.5rem;
        justify-content: space-between;
        font-size: 1rem;
        border-radius: 0.375rem;
        text-align: center;
        background-color: ${(props) => props.theme["base-button"]};
        width: 4.5rem;
        font-weight: bold;
        svg {
          color: ${(props) => props.theme["purple-dark"]};
          cursor: pointer;
        }
      }
      .addCart{
        cursor: pointer;
        display: flex;
        align-items: center;
        border-radius: 6px;
        background-color: ${(props) => props.theme["purple-dark"]};
        padding: 0.5rem;
        svg {
          color: ${(props) => props.theme["white"]};
        }
      }
    }
  }
`