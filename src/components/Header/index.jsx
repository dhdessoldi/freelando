import styled from '@emotion/styled'
import { Typography } from '../Typography'

const StyledDiv = styled.div`
  padding: ${props => props.theme.sizes.m};
  background: ${props => props.theme.colors.primary.a};
  display: flex;
  justify-content: space-between;
`

export const Header = () => {
  return (
    <StyledDiv>
      <Typography type='body2' component='body'>Freelando</Typography>
      <Typography type='a' component='a' href='#'>Login</Typography>
    </StyledDiv>
  )
}