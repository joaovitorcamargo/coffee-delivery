import { BannerContainer } from "./styles";
import CoffeImageBanner from "../../../../assets/CoffeImageBanner.svg"
import { List } from "./components/List";
import Background from "../../../../assets/Background.png"

export function Banner() {
  return (
    <BannerContainer>
      <div>
        <img src={Background} alt="" />
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <h5>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h5>
        <List/>
      </div>
      <img src={CoffeImageBanner} alt="Imagem do Banner" />
    </BannerContainer>
  )
}