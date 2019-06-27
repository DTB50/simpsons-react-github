import React from 'react';

const AppHeader = (props) => {
    return (
         <div className="App-header">
                  <h1>The Simpsons Quote-o-matic</h1>
                  <p>{props.topQuote}</p>
                </div>
    )
}

export default AppHeader;