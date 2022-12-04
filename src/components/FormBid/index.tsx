import { useEffect } from 'react'
import styled from 'styled-components'
import { Form, Input, Select, Button } from 'antd';
import { BidActions, BidEffects, BidTypes, useAppDispatch, useAppSelector, UsersEffects, UsersSelectors } from 'store';
import { AlertMessage } from './AlertMessage';
const {Option} = Select

export const FormApplication = () => {

  const dispatch = useAppDispatch()
  
  const users = useAppSelector(UsersSelectors.UsersDataSelector)

  useEffect(() => {
    dispatch(UsersEffects.getUsers())
    return () => {
      dispatch(BidActions.removeServerMessagesAction())
    }
  }, [])

  const formHandler = (data:BidTypes.FormDataType) => {
    dispatch(BidEffects.createBid(data))
  }

  return (
   <Wrapper>
    <AlertMessage />
    <Form
      name="create_bid"
      onFinish={formHandler}
      autoComplete="off"
    >
      <Form.Item
        name="user_id"
        rules={[{ required: true, message: 'Укажите конструктора!' }]}
      >
        <Select
          placeholder="Выберите конструктора"
          allowClear
        >
          {users.map(u => 
              <Option key={u.id} value={u.id}>{u.firstname} {u.middlename} {u.surname}</Option>
            )}
        </Select>
      </Form.Item>
      <Form.Item
        name="document_title"
        rules={[{ required: true, message: 'Введите наименование!' }]}
      >
        <Input placeholder='Наименование документа'/>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Отправить
        </Button>
      </Form.Item>
    </Form>
   </Wrapper>
  )
}

const Wrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
`