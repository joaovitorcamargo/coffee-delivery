import styled from "styled-components";

const COLOR_ICONS_BANNER = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple',
  'base-text': 'base-text',
} as const

interface BannerIconsProps {
  colorsIcons: keyof typeof COLOR_ICONS_BANNER
}


export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);;
  margin-top: 4.125rem;
  list-style: none;
  li {
    color: ${(props) => props.theme["base-text"]};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.25rem;
  }
`

export const IconListBanner = styled.span<BannerIconsProps>`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 100%;
  color: white;
  background: ${(props) => props.theme[COLOR_ICONS_BANNER[props.colorsIcons]]};
`
