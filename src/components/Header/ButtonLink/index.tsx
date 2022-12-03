import styled from 'styled-components'
import React, { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

type PropsType = {
  link: string
  children: React.ReactNode
}

type PropsLinkType = {
  currentLink: string
  propsLink: string
}

export const ButtonLink:React.FC<PropsType> = ({children, link}) => {

  const {pathname} = useLocation()

  return (
    <NavLink to={link}>
      <Wrapper currentLink={pathname} propsLink={link}>
        <Button>
          <li className='item_link'>{children}</li>
        </Button>
      </Wrapper>
    </NavLink>
  )
}

const Wrapper = styled.div`
  ${({currentLink, propsLink}:PropsLinkType) => 
    currentLink === propsLink ? `background-color: var(--color-menu-item-active);` : undefined
  }
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