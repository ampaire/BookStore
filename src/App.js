import React from 'react';
import './App.css';
import styled from 'styled-components';

const H4 = styled.h2`
  font-weight: bold;
  line-height: 52px;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <H4>The intellectuals</H4>
      </header>
    </div>
  );
}

export default App;
