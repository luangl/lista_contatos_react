import { Buttons } from './styles'

export type Props = {
  children: string
  bgColor: string
}

const Botoes = ({ children, bgColor }: Props) => (
  <Buttons bgColor={bgColor}>{children}</Buttons>
)

export default Botoes
