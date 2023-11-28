import Text from '../Text'
import Title from '../Title'
import { LinkButton } from '../button/styles'

import { Card } from './styles'

const Project = () => (
  <Card>
    <Title>Projeto Lista de Tarefas</Title>
    <Text tipo="secondary">Lista de tarefas feita com VueJS</Text>
    <LinkButton>Visualizar</LinkButton>
  </Card>
)

export default Project
