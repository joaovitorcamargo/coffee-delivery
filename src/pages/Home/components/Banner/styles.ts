import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 5.875rem;

  div {
    img {
      z-index: -1;
      position: absolute;
      width: 100%;
      left: 0;
      right: 0;
    }
    padding-right: 1.5rem;
    h1 {
      color: ${(props) => props.theme["base-title"]};
      font-weight: bold;
      font-size: 3rem;
      line-height: 3.9rem;
    }
    h5 {
      color: ${(props) => props.theme["base-subtitle"]};
      margin-top: 1rem;
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.625rem;
    }
  }

  img {
    width: 29.75rem;
    height: 22.5rem;
  }
`