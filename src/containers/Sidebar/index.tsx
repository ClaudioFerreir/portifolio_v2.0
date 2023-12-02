import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Text from '../../components/Text'

import { Description, ModeButton, SidebarContainer } from './styles'

type Props = {
  switchTheme: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Claudio Ferreira</Title>
      <Text tipo="secondary" fontSize={16}>
        Cláudio Ferreira
      </Text>
      <Description tipo="primary" fontSize={12}>
        Engenheiro Full-Stack
      </Description>
      <ModeButton onClick={props.switchTheme}>Trocar tema</ModeButton>
    </SidebarContainer>
  </aside>
)

export default Sidebar
