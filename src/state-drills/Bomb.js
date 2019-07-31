import React, { Component } from 'react'

export default class Bomb extends Component {
    state = {
        count:0,
        interval:"",
    };

    componentDidMount () {
      const startInterval =  setInterval (()=> this.setState({count:this.state.count + 1}) , 1000 ) 
        this.setState({
            interval: startInterval
        })
    }
    componentWillUnmount() {
        clearInterval(this.state.interval)
    }

    renderText = (count) => {
        if (count >= 8 ){
            clearInterval(this.state.count);
            return "BOOM!!!!"
        } else if (count % 2 ) {
            return "tick"
        } else {
            return "tock"
        }
    }

    render() {
        return (
            <div>
                <p>{this.renderText(this.state.count)}</p>
            </div>
        )
    }
}
