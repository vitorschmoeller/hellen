import React from 'react'
import Cabecalho from './styles'
import images from '../../images/love-and-romance.png'
import images2 from '../../images/ame.png'
import images3 from '../../images//nos.png'
import images4 from '../../images/presente.png'

const Header = () => (
  <Cabecalho>
    <nav>
      <a href="">
        <img src={images4} alt="" />
      </a>
      <a href="">
        <img src={images3} alt="" />
      </a>
      <a href="">
        <img src={images2} alt="" />
      </a>
      <a
        target="_blank"
        href="https://pedido-namoro-one.vercel.app/"
        rel="noreferrer"
      >
        <img src={images} alt="" />
      </a>
    </nav>
  </Cabecalho>
)

export default Header
