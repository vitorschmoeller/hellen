import { Titulo as TituloEstilo } from './styles'
export type Props = {
  children: string
  fontSize?: number
}
//Usando o children utilizamos ele como tipagem para pegar o conteudo filho de Titulo
const Titulo = (props: Props) => (
  <TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>
)

export default Titulo
