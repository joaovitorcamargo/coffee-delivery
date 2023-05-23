import { Banner } from "./components/Banner";
import { CoffeeMenu } from "./components/CoffeeMenu";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <Banner />
      <CoffeeMenu />
    </HomeContainer>
  )
}