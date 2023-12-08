import { createGlobalStyle } from 'styled-components'
import styled from 'styled-components'

const Reset = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export default Reset
