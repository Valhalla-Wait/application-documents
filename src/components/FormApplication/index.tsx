import { useState } from 'react'
import styled from 'styled-components'
import { Form, Input, Select, Button } from 'antd';
const {Option} = Select

export const FormApplication = () => {
  const db = [
    {
      id: 1,
      name: 'Алексей',
      middleName: 'Сергеевич',
      surname: 'Щербаков'
    },
    {
      id: 2,
      name: 'Семен',
      middleName: 'Алексеевич',
      surname: 'Гущин'
    },
    {
      id: 3,
      name: 'Григорий',
      middleName: 'Дмитриевич',
      surname: 'Иванов'
    },
  ]

  type FormDataType = {
    id_user: null | number
    doc_name: string
  }

  const [formValue, setFormValue] = useState<FormDataType>({
    id_user: null,
    doc_name: ''
  })

  const formHandler = (data:FormDataType) => {
    setFormValue(data)
  }

  return (
   <Wrapper>
    <Form
      name="create_application"
      onFinish={formHandler}
      autoComplete="off"
    >
      <Form.Item
        name="user"
        rules={[{ required: true, message: 'Укажите конструктора!' }]}
      >
        <Select
          placeholder="Выберите конструктора"
          allowClear
        >
          {db.map(u => 
              <Option key={u.id} value={u.id}>{u.name} {u.middleName} {u.surname}</Option>
            )}
        </Select>
      </Form.Item>
      <Form.Item
        name="doc_name"
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