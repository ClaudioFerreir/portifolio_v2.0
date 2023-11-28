import Title from '../../components/Title'
import Text from '../../components/Text'
import { LanguageSection } from './styles'

const About = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Text tipo="primary">
      Desenvolvedor Full Stack, pós-graduado em Análise e Desenvolvimento de
      Programas, com formação pela Le Wagon em Desenvolvimento Web e graduando
      em Ciência da Computação pelo Centro Universitário União das Américas
      Descomplica. Aluno do Curso Desenvolvedor Full Stack Python pela Escola de
      Britânica de Artes Criativas e Tecnologia (EBAC). Engenheiro em Energias
      Renováveis pelo Escola Superior de Tecnologia e Gestão - IPB, Portugal.
    </Text>
    <LanguageSection>
      <img src="https://img.icons8.com/color/48/000000/html-5.png" />
      <img src="https://img.icons8.com/color/48/000000/css3.png" />
      <img src="https://img.icons8.com/color/48/000000/bootstrap.png" />
      <img src="https://img.icons8.com/color/48/000000/javascript.png" />
      <img src="https://img.icons8.com/color/48/000000/ruby-programming-language.png" />
      <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-plain.svg" />
      <img src="https://img.icons8.com/color/48/000000/figma.png" />
      <img src="https://img.icons8.com/color/48/000000/visual-studio.png" />
      <img src="https://img.icons8.com/color/48/000000/github--v1.png" />
      <img src="https://img.icons8.com/color/48/000000/heroku.png" />
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
    </LanguageSection>
  </section>
)

export default About
