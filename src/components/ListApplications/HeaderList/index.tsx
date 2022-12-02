import styled from 'styled-components'

export const HeaderList = () => {
  return (
   <Wrapper>
    <div className='table_title'>Наименование</div>
    <div className='table_title'>Кол-во заявок</div>
   </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .table_title {
    font-weight: 700;
    font-size: 18px;
  }
`