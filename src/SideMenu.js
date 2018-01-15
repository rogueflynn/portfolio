import sideMenuStyles from './css/sidemenu.css';
import React from 'react';
import Modal from './Modal.js';
import {Carousel} from "react-responsive-carousel";
import MoveItIcon from "./images/moveiticon2.png";
import OctoplusIcon from "./images/octoplusicon.png";
import StemdashIcon from "./images/stemdashicon.png";
import carouselStyle from 'react-responsive-carousel/lib/styles/carousel.min.css';

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

class AboutMe extends React.Component {
    render() {
        const AboutStyle = {
            marginLeft: "2%"
        }
        const authStyle = {
            float: "right",
            marginRight: "2%",
            fontWeight: "bold"
        }
        return(
            <section>
            <p style={AboutStyle}>
            My name is Victor Gonzalz and I am a programmer/developer. I majored in Computer
            Science in 2016. Most of my area interests has been in web developing
            and database connectivity. My other interests include game development and desktop 
            applicaton development.    
            <br/>
            <br/>
            A lot of my experience has been working with Node.js but I also have experience with 
            object oriented languages such as Java and C#. My projects have ranged from web applications to modular
            components integrated with existing applications.  
            <br/>
            <br/>
            I believe that programming is about problem solving and programming languages are tools
            to solve problems.  I work well on teams and always keep learning new things.
            My work ethic is strong and I would be a valuable asset to any company.
            </p> 
            <br/>
            <p style={authStyle}>-Victor Gonzalez</p>
            </section>

        );
    }

}

class Projects extends React.Component {
    render() {
        const projectIcons = {
            width: "40%",
            height: "auto"
        }
        return(
            <section>
            <Carousel
                showThumbs={false}
            >
                <div>
                    <img style={projectIcons} alt="moveit" src={MoveItIcon} />
                    <p className="legend">Move It! Colors</p>
                </div>
                <div>
                    <img style={projectIcons} alt="octoplus" src={OctoplusIcon} />
                    <p className="legend">OctoPlus</p>
                </div>
                <div>
                    <img style={projectIcons} alt="stemdash" src={StemdashIcon} />
                    <p className="legend">STEMDash</p>
                </div>
            </Carousel> 
            <p>Info text will go in this block</p>
            </section>
        );
    }

}

class Resume extends React.Component {
    render() {
        return(
            <h1>My resume page</h1>
        );
    }

}

class ModalPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            about: <AboutMe />,
            projects: <Projects />,
            resume: <Resume />
        };
    }
    render() {
        return ( 
            <section>
                {this.state[this.props.modalPage]}
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