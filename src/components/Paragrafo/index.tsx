import { P } from './styles'

export type Props = {
  children: string
}

const ParagrafoComponent = ({ children }: Props) => <P>{children}</P>

export default ParagrafoComponent
