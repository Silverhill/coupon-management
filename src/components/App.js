import React from 'react';
import Header from './common/Header';
import Pages from '../routes';

class App extends React.Component {

  render(){
    return(
      <div>
        <Header />
        <Pages />
      </div>
    )
  }
}

export default App
