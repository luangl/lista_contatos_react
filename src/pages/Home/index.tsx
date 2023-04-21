import Adicionar from '../../container/Adicionar'
import Header from '../../container/Header'
import TableContact from '../../container/TableContact'

import { LeftSide, RightSide } from '../../styles/style'

const Home = () => (
  <>
    <LeftSide>
      <Header />
      <TableContact />
    </LeftSide>
    <RightSide>
      <Adicionar />
    </RightSide>
  </>
)

export default Home
