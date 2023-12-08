import { Botao } from './styles'
export type Props = {
  children: string
  padding?: number
}

const Botaos = (props: Props) => <Botao>{props.children}</Botao>

export default Botaos
