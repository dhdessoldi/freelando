import styled from '@emotion/styled'

const StyledDiv = styled.div`
  padding: ${props => props.theme.sizes.m};
  background: ${props => props.theme.colors.primary.a};
  display: flex;
  justify-content: space-between;
`

export const Header = () => {
  return (
    <StyledDiv>
      <p>freelando</p>
      <a href='#'>Login</a>
    </StyledDiv>
  )
}