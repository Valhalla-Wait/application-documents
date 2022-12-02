import styled from 'styled-components'
import React from 'react'
import { NavLink } from 'react-router-dom'

type PropsType = {
  link: string
  children: React.ReactNode
}

export const ButtonLink:React.FC<PropsType> = ({children, link}) => {
  return (
    <NavLink to={link} >
      <Wrapper>
        <Button>
          <li className='item_link'>{children}</li>
        </Button>
      </Wrapper>
    </NavLink>
  )
}

const Wrapper = styled.div`
  &:hover {
    transition: 500ms;
    background-color: var(--color-menu-item-active);
  }
  padding-bottom: 3px;
`

const Button = styled.div`
  padding: 10px;
  background-color: var(--color-app-background);
  .item_link {
    list-style-type: none;
    font-weight: 600;
    font-size: 24px;
  }
`