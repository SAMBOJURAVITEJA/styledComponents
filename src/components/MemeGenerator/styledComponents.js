import styled from 'styled-components'

export const bgContainer = styled.div`
  background-color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-around;
`

export const formElement = styled.form`
  margin-bottom: 20px;
`

export const formContainer = styled.div`
  background-color: #ffffff;
`

export const customButton = styled.button`
  background-color: #0b69ff;
  font-weight: bold;
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  border: none;
`

export const imageContainer = styled.div`
  background-image: url(${props => props.src});
`

export const topBottomText = styled.h1`
  font-size: ${props => props.fontSize};
`
