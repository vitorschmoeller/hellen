import styled from 'styled-components'
import { Props } from '.'
export const Titulo = styled.h2<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
`
