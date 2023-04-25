import styled from 'styled-components/macro'

export const BgContainer = styled.div`
  background-color: #ffffff;
  font-weight: bold;
  display: flex;
  align-items: center;
  height: 100vh;
  justify-content: space-around;
`

export const FormElement = styled.form`
  margin-bottom: 20px;
`

export const FormContainer = styled.div`
  background-color: #ffffff;
`

export const CustomButton = styled.button`
  background-color: #0b69ff;
  font-weight: bold;
  color: #ffffff;
  border-radius: 8px;
  padding: 5px;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ImageContainer = styled.div`
  background-image: url(${props => props.src});
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TopBottomText = styled.h1`
  font-size: ${props => props.fontSize};
`

