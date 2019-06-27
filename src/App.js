//MAIN APP CLASS - State is held here and fed to child elements (e.g. quotebox)

import React, { Component } from 'react';
import logo from './logo.svg';
import fixSpelling from './supportingfns.js';
import './App.css';
//Remember to import the quotebox element -
import QuoteBox from './quotebox.js';
import dance from './dance.gif';
import doh from './doh.jpg';

//Set up main App class
class App extends Component {
  constructor() {
  super();
  //Define state components
  this.state = {
    topQuote: null,
    numberOfQuotes: 1,
    currentQuotes: null,
    currentQuote: null,
    currentChar: null,
    currentCharDirection: null,
    currentPic: null,
    errorMessage: null
    };


  //Make initial API call in constructor (componentWillMount is now deprecated)
  fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
  .then(res => res.json())
  .then(data => {
    console.log(data);
    this.setState({ currentQuotes: data });
    this.setState({ currentQuote: fixSpelling(data[0].quote) });
    this.setState({ currentChar: data[0].character });
    this.setState({ currentCharDirection: data[0].characterDirection });
    this.setState({currentPic: data[0].image})
  })
  .catch(err => this.setState({ errorMessage: "D'oh! Something went wrong..." }));
      
  //Bind click handler context
  this.getQuote = this.getQuote.bind(this);
  };


    componentDidMount() {
      //Determine top quote
      const topQuoteArray = [
        "That's not the Monsterometer! That's the Quote Exaggerator!",
        "So it's come to this. A Simpsons quote generator.",
        "An Alan Smithee quote generator.",
        "Quote my shorts!",
        "Don't quote a cow, man!",
        "I call it 'Billy and the Quote-o-saurus'."
      ]

      function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
      }

      let randomNo = getRandomInt(0, topQuoteArray.length);
      console.log(randomNo);
      this.setState({topQuote:topQuoteArray[randomNo]});


      
    }

  //Fetch new API data to update state
  getQuote() {
      this.setState({ currentQuotes: null });
      this.setState({ currentQuote: null });
      this.setState({ currentChar: null });
      this.setState({ currentCharDirection: null });
      this.setState({currentPic: null});
      this.setState({errorMessage: null});
      
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.setState({ currentQuotes: data });
      this.setState({ currentQuote: fixSpelling(data[0].quote) });
      this.setState({ currentChar: data[0].character });
      this.setState({ currentCharDirection: data[0].characterDirection });
      this.setState({currentPic: data[0].image})
    })
    .catch(err => this.setState({ errorMessage: "D'oh! Something went wrong..." }));
  }

  //Put it all together
  render() {
    
      if (this.state.errorMessage !== null){
           return (
              <div className="App">

                <div className="App-header">
                  <h1>The Simpsons Quote-o-matic</h1>
                  <p>{this.state.topQuote}</p>
                </div>
                <img src={doh} alt="Loading failed image" className="loading-image"/>
                <p>{this.state.errorMessage}</p>
                <div className="Buttons">
                  <button onClick={this.getQuote}>Quote</button>
                  <button>Quote-off</button>
                </div>
              </div>
            );
      }
      else {
        if (this.state.currentQuote && this.state.currentChar && this.state.currentPic){
            return (
              <div className="App">

                <div className="App-header">
                  <h1>The Simpsons Quote-o-matic</h1>
                  <p>{this.state.topQuote}</p>
                </div>

                <QuoteBox state={this.state}/>

                <div className="Buttons">
                  <button onClick={this.getQuote}>Quote</button>
                  <button>Quote-off</button>
                </div>
              </div>
            );
        } else {
                return (
                  <div className="App">

                    <div className="App-header">
                      <h1>The Simpsons Quote-o-matic</h1>
                      <p>{this.state.topQuote}</p>
                    </div>
                    <img src={dance} alt="Loading as fast as I can..." className="loading-image"/>
                    <p>Loading...</p>
                    <div className="Buttons">
                      <button onClick={this.getQuote}>Quote</button>
                      <button>Quote-off</button>
                    </div>
                  </div>
                );
            }
    }

  }

}

export default App;
