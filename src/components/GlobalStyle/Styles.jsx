import { Global, css } from "@emotion/react"

const styles = css`
  * {
    font-family: 'Monteserrat', sans-serif;
  }
`

export const Styles = () => {
  return (<Global 
    styles={styles}
  />)
}