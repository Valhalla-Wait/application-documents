import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Form, Input, Select, Button, Alert } from 'antd';
import { BidActions, BidEffects, BidSelectors, BidTypes, useAppDispatch, useAppSelector, UsersEffects, UsersSelectors } from 'store';
const {Option} = Select

export const FormApplication = () => {

  const dispatch = useAppDispatch()
  
  const users = useAppSelector(UsersSelectors.UsersDataSelector)
  const serverMessage = useAppSelector(BidSelectors.BidDataSelector)

  const [showMess, setShowMess] = useState<boolean>(false)

  useEffect(() => {
    if (serverMessage) setShowMess(true) 
    dispatch(UsersEffects.getUsers())

    return () => {
      dispatch(BidActions.removeMessageAction())
    }
  }, [])

  const formHandler = (data:BidTypes.FormDataType) => {
    dispatch(BidEffects.createBid(data))
  }

  const messageType = () => {
    switch (serverMessage) {
      case BidTypes.ServerMessages.success:
        return 'success'
      case BidTypes.ServerMessages.bidErr:
        return 'warning'
      case BidTypes.ServerMessages.serverErr:
      return 'error'
    }
  }

  return (
   <Wrapper>
    {serverMessage && <Alert message={serverMessage} type={messageType()} showIcon/>
    }
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