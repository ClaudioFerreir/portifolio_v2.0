import styled from 'styled-components'
import { Text as P } from '../../components/Text/styles'

export const Description = styled(P)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const ModeButton = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.BackgroundColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.PrimaryColor};
  cursor: pointer;
`

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 40px;
  }
`
