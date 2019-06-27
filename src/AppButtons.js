import React from 'react';

class AppButtons extends React.Component {
    
    
    render (props) {
        return (
            <div className="Buttons">
              <button onClick={this.props.action}>Quote</button>
              <button>Quote-off</button>
            </div>
        )
    }
}

export default AppButtons;