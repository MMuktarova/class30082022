import { Component } from "react";
import { btnStyles } from "./style";

class ChangeText extends Component{
    constructor() {
        super()
        this.state = { text: "hello world" }
        //this.changeTheText = this.changeTheText.bind(this)
    }
    changeTheText =()=> {
        this.setState({text:"hello My friends"})
    }
    render() {
        const {text} = this.state
        return (
            <div className="container">
                <h1>{text}</h1>
                <button
                    onClick={this.changeTheText}
                    style={btnStyles}>
                    Change Text
                </button>

            </div>
        )
    }

}

export default ChangeText