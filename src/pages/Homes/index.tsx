import Botaoadicionar from '../../components/Botaoadicionar'
import Barralateral from '../../containers/Barralateral'
import Listadecontatos from '../../containers/Listadecontatos'

const Home = () => (
  <>
    <Barralateral mostrarFiltros />
    <Listadecontatos />
    <Botaoadicionar />
  </>
)

export default Home
