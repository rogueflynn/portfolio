import React from 'react';
import ReactDOM from 'react-dom';
import './css/mainstyle.css';
import myPicture from './images/me.png';
import laptopPicture from './images/laptop.png';
import {SideMenu} from './SideMenu.js';
import {screenText} from './screenText.js';
 
class ComputerText extends React.Component {
    constructor(props) {
        super(props);
        this.timer;
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

class Laptop extends React.Component {
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


class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "50%"
        };
        this.toggleWidth = this.toggleWidth.bind(this);
    }

    componentDidMount() {
        this.toggleWidth();        
        window.addEventListener("resize", this.toggleWidth);
    }
    componentWillUnmount() {
        window.removeEventListener("resize", this.toggleWidth);
    }
    toggleWidth() {
        if(window.outerWidth < 1004) {
            this.setState({
                width: "100%"
            });
        } else {
            this.setState({
                width: "50%"
            });
        }
    }
    render() {
        const picHeaderStyle = {
            width: this.state.width
        }

        return (
            <section>
                <SideMenu />
                <Laptop />
                <div className="pictureHeader" style={picHeaderStyle}>
                    <h1 id="authorName">Victor Gonzalez</h1>	
                    <img src={myPicture} alt="me.png" className="myPicture" />
                </div>
            </section>
        );
    }
}

//Takes the component and the where to embed the app
ReactDOM.render(<Portfolio />, document.getElementById('root'));