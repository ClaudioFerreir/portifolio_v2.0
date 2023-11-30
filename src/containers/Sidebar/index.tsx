import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Text from '../../components/Text'

const Sidebar = () => (
  <aside>
    <Avatar />
    <Title fontSize={20}>Claudio Ferreira</Title>
    <Text tipo="secondary" fontSize={16}>
      Cláudio Ferreira
    </Text>
  </aside>
)

export default Sidebar
