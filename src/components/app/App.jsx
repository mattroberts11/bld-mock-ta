import React from 'react';
import './App.css';
import Cows from './Cows';
import CowList from './CowList';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: []
    };
    this.getCows = this.getCows.bind(this);
  }
  componentDidMount(){
    this.getCows();
  }
  getCows = () => {
    fetch('http://localhost:8080/api/cows')
      .then(res => res.json())
      .then(data => this.setState({cows: data}))
      .catch((err) => {
        console.log(err);
      })
  }
  render() {
    return (
      <div className="app">
        <header>
          <h1>Cow List</h1>
        </header>

          <Cows cows={this.state.cows}/>

      </div>
    )
  }
}

export default App;
