import React from 'react';
import './App.css';
import Cows from './Cows';
import AddCow from './AddCow';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cows: [],
      showCows: false,
      cowName: '',
      cowDescription: '',
      addCowName: '',
      addCowDesc: '',

    }
    this.getCows = this.getCows.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getOneCow = this.getOneCow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addCow = this.addCow.bind(this);
  }

  componentDidMount(){
    this.getCows();
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    console.log("in handleSubmit");
    e.preventDefault();

    // this.addCow(data);
  }

  handleClick(e){
    this.setState({showCows: true});
    this.getOneCow(e.target.id);
  }
  // handleDelete(e){
  //   this.deleteCow.
  // }

  getCows() {
    fetch('http://localhost:8080/api/cows')
      .then(res => res.json())
      .then(data => this.setState({cows: data}))
      .catch((err) => {
        console.log(err);
      })
  }

  addCow(data){
    fetch('http://localhost:8080/api/cows', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: JSON.stringify(data)
    })
      .then(data => data.json())
      .then(res => this.setState({cows: [...this.state], res}))
      .catch((err) => {
        console.log(err);
      })
  }

  // deleteCow(cowId){
  //   fetch('http://localhost:8080/api/cows', {
  //     method: 'DELETE'
  //   })
  // }



  getOneCow(cowId){
    const found = this.state.cows.find(({_id}) => _id === cowId)
    this.setState({cowName: found.name, cowDescription: found.description});
  }

  render() {
    console.log('Current State= ', this.state);
    return (
      <div className="app">
        <header>
          <h1>Cow List</h1>
        </header>
        <div className="addACow">
          <h3>Add Your Own Favorite Cow!</h3>
          <AddCow func={this.handleChange} submit={this.handleSubmit}/>
        </div>
        { this.state.showCows ?
          <div className="showCows">
            <p><strong>{this.state.cowName}</strong></p>
            <p>{this.state.cowDescription}</p>
          </div>
          : null }
          <Cows cows={this.state.cows} click={this.handleClick}/>
      </div>
    )
  }
}

export default App;