import styled from 'styled-components'

import { Props } from '.'

export const Text = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${(props) =>
    props.tipo === 'primary'
      ? props.theme.PrimaryColor
      : props.theme.SecondaryColor};
  line-height: 22px;
`
