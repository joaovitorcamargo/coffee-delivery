import { CoffeeOptionCardContainer } from "./styles"
import {Plus, Minus, ShoppingCart } from 'phosphor-react'

export interface CoffeeOptionCard {
  name: string,
  image: string,
  value: number,
  types: string[],
  description: string,
  quantity: number
}

export function CoffeeOptionCard({
  name,
  image,
  value,
  types,
  description,
  quantity
}: CoffeeOptionCard) {

  const getCurrentValueWithPad = (currentValue: number): string => {
    const convertedValueToString = value.toString()
    
    return convertedValueToString.toString().replaceAll('.',',').padEnd(convertedValueToString.length + 1, '0')
  }

  return(
    <CoffeeOptionCardContainer>
      <img src={image} />
      <div className="type">
        {
          types.map(type => {
            return(
              <span key={type}> 
                {type.toUpperCase()} 
              </span>
            )
          })
        }
      </div>
      <div className="content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
      <div className="actions">
        <div className="valueInfo">
          R$ <span className="value"> {getCurrentValueWithPad(value)} </span>
        </div>
        <div className="actionInfo">
          <div className="setQuantity">
            <Minus size={14} color="#4B2995"/>
            <span>{quantity}</span>
            <Plus size={14} color="#4B2995"/>
          </div>
          <div className="addCart">
            <ShoppingCart size={22} weight="fill"/>
          </div>
        </div>
      </div>
    </CoffeeOptionCardContainer>
  )
}