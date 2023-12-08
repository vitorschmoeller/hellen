import styled from 'styled-components'

const SessaoCard = styled.section`
  margin-top: 78px;
  margin-bottom: 80px;

  h2 {
    text-align: center;
    margin-bottom: 24px;
  }

  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;

    li {
      list-style: none;
      border: 2px solid rgba(0, 0, 0, 0.6);

      img {
        max-width: 100%;
      }
    }
  }

  span {
    color: rgba(0, 0, 0, 0.6);
  }

  @media (max-width: 768px) {
    ul {
      grid-template-columns: 1fr 1fr;
    }
  }
`

export default SessaoCard
