import styled from 'styled-components'
import { Props } from '.'
export const Botao = styled.button<Props>`
  padding: ${(props) => (props.padding ? props.padding + 'px' : '10px')};

  /* Add more styles as needed */
`
