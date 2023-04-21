import { Title } from './styles'

export type Props = {
  children: string
}

const TituloComponent = ({ children }: Props) => <Title>{children}</Title>

export default TituloComponent
