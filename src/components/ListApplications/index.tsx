import styled from 'styled-components'
import { List } from 'antd';
import { HeaderList } from './HeaderList';
import { useEffect } from 'react';
import { DocumentsEffects, DocumentsSelectors, useAppDispatch, useAppSelector } from 'store';

export const ListApplications = () => {

  const dispatch = useAppDispatch()

  const documents = useAppSelector(DocumentsSelectors.DocumentsDataSelector)
  useEffect(()=>{
    dispatch(DocumentsEffects.getDocuments())
  }, [])


  return (
   <Wrapper>
        <List
          header={<HeaderList />}
          dataSource={documents}
          renderItem={(doc) => (
            <List.Item key={doc.id}>
              <div className='list_item title'>{doc.title}</div>
              <div className='list_item count'>{doc.count_bids}</div>
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
