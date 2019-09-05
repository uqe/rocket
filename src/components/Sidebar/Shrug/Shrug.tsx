import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    background-position: 0% 0%;
  }
  50% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 0%;
    transform: rotate(360deg);
  }
`

const Shrug = styled.h3`
  text-align: center;
  margin: 0;
  margin-top: 100px;
  font-size: 5vh;
  font-weight: bold;
  color: transparent;
  background-size: 1000% 1000%;
  background-image: linear-gradient(-45deg, #231557, #44107a, #ff1361, #fff800);
  animation: ${rotate} 2.5s linear infinite;
  -webkit-background-clip: text;
`

export default Shrug
