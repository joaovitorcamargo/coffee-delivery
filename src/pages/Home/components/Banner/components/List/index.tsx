import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { IconListBanner } from "./styles";
import { ListContainer } from "./styles";

export function List() {
  return(
    <ListContainer>
      <li>
        <IconListBanner colorsIcons="yellow-dark">
          <ShoppingCart
            weight="fill"
            size={16}
          />
        </IconListBanner>
        <span>
          Compra simples e segura
        </span>
      </li>
      <li>
        <IconListBanner colorsIcons="base-text">
          <Package 
            weight="fill"
            size={16}
          />
        </IconListBanner>
        <span>
          Embalagem mantém o café intacto
        </span>
      </li>
      <li>
        <IconListBanner colorsIcons="yellow">
          <Timer 
            weight="fill"
            size={16}
          />
        </IconListBanner>
        <span>
          Entrega rápida e rastreada
        </span>
      </li>
      <li>
        <IconListBanner colorsIcons="purple">
          <Coffee 
            weight="fill"
            size={16}
          />
        </IconListBanner>
        <span>
          O café chega fresquinho até você
        </span>
      </li>
    </ListContainer>
  )
}