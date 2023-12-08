import './App.css'
import { useState, useEffect, useRef } from 'react'
import Reset from './styles'
import { Container } from './styles'
import Header from './containers/Header'
import { motion } from 'framer-motion'
import carousel1 from './images/casal 1.jpg'
import carousel2 from './images/casal2.jpg'
import carousel3 from './images/casal 3.jpg'
import carousel4 from './images/casal4.jpg'
import images3 from './images/nos.png'
import Lista from './containers/Lista'
import Proposta from './containers/Proposta'
import { Botao } from './components/Botaos/styles'
import hellenBuxao from './images/fb7530f7-f38a-4a74-998f-886bfaa96622.jpg'
const carousel = [carousel1, carousel2, carousel3, carousel4]

function App() {
  const carousell = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [botao, setBotao] = useState(false)
  const handleClick = () => {
    setBotao(!botao)
  }
  useEffect(() => {
    // Verifica se carousell.current não é null ou undefined antes de acessar suas propriedades
    if (carousell.current) {
      console.log(
        carousell.current?.scrollWidth,
        carousell.current?.offsetWidth
      )
      setWidth(carousell.current?.scrollWidth - carousell.current?.offsetWidth)
    }
  }, [])

  return (
    <>
      <Reset />
      <Container>
        <Header />
        <motion.div
          ref={carousell}
          className="carousel"
          whileTap={{ cursor: 'grabbing' }}
        >
          <div className="nos">
            <h1>Nossas fotos (temos que tirar mais fotos)</h1>
            <img className="us" src={images3} alt="" />
          </div>
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {carousel.map((image) => (
              <motion.div className="item" key={image}>
                <img src={image} alt="imagens" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <Lista></Lista>
        <Botao onClick={handleClick}>Curiosa 👀</Botao>
        {botao ? (
          <div className="divBotao">
            <h2>Hellen do buxão cheio(Amo muito)</h2>
            <img className="imgBotao" src={hellenBuxao}></img>
          </div>
        ) : (
          ' Não click'
        )}
        <Proposta></Proposta>
      </Container>
    </>
  )
}

export default App
