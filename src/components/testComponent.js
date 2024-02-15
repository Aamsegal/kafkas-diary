import React, {Component} from 'react';
import "../cssStyles/testcomponent.css"


class TestComponent extends Component {

    constructor(props) {
        
        super(props);

        this.state = {
            message: "Kafka's Diary",
            counter: 0
        };
    };

    componentDidMount() {
        //happens when the component mounts
        console.log("TestComponent loaded")
    };

    componentWillUnmount() {
        //happens before component unmounts
        console.log("TestComponent is unmounting")
    };

    /* adds to the counter either up or down one depending on the button */
    increaseCounter = (parameter) => {

        console.log(parameter)

        this.setState((prevState) => ({
            counter: prevState.counter + parameter,
        }));

    };

    /* when enter is hit, set the message state as what is in the field */
    changeText = (event) => {

        if(event.key === "Enter") {
            
            console.log(event.target.value)
    
            this.setState({message: event.target.value})

        }

    };

    render() {
        return (
            <div className="testComponent">

                <p>{this.state.message} - {this.state.counter}</p>

                <button onClick={() => this.increaseCounter(1)}>Increase</button>

                <button onClick={() => this.increaseCounter(-1)}>Decrease</button>

                <br/>

                <input 
                    type="text"
                    onKeyDown={this.changeText}
                    placeholder={this.state.message}
                />

            </div>
        )
    }
};

export default TestComponent;