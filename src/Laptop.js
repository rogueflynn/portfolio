import React from 'react';
import laptopPicture from './images/laptop.png';
import {screenText} from './screenText.js';

class ComputerText extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.index = 0;
        this.state = {
            text: ""
        }
        this.animateScreen = this.animateScreen.bind(this);
    }
    //"Programmer\n\nDeveloper\n\nProblem Solver"
    componentDidMount() {
        this.timer = setInterval(this.animateScreen, 80);
    }
    componentWillUnmount() {
        clearInterval(this.timer);
    }
    animateScreen() {
        if(this.index < 32) {
            this.setState({
                text: screenText(this.index)
            })
            this.index++;
        } else {
            clearInterval(this.timer);
        }
    }
    render() {
        return (
            <div id="computerText" style={this.props.display}>
                {this.state.text.split('\n').map((item, key) => {
                    return (
                        <span key={key}>
                            {item}
                            <br/>
                        </span>
                    );
                })}
            </div>
        )
    }
}

export class Laptop extends React.Component {
    constructor(props) {
        super(props);
        this.toggleLaptop = this.toggleLaptop.bind(this);
        this.state  = {
            display: "block"
        };
    }

    componentDidMount() {
        this.toggleLaptop();
        window.addEventListener("resize", this.toggleLaptop);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.toggleLaptop);
    }
    toggleLaptop() {
       if(window.outerWidth < 1004)  {
            this.setState({
                display: "none"
            })
       } else {
            this.setState({
                display: "block"
            })
       }
    }

    render() {
        const laptopToggle = {
            display: this.state.display
        }
        return (
            <section>
                <img src={laptopPicture} alt="laptop.png" id="laptop"  style={laptopToggle} />
                <ComputerText display={laptopToggle}/>
            </section>
        );
    }
}