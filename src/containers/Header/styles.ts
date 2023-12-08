import styled from 'styled-components'

const Cabecalho = styled.header`
  text-align: center;
  // background-color: #e74c3c;
  padding: 16px;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      margin-left: 28px;
      text-decoration: none;
      color: black;
      transition: transform 0.3s ease; /* Adiciona uma transição suave na transformação */

      &:hover {
        transform: scale(1.1);
      }

      img {
        padding: 6px;
        width: 50px;
      }
    }
  }
`

export default Cabecalho
