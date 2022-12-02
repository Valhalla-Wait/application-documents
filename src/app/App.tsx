import React from 'react';
import styled from 'styled-components'
import { FormApplication, Header, ListApplications } from 'components';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Content>
          <Routes>
            <Route path="/" element={<FormApplication />} />
            <Route path="/list" element={<ListApplications />} />
          </Routes>
        </Content>
      </Wrapper>
    </div>
  );
}

export default App;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10%;
  text-align: center;
  max-width: 800px;
  width: 100%;
`
const Content = styled.div`
  padding: 10px;
`