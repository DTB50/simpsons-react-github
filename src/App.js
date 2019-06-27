//MAIN APP CLASS - State is held here and fed to child elements (e.g. quotebox)

import React, { Component } from 'react';
import logo from './logo.svg';
import fixSpelling from './supportingfns.js';
//Remember to import App elements
import './App.css';
import AppHeader from './AppHeader.js'
import QuoteBox from './quotebox.js';
import dance from './dance.gif';
import doh from './doh.jpg';
import AppButtons from './AppButtons.js';

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
               <AppHeader topQuote={this.state.topQuote}/>
                <img src={doh} alt="Loading failed image" className="loading-image"/>
                <p>{this.state.errorMessage}</p>
               <AppButtons action={this.getQuote} />
              </div>
            );
      }
      else {
        if (this.state.currentQuote && this.state.currentChar && this.state.currentPic){
            return (
              <div className="App">
                <AppHeader topQuote={this.state.topQuote}/>
                <QuoteBox state={this.state}/>
                <AppButtons action={this.getQuote} />
              </div>
            );
        } else {
                return (
                  <div className="App">
                    <AppHeader topQuote={this.state.topQuote}/>
                    <img src={dance} alt="Loading as fast as I can..." className="loading-image"/>
                    <p>Loading...</p>
                    <AppButtons action={this.getQuote} />
                  </div>
                );
            }
    }

  }

}

export default App;
