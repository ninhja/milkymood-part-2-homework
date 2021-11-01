import styled from 'styled-components'
import {AbsoluteCenter} from '../../styles'

export const Modal = styled.div`
  ${AbsoluteCenter}
  animation: glow 1s forwards;
  background: #fbfbfb;
  box-sizing: border-box;
  padding: 60px;
  max-width: 800px;
  width: calc(100vw - 60px);
  z-index: 3;

  @media (max-width: 700px) {
    padding: 30px;
    width: calc(100vw - 30px);
  }
`

export const BG = styled.div`
  background: rgb(0, 0, 0, 0.5);
  cursor: pointer;
  height: 100vh;
  width: 100vw;
  position: fixed;
  z-index: 2;
`

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  height: 30px;
  width: 30px;
  padding: 0;
  position: absolute;
  right: 60px;
  top: 60px;

  &::before,
  &::after {
    background-color: #0519ce;
    content: '';
    position: absolute;
    height: 33px;
    width: 2px;
    left: 15px;
    top: 0;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  @media (max-width: 700px) {
    right: 20px;
    top: 20px;
  }
`
