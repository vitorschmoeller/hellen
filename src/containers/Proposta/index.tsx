import React, { ReactNode } from 'react'
// import casal from '../../images/hellen pistola.jpg'
import Sessao from '../Proposta/styles'

export type Props = {
  children?: ReactNode // Use ReactNode para aceitar qualquer tipo de filho React
}

const Proposta = (props: Props) => (
  <>
    <Sessao>{props.children}</Sessao>
  </>
)

export default Proposta
