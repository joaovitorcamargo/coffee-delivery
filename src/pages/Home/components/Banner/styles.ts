import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 5.875rem;

  div {
    padding-right: 1.5rem;
    h1 {
      font-weight: bold;
      font-size: 3rem;
      line-height: 3.9rem;
    }
    h5 {
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