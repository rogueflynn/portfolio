import React from 'react';
import ReactDOM from 'react-dom';
import './css/mainstyle.css';
import myPicture from './images/me.png';
import {SideMenu} from './SideMenu.js';
import {Laptop} from './Laptop.js';

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