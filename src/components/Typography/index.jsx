import styled from "@emotion/styled"

const components = {
  h1: 'h1',
  body: 'p',
  a: 'a',
}

const styles = {
  h1: `
    font-size: 40px;
    font-weight: 600;
    line-height: 48px;
  `,
  h2: `
    font-size: 32px;
    font-weight: 600;
    line-height: 39px;
  `,
  h3: `
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
  `,
  body1: `
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
  `,
  body2: `
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: white;
  `,
  a: `
    text-decoration: none;
    margin: auto 0;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    color: white;
  `,
}

export const Typography = ({type, component, children}) => {
  const tag = components[component]
  const Component = styled[tag]`${styles[type]}`
  return (
    <Component>{children}</Component>
  )
}