// Style your elements here
import styled from 'styled-components'

export const MainBgContainer = styled.div`
  height: 100vh;
  background-color: #24263c;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const MainBgCard = styled.div`
  width: 50vw;
  background-color: #383a4e;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  color: #ffffff;
  text-align: center;
`

export const MainParagraph = styled.p`
  font-family: 'Roboto';
  color: #ffffff;
  text-align: center;
`

export const MainInput = styled.input`
  outline: none;
  height: 6vh;
  width: 30vw;
  background-color: #edeeff;
  border: none;
  border-radius: 5px;
`

export const MainParagraphError = styled.p`
  font-family: 'Roboto';
  color: #ef4444;
  text-align: center;
`
