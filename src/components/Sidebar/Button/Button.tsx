import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

import open from '../../../images/open.svg'
import close from '../../../images/close.svg'

const Wrapper = styled(Link)<Props>`
  background-image: ${({ isOpenType }): string => (isOpenType ? `url(${open})` : `url(${close})`)};
  width: ${({ size }): string => `${size}px`};
  height: ${({ size }): string => `${size}px`};
  border: unset;
  background-color: transparent;
  padding: 0;
  border-radius: 50%;
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-position: center;
  position: ${({ isOpenType }): string => (isOpenType ? 'unset' : 'absolute')};
  right: ${({ isOpenType }): string => (isOpenType ? 'unset' : '30px')};
  top: ${({ isOpenType }): string => (isOpenType ? 'unset' : '30px')};
  cursor: pointer;

  :hover {
    box-shadow: 0 8px 13px 0 rgba(0, 0, 0, 0.1);
  }

  :focus {
    outline: none !important;
  }
`

interface Props {
  to: string
  onClick(): void
  isOpenType: boolean
  size: number
}

const Button: React.FC<Props> = props => {
  return <Wrapper {...props} />
}

export default Button
