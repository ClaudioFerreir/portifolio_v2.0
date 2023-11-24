import { Text as P } from './styles'

export type Props = {
  children: string
  tipo?: 'primary' | 'secondary'
}

const Text = ({ children, tipo = 'primary' }: Props) => (
  <P tipo={tipo}>{children}</P>
)

export default Text
