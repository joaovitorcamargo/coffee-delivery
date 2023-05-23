import { HeaderContainer, LocalizationButton, HeaderButtonsContainer, CartButton, CounterCart } from "./styles";
import Logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="" />
      <HeaderButtonsContainer>
        <LocalizationButton>
          <MapPin
            weight="fill"
            size={22}
          />
          Porto Alegre, RS
        </LocalizationButton>
        <CartButton>
          <ShoppingCart
            weight="fill"
            size={22}
          />
          <CounterCart>
            2
          </CounterCart>
        </CartButton>
      </HeaderButtonsContainer>
    </HeaderContainer>
  )
}