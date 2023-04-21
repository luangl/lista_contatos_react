import styled from 'styled-components'

import { Props } from '.'

export const Buttons = styled.button<Props>`
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-transform: uppercase;
  background-color: ${(props) => (props.bgColor ? '#' + props.bgColor : '')};
  padding: 4px 8px;
  border-radius: 12px;
  letter-spacing: 1px;
  border: none;
  cursor: pointer;
`
