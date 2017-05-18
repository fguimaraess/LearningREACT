import React from 'react';

class LoggingButton extends React.Component{

    handleClick = () => {
        console.log('Isso é:', this);
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                Click Me
            </button>
        )
    }
}

export default LoggingButton;