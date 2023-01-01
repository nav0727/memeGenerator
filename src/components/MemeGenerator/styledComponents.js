import styled from 'styled-components'

export const BgContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`

export const InputContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ContainerMain = styled.div`
  display: flex;
  width: 40vw;
  flex-direction: column;
`

export const MemeContainer = styled.div`
  background-image: url(${props => props.bgImage});
  display: flex;
  height: 100vh;
  width: 40vw;

  flex-direction: column;
  background-size: cover;
  justify-content: space-between;
`

export const Paragraph = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #d7dfe9;
  font-family: 'OpenSans';
  text-align: center;
`
export const GenerateBtn = styled.button`
  width: 120px;
  background-color: #0b69ff;
  text-align: center;
  padding: 5px;
  margin-top: 2vh;
  border-radius: 8px;
  color: #fff;
`

export const GenHeading = styled.h1`
  font-size: 25px;
  color: #1e293b;
`
