//QUOTE BOX - a stateful component that renders the quote and images according to the App state

//Import all the needed elements
import React from 'react';
import App from './App.js';
import './quotebox.css';

// const QuoteBox = (props) => {
//Set up Quotebox class as ES6 stateful component
class QuoteBox extends React.Component {
  constructor(props) {
  super(props);
  }

  render() {


    //Either render the single quote screen, or the quote-off
    if (this.props.state.numberOfQuotes == 1){
      //Flip character direction to ensure uniformity
      let style =  {transform: 'none'};
      // console.log(this.props.state.currentCharDirection);
      if (this.props.state.currentCharDirection == "Right") {
        style = {transform: 'scaleX(-1)'};
      }


      return (
        <section className="quoteBox">
          <img className='charImage' style={style} src={this.props.state.currentPic}/>
          <div className='textBox'>
            <h1 className='charQuote'>{this.props.state.currentQuote}</h1>
            <p className='charName'>{this.props.state.currentChar}</p>
          </div>
        </section>
      )
    }
    else if (this.props.state.numberOfQuotes == 2){

      //Flip character direction to ensure uniformity
      let styleLeft =  {transform: 'none'};
      console.log(this.props.state.currentCharDirection);
      if (this.props.state.currentCharDirection == "Right") {
        styleLeft = {transform: 'scaleX(-1)'};
      }


      return (
        <section className="quoteBox">
          <img className='charImage' style={styleLeft} src={this.props.state.currentPic}/>
          <div className='textBox'>
            <h1 className='charQuote'>{this.props.state.currentQuote}</h1>
            <p className='charName'>{this.props.state.currentChar}</p>
          </div>
        </section>
      )
    }
  }

}


// }


export default QuoteBox;
