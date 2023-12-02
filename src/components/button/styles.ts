import styled from 'styled-components'

export const LinkButton = styled.a`
  color: ${(props) => props.theme.BackgroundColor};
  font-size: 14px;
  background-color: ${(props) => props.theme.ButtonBackgroundColor};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
