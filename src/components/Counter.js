import React, { Component } from 'react'

export class Counter extends Component {

constructor(props) {
    super(props)

    this.state = {
        count: 0,
        name: ''
    }
}

    increment() {
        const updatedCount = this.state.count + 1;
        this.setState({count: updatedCount});

        console.log(updatedCount);
    }

    render() {
        return (
            <div>
               <div> Count - {this.state.count} </div>
               <button onClick={() => this.increment()}>Increment</button>
            </div>
        )
    }
}

export default Counter
