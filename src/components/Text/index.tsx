import { Text as P } from './styles'

export type Props = {
  children: string
  tipo?: 'primary' | 'secondary'
  fontSize?: number
}

const Text = ({ children, tipo = 'primary', fontSize }: Props) => (
  <P fontSize={fontSize} tipo={tipo}>
    {children}
  </P>
)

export default Text
