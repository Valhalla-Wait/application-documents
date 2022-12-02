import styled from 'styled-components'
import { ButtonLink } from './ButtonLink'

export const Header = () => {
  return (
    <Wrapper>
      <header>
        <Menu>
          <ul className='menu_list'>
            <ButtonLink link='/'>
              Создание заявки
            </ButtonLink>
            <ButtonLink link='/list'>
              Список заявок
            </ButtonLink>
          </ul>
        </Menu>
      </header>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-bottom: 40px;
`

const Menu = styled.div`
  .menu_list {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`