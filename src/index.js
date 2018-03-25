import React from 'react';
import ReactDOM from 'react-dom';
import './css/mainstyle.css';
import myPicture from './images/me.png';
import nodeLogo from './images/nodejslogo.png';
import mongologo from './images/mongologo.png';
import reactlogo from './images/reactlogo.png';
import javalogo from './images/javalogo.png';
import javascriptlogo from './images/javascriptlogo.png';
import mysqllogo from './images/mysqllogo.png';
import csharplogo from './images/csharplogo.png';
import unitylogo from './images/unitylogo.png';
import {SideMenu} from './SideMenu.js';
import {Laptop} from './Laptop.js';
import registerServiceWorker from './registerServiceWorker';

class Portfolio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            width: "50%",
            height: "344px"
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
                width: "100%",
                height: "244px"
            });
        } else {
            this.setState({
                width: "50%",
                height: "344px"
            });
        }
    }
    render() {
        const picHeaderStyle = {
            width: this.state.width,
            height: this.state.height
        }
        const logoBox = {
            width: "10%",
            marginLeft: "5%",
            marginTop: "3%",
            height: "auto"
        }

        return (
            <section>
                <SideMenu />
                <Laptop />
                <div className="pictureHeader" style={picHeaderStyle}>
                    <h1 id="authorName">Victor Gonzalez</h1>	
                    <img src={myPicture}        alt="me.png" className="myPicture" />
                    <img src={nodeLogo}         alt="nodejslogo.png"        style={logoBox} />
                    <img src={reactlogo}        alt="reactlogo.png"         style={logoBox} />
                    <img src={javascriptlogo}   alt="javascriptlogo.png"    style={logoBox} />
                    <img src={mongologo}        alt="mongologo.png"         style={logoBox} />
                    <img src={javalogo}         alt="javalogo.png"          style={logoBox} />
                    <img src={mysqllogo}        alt="mysqllogo.png"         style={logoBox} />
                    <img src={csharplogo}       alt="csharplogo.png"        style={logoBox} />
                    <img src={unitylogo}        alt="unitylogo.png"         style={logoBox} />
                </div>
            </section>
        );
    }
}

//Takes the component and the where to embed the app
ReactDOM.render(<Portfolio />, document.getElementById('root'));
registerServiceWorker();