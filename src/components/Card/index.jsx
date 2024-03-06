import styled from '@emotion/styled'

const StyledDiv = styled.div`
  padding: ${props => props.theme.sizes.l};
  background: ${props => props.theme.colors.secondary.a};
  border: 1px solid;
  border-color: ${props => props.theme.colors.primary.a};
  border-radius: ${props => props.theme.sizes.s};

`

export const Card = ({children}) => {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  )
}