import React from 'react';
import './App.css';
import CowList from './CowList';

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
        // var cowsObj = jsonData;
        // console.log(cowsObj);
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
          <CowList cows={this.state.cows}/>
        </div>

    )
  }
}

export default App;
