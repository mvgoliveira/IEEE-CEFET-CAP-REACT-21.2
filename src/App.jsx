import React from 'react';
import Button from './components/Button';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 0
    };
  }

  addCount() {
    this.setState({ count: this.state.count + 1 });
  }

  render () {
    return (
      <>
        <h1>{this.state.count}</h1>
        <Button text="Clique aqui" fx={() => this.addCount()}/>
      </>
    )
  }
}

export default App
