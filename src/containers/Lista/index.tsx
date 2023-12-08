import hellenCarro from '../../images/hellen carro.jpg'
import hellenpraiera from '../../images/hellen praia.jpg'
import hellenPistola from '../../images/hellen pistola.jpg'
import hellenRebaixada from '../../images/rebaixada.jpg'
import hellenPe from '../../images/pé feio.jpg'
import hellenSoninho from '../../images/soninho....jpg'
import hellenMecanica from '../../images/hellenMecanica.jpg'
import hellenLavadora from '../../images/treino com hellen.jpg'
import hellenResenha from '../../images/novinha.jpg'
import SessaoCard from './styles'
const Lista = () => (
  <SessaoCard>
    <h2>Caracteristicas que te fazem ser a melhor Felix(Amo cada detalhe)</h2>
    <span>(existem muito mais, porém não tenho fotos suficientes)</span>
    <ul>
      <li>
        <img src={hellenCarro} alt="" />
        <h3>A mais curiosa 👀</h3>
      </li>
      <li>
        <img src={hellenpraiera} alt="" />
        <h3>A mais Praiera e fã de marina sena </h3>
      </li>
      <li>
        <img src={hellenMecanica} alt="" />
        <h3>Parceira, sempre me ajudando nos meus piores momentos</h3>
      </li>
      <li>
        <img src={hellenRebaixada} alt="" />
        <h3>Mulher Rebaixada que eu amo</h3>
      </li>
      <li>
        <img src={hellenSoninho} alt="" />
        <h3>A que mais dorme...💤 Se deixar só acorda no outro dia</h3>
      </li>
      <li>
        <img src={hellenPistola} alt="" />
        <h3>Rita Felix Brigueira e Raivosinha</h3>
      </li>
      <li>
        <img src={hellenPe} alt="" />
        <h3>Portadora desse pé maravilhoso</h3>
      </li>
      <li>
        <img src={hellenLavadora} alt="" />
        <h3>Minha parceira de treino 💪</h3>
      </li>
      <li>
        <img src={hellenResenha} alt="" />
        <h3>
          A pessoa que mais gosta de tirar onda, mas não gosta quando tiram onda
          com ela
        </h3>
      </li>
    </ul>
  </SessaoCard>
)

export default Lista
