import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: new Date()
        }
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            data: new Date()
        });
    }

    render(){
        return(
            <div>São {this.state.data.toLocaleTimeString()}.</div>
        );
    }
}

export default Clock;