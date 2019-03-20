import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props) 

    
    this.state = {
      data: '',
      dataList: []

    }
     
  }

  enterData = (e) => {
    let data = e.target.value
    this.setState({data})
   
  }

  submitData = () => {
    let {data, dataList} = this.state
    dataList.push(data)
    this.setState({dataList: dataList, data: ''})
  }


  // submitAndClear = () => {
  //   let {data, dataList} = this.state
  //   dataList increases
  //   clear input
  //   this.setState({
  //     data: ''
  //   })
  // }

  render() {
    console.log(this.state.data)
    return (
      <>
      <h1>Hello world</h1>
      
      <input type="text" onChange={this.enterData}/><button onClick={this.submitData}> Submit </button>
      <div>{this.state.dataList.map((data, i) => (
         <li key ={i}>{data}</li>
    ))}
    </div>
      
      </>
    );
  }
}

export default App;
