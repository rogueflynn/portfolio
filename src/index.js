import React from 'react';
import ReactDOM from 'react-dom';
import './css/mainstyle.css';
import myPicture from './images/me.png';
import {SideMenu} from './SideMenu.js';

class Portfolio extends React.Component {
    render() {
        return (
            <section>
                <SideMenu />
                <div className="pictureHeader">
                    <h1 id="authorName">Victor Gonzalez</h1>	
                    <img src={myPicture} alt="me.png" className="myPicture" />
                </div>
            </section>
        );
    }
}

//Takes the component and the where to embed the app
ReactDOM.render(<Portfolio />, document.getElementById('root'));