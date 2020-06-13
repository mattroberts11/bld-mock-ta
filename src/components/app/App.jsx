import React from 'react';
import './App.css';
import Cows from './Cows';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      showCows: false,
      cowName: '',
      cowDescription: '',
    }
    this.getCows = this.getCows.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getOneCow = this.getOneCow.bind(this);
  }

  componentDidMount(){
    this.getCows();
  }

  handleClick(e){
    this.setState({showCows: true});
    this.getOneCow(e.target.id);
  }

  getCows() {
    fetch('http://localhost:8080/api/cows')
      .then(res => res.json())
      .then(data => this.setState({cows: data}))
      .catch((err) => {
        console.log(err);
      })
  }

  getOneCow(cowId){
    const found = this.state.cows.find(({_id}) => _id === cowId)
    // console.log('Found= ', found);
    this.setState({cowName: found.name});
    this.setState({cowDescription: found.description});
  }

  render() {
    console.log('Current State= ', this.state);
    return (
      <div className="app">
        <header>
          <h1>Cow List</h1>
        </header>
        { this.state.showCows ?
          <div className="showCows">
            <p>Name:</p>
            <p>Description:</p>
          </div>
          : null }
          <Cows cows={this.state.cows} click={this.handleClick}/>
      </div>
    )
  }
}

export default App;
