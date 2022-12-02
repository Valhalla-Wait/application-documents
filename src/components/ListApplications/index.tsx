import styled from 'styled-components'
import { List } from 'antd';
import { HeaderList } from './HeaderList';

export const ListApplications = () => {

  const data = [
    {
      id: 1,
      name: "ГОСТ 456",
      count: 2
    },
    {
      id: 2,
      name: "ГОСТ 22",
      count: 1
    },
    {
      id: 3,
      name: "ГОСТ 643",
      count: 5
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
    {
      id: 4,
      name: "ГОСТ 086",
      count: 3
    },
  ]

  return (
   <Wrapper>
        <List
          header={<HeaderList />}
          dataSource={data}
          renderItem={(item) => (
            <List.Item key={item.id}>
              <div className='list_item title'>{item.name}</div>
              <div className='list_item count'>{item.count}</div>
            </List.Item>
          )}
        />
   </Wrapper>
  )
}

const Wrapper = styled.div`
  .list_item {
    font-size: 18px;
  }
  .title {
    font-weight: 700;
  }
  .count {
    font-weight: 600;
  }
  max-height: 400px;
`
