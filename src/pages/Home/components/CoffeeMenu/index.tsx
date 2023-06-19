import { CoffeeMenuContainer } from "./styles";
import { CoffeeOptionCard } from "./components/CoffeeOptionCard";
import {Coffes} from './assets/coffess.json'

export function CoffeeMenu() {
  return(
    <CoffeeMenuContainer>
      <h1>Nossos cafés</h1>
      <div className="coffeeMenu">
        {
          Coffes().map((coffee) => {
            return <CoffeeOptionCard 
              key={coffee.name}
              {...coffee}
            />
          })
        }
      </div>
    </CoffeeMenuContainer>
  )
}