import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center !important;
  padding: 2rem 0 2rem 0;
`;

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

const DefaultButtonHeader = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.25rem;

  border: none;
  padding: 0.5rem;
  border-radius: 0.375rem;

  font-weight: 400;
  font-size: 0.875rem;
  cursor: pointer;
`

export const LocalizationButton = styled(DefaultButtonHeader)`
  color: ${(props) => props.theme["purple"]};
  background: ${(props) => props.theme["purple-light"]};
`
export const CartButton = styled(DefaultButtonHeader)`
  position: relative;
  
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
`

export const CounterCart = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme["yellow-dark"]};

  border-radius: 100%;
  width: 1.25rem;
  height: 1.25rem;
  right: -9px;
  top: -8px;
`