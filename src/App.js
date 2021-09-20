import React, { Component } from 'react'

import './App.css';


export default class App extends Component {
  constructor() {
    super()
    this.state={
      loading: false,
      character:{},
      sex:""
    }
  }


  componentDidMount(){
    this.setState({loading:true})
    console.log("did mount")
    fetch('https://swapi.dev/api/people/4/')
    .then(response => response.json())
    .then(data => this.setState({
      loading:false,
      character: data,
      sex:data
    }));
  }




render(){
  console.log("rendered")

  const info = this.state.loading ? "Loading...........": <div> NAME: {this.state.character.name } <br/> SEX:{this.state.sex.gender }</div>
  return(
    <div>
      <h1>{info}</h1>
    </div>
  )
}}