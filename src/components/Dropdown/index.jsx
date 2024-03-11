import styled from "@emotion/styled"
import { useState } from "react"

const ItemStyled = styled.li`
    padding: ${props => props.theme.sizes.xs} 0;
    text-align: center;
    border-bottom: 1px solid ${props => props.theme.colors.neutral.a};
    cursor: pointer;       
    &:last-child {
        border: none;
    }
    color: ${props => props.activeFocus ? props.theme.colors.focus: 'inherit'};
    &:hover {
        color: ${props => props.theme.colors.focus};
    }
`

const DropdownStyled = styled.ul`
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: ${props => props.theme.colors.white};
    z-index: 1;
    border: 1px solid ${props => props.theme.colors.neutral.a};
    border-bottom-left-radius: 18px;
    border-bottom-right-radius: 18px;
    border-top: none;
    margin: 0;
    padding: 0 ${props => props.theme.sizes.m};
    list-style: none;
`

const LabelStyled = styled.label`
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    position: relative;

`

const ButtonStyled = styled.button`
    cursor: pointer;
    display: block;
    height: 40px;
    width: 100%;
    font-size: 18px;
    outline: none;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    border-radius: 18px;
    border-bottom-left-radius: ${props => props.isOpen ? '0' : '18px'};
    border-bottom-right-radius: ${props => props.isOpen ? '0' : '18px'};
    margin-top: ${props => props.theme.sizes.xs};
    padding: ${props => props.theme.sizes.s};
    background: ${props => props.theme.colors.white};
    border: 1px solid ${props => props.theme.colors.neutral.a};
    &:focus {
        border-color: ${props => props.theme.colors.focus};
    }
`

export const Dropdown = ({label, options}) => {
  const [isOpen, setVisibility] = useState(false);

  const [focusedOption, setFocusedOption] = useState(null);
  const [selectedOption, setSelectecOption] = useState('')

  const manipulateKey = (event) => {
    setVisibility(true)
    switch(event.key) {
      case 'ArrowDown':
        event.preventDefault();
        setFocusedOption(focoAntigo => {
          if(focoAntigo == null) {return 0}
          return focoAntigo += 1
        })
      break;
      case 'ArrowUp':
        event.preventDefault();
        setFocusedOption(focoAntigo => {
          if(!focoAntigo) {return 0}
          return focoAntigo -= 1
        })
      break;
      case 'Enter':
        event.preventDefault();
        setFocusedOption(null)
        setVisibility(false)
        setSelectecOption(options[focusedOption])
      break;

      default:
        break;
    }
  }
  return (
    <LabelStyled>
      {label}
      <ButtonStyled 
        isOpen={isOpen} 
        onClick={()=>setVisibility(!isOpen)}
        onKeyDown={manipulateKey}
      >
        <div>
          {selectedOption ? selectedOption.text : 'Selecione'} 
        </div>
        <div>
          <span>{isOpen ? '▲' : '▼'}</span>
        </div>
      </ButtonStyled>
      {isOpen && <DropdownStyled>
        {options.map((option, index)=> <ItemStyled 
          key={option.value}
          activeFocus={index === focusedOption}
          onClick={() => setSelectecOption(option)}
        >
          {option.text}
        </ItemStyled>)}
      </DropdownStyled>}
    </LabelStyled>
  )
}