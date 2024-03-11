import styled from "@emotion/styled"

const LabelStyled = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;

`

const InputStyled = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${props => props.theme.sizes.xs};
  margin-bottom: ${props => props.theme.sizes.xs};
  background: ${props => props.theme.colors.white};
  border: 1px solid;
  border-radius: ${props => props.theme.sizes.s};
  border-color: ${props => props.theme.colors.neutral.a};
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  line-height: 17px;
`


export const Input = ({label}) => {
  return (
    <LabelStyled>
      {label}
      <InputStyled />
    </LabelStyled>
  )
}