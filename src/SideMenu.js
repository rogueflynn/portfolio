import sideMenuStyles from './css/sidemenu.css';
import React from 'react';
import Modal from './Modal.js';

class HamburgerMenuBtn extends React.Component {
    render() {
        return(
            <button className={sideMenuStyles.menuIconBG} onClick={this.props.onClick}>
                <div className={sideMenuStyles.hamburgerMenu}></div>
                <div className={sideMenuStyles.hamburgerMenu}></div>
                <div className={sideMenuStyles.hamburgerMenu}></div>
            </button>
        );
    }
}

class ModalPage extends React.Component {
    render() {
        return ( 
            <section>
                <h1>{this.props.modalPage}</h1>            
            </section>
        );
    }
}

export class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
                        height: "0",
                        width: "18%",
                        left: "82.7%",
                        isOpen: false,
                        modalName: "about"
                    };
        this.handleMenu = this.handleMenu.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.titles = {
                        about: "About Me",
                        projects: "Projects",
                        resume: "Resume",
                      };
    }

    //Add listener
    componentDidMount() {
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions);
    }

    //Remove listener
    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    toggleModal(modalName) {
        this.setState(
            {
                isOpen: !this.state.isOpen,
                modalName: modalName
            });
    }

    updateDimensions() {
        if(window.outerWidth < 1004) {
            this.setState({
                width: "72.7%",
                left: "38%"
            });
        } else {
            this.setState({
                width: "18%",
                left: "82%"
            });
        }
    }

    handleMenu() {
        if(this.state.height === "0") {
            this.setState({
                height: "100%"
            });
        } else {
            this.setState({
                height: "0"
            });
        }
    }

    render() {
        const navMenuStyle = {
            height: this.state.height, 
            left: this.state.left,
            width: this.state.width
        }

        return (
            <section>
                <HamburgerMenuBtn onClick={this.handleMenu} />
                <div style={navMenuStyle} className={sideMenuStyles.sidenav}>
                    <div className={sideMenuStyles.linkSpacing}>
                        <button onClick={() => this.toggleModal("about")}>About</button>
                        <button onClick={() => this.toggleModal("projects")}>Projects</button>
                        <button onClick={() => this.toggleModal("resume")}>Resume</button>
                        <a href="https://github.com/rogueflynn" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>
                </div>
                
                <Modal show={this.state.isOpen} onClose={this.toggleModal} title={this.titles[this.state.modalName]}>
                    <ModalPage modalPage={this.state.modalName} />
                </Modal>

            </section>
        );
    }
}