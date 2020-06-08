import React from 'react';
import './App.css';
import CowList from './CowList';
import Form from './Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/cows')
      .then(response => response.json())
      .then((jsonData) => {
        this.setState({cows: jsonData});
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    // this.getCows();
    return (
      <div className="app container-md">
        <header>
          <h1>Cow List</h1>
        </header>
        <form>
            <Form />
        </form>
        <h3>Click on a name below to get a description:</h3>
          <CowList cows={this.state.cows}/>
      </div>
    )
  }
}

export default App;
