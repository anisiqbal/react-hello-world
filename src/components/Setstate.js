import React, { Component } from 'react'

export class Setstate extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            URL:'no url'
        }
    }

    link(){

        this.setState({
            URL:'https//m.com'
        })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div> URL - {this.state.URL}</div>
                <button onClick = { () => this.link()}>Link</button>

            </div>
        )
    }
}

export default Setstate;
