import { Text as P } from './styles'

export type Props = {
  children: string
}

const Text = (props: Props) => <P>{props.children}</P>

export default Text
