//MAIN APP CLASS - State is held here and fed to child elements (e.g. quotebox)

import React, { Component } from 'react';
import logo from './logo.svg';
import fixSpelling from './supportingfns.js';
import './App.css';
//Remember to import the quotebox element -
import QuoteBox from './quotebox.js'

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
    currentPic: null
    };

  //Bind click handler context
  this.getQuote = this.getQuote.bind(this);
  };


    componentWillMount() {
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


      //Make initial API call in constructor (componentWillMount is now deprecated)
      fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // let fixedQuote = data[0].quote.replace("becuase", "because")
        //                                 .replace("wierd", "weird")
        //                                   .replace("gigggling", "giggling")
        //                                     .replace("sandwhiches", "sandwiches")
        //                                       .replace("specter", "spectre")
        //                                         .replace("Edinburg", "Edinburgh");
        this.setState({ currentQuotes: data });
        this.setState({ currentQuote: fixSpelling(data[0].quote) });
        this.setState({ currentChar: data[0].character });
        this.setState({ currentCharDirection: data[0].characterDirection });
        this.setState({currentPic: data[0].image})
      })
      .catch(err => console.log(err));
    }

  //Fetch new API data to update state
  getQuote() {
    fetch(`https://thesimpsonsquoteapi.glitch.me/quotes`)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      // let fixedQuote = data[0].quote.replace("becuase", "because")
      //                                 .replace("wierd", "weird")
      //                                   .replace("gigggling", "giggling")
      //                                     .replace("sandwhiches", "sandwiches")
      //                                       .replace("specter", "spectre")
      //                                         .replace("Edinburg", "Edinburgh");
      this.setState({ currentQuotes: data });
      this.setState({ currentQuote: fixSpelling(data[0].quote) });
      this.setState({ currentChar: data[0].character });
      this.setState({ currentCharDirection: data[0].characterDirection });
      this.setState({currentPic: data[0].image})
    })
    .catch(err => console.log(err));
  }

  //Put it all together
  render() {
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
  }

}

export default App;
