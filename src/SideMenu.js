import sideMenuStyles from './css/sidemenu.css';
import React from 'react';
import Modal from './Modal.js';
import myResume from "./assets/victor_gonzalez_resume_no_addr.pdf";
import {Carousel} from "react-responsive-carousel";
import MoveItIcon from "./images/moveiticon2.png";
import OctoplusIcon from "./images/octoplusicon.png";
import StemdashIcon from "./images/stemdashicon.png";
import StemdashWebIcon from "./images/stemdashWeb.png";
import nighmareIcon from "./images/nightmare.PNG";
import hallucinationIcon from "./images/hallucination.PNG";
import turtleIcon from "./images/turtleicon.png";
import leftArrow from "./images/leftArrow.png";
import rightArrow from "./images/rightArrow.png";
import windowsDownloadBtn  from "./images/windowsDownloadBtn.png";
import appleBadge from "./images/applestorebadge.svg";
import googlePayBadge from "./images/google-play-badge.png";

//eslint-disable-next-line
import carouselStyle from 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import {Document, Page} from 'react-pdf';
import fileDownload from 'react-file-download';
import nightmareData from './projects/nightmare/nightmareofFS.zip';
import hallucinationData from './projects/breakthewall/breakingthewall.zip';

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
    constructor(props) {
        super(props);
        this.projectDescriptions = [
            `I contributed to this mobile game project.  I created the tutorial and integrated the login
            and signup backend code as well as a timer feature that logs how long a child has spent playing
            the game and saves their score to a database.`,

            `This is an educational mobile game that teaches children how to add.  I contributed by integrating 
            the previousiously built login and signup backend code.  I also added a client that receives 
            chat messages in real time and sticker support that displays on the chat boxes.`,

            `This is the central point of that connects all of the Zyrobotics games together.  The app utitlizes
            a client connection to a server and is used to send messages to children playing on particular games. 
            I also added the ability to have the app update in real time using the client and server connection.
            I contributed to some of the UI and added adjustments as needed for different platforms.`,

            `Tommy the Turtle is a mobile game that teaches children how to code.  I fixed issues with how the 
            code is displayed in the terminal window and added a load and a save code feature to the game.  A
            child has the ability to save code to a server and load it back in from any device.
            `,

            `This is the companion web site to the STEMDash mobile app.  It has much of the same features 	
            as the mobile app but utilizes many modern web technologies.  I did all of the web design, html,
            javascript, backend code and database connectivity.  The web site was also designed to be mobile 
            friendly.
            `,

            `Basic platform game that I created using Gamemaker. I learned about collision detection and basic physics
            applications. I also did the animation and learned how to animate sprite sheets. Since I applied screen 
            scrolling I got a better understanding of how the inverse matrix works in relation to the view matrix.
            The main improvement that I would have liked was smoother animation.`,

            `Platform game that used the Unity Game Engine. Working with a partner, the game extends the previous 
            game and adds challenging game mechanics. My main role in this project was extending the
            features of the previous game project and enhancing gameplay. The animation was improved from the 
            previous version but I had to omit the scrolling because of time constraints.
            `
        ];
        this.appleLinks = [
            "https://itunes.apple.com/us/app/moveit-colors/id1195640557?mt=8",
            "https://itunes.apple.com/us/app/octoplus/id959757516?ls=1&mt=8",
            "https://itunes.apple.com/us/app/stemdash-portal/id1247870271?mt=8",
            "https://itunes.apple.com/us/app/tommy-the-turtle-learn-to-code/id1227214268?mt=8"
        ];
        this.googleLinks = [
            "https://play.google.com/store/apps/details?id=com.zyrobotics.moveitcolors&hl=en",
            "https://play.google.com/store/apps/details?id=com.zyrobotics.octoplus&hl=en",
            "https://play.google.com/store/apps/details?id=com.zyrobotics.stemdash&hl=en",
            "https://play.google.com/store/apps/details?id=com.Zyrobotics.TommyTurtle&hl=en"

        ];
        this.webLinks = [
            "https://stemdash.com"
        ];
        this.state = {
            currentSlide: 0,
            downloadMessage: "",
            downloadLink: "",
            hyperLinkMsg: "",
            prevColor: "transparent",
            nextColor: "transparent",
            display: "none",
            badgeDisplay: "badgeDisplay",
            appleLink: this.appleLinks[0],
            googleLink: this.googleLinks[0],
            webLink: this.webLinks[0],
            webLinkDisplay: "none",
            projectDescription: this.projectDescriptions[0] 
        }
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.changeHandler = this.changeHandler.bind(this);
        this.downloadFile = this.downloadFile.bind(this);
    }

    handleSlideChange(Slide) {
            let message = "", 
                linkMsg = "", 
                display = "none", 
                badgeDisplay = "block", webLink = "", webLinkShow = "none";
            if(Slide >= 0 && Slide < 4) {
                this.setState({
                    appleLink: this.appleLinks[Slide],
                    googleLink: this.googleLinks[Slide]
                });
            } else if(Slide === 5 || Slide === 6) { 
                message = "Works only on Windows";
                linkMsg = "Click here to download";
                display = "block";
                badgeDisplay = "none";
            } else if(Slide === 4) {
                badgeDisplay = "none";
                webLink = this.webLinks[0];
                webLinkShow = "block";
            }

            this.setState({
                currentSlide: Slide,
                downloadMessage: message,
                hyperLinkMsg: linkMsg,
                display: display,
                webLinkDisplay: webLinkShow,
                webLink: webLink,
                badgeDisplay: badgeDisplay, 
                projectDescription: this.projectDescriptions[Slide]
            });         
    }

    changeHandler(index, element) {
        if(index !== this.state.currentSlide) {
            this.handleSlideChange(index);
        }
    }

    next() {
        let Slide = this.state.currentSlide;
        let lastElement = this.projectDescriptions.length - 1;
        Slide = this.state.currentSlide !== lastElement ? this.state.currentSlide + 1 : lastElement;
        this.handleSlideChange(Slide);
    }

    prev() {
        let Slide = this.state.currentSlide;
        Slide = this.state.currentSlide !== 0 ? this.state.currentSlide - 1 : 0;
        this.handleSlideChange(Slide);
    }

    downloadFile() {
        if(this.state.currentSlide === 5) {
            fileDownload(nightmareData, "nightmareofFS.zip");
        }
        if(this.state.currentSlide === 6) {
            fileDownload(hallucinationData, "breakingthewall.zip");
        }
    } 

    render() {
        const projectIcons = {
            width: "40%",
            height: "auto"
        }
        const prevStyle = {
            "position": "relative",
            "backgroundColor": this.state.prevColor,
            "color": "white",
            "float": "left",
            "marginTop": "-30%",
            "width": "8%",
            "height": "80px",
            "outline": "none",
            "borderRadius": "4px",
            "cursor": "pointer",
            "zIndex": "9"
        }
        const nextStyle = {
            "position": "relative",
            "backgroundColor": "transparent",
            "color": "white",
            "float": "right",
            "marginTop": "-30%",
            "width": "8%",
            "height": "80px",
            "outline": "none",
            "borderRadius": "4px",
            "cursor": "pointer",
            "zIndex": "9"
        }

        const carouselButtons = {
            "width": "100%",
            "height": "10%"
        }

        const arrowStyle = {
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "marginTop": "-15px",
            "marginLeft": "-15px",
            "width": "30px",
            "height": "30px"
        }

        const downloadLinkStyle = {
            "textAlign": "center"
        }
        const downloadBtn = {
            "display": this.state.display, 
            "margin": "0 auto",
            "background": "none",
            "border": "none",
            "cursor": "pointer"
        }

        const badgeStyle = {
            "width": "100%",
            "marginLeft": "4%",
            "display": this.state.badgeDisplay
        }
        const appleBadgeStyle = {
            "display": "inline-block",
            "paddingBottom": "9px"
        }
        const webLinkStyle = {
            "textAlign": "center",
            "display": this.state.webLinkDisplay
        }
        const anchorStyle = {
            "backgroundColor": "black",
            "fontSize": "1.5em",
            "textDecoration": "none",
            "padding": "14px 14px",
            "color": "white"
        }
        return(
            <section>
                <Carousel
                    showThumbs={false}
                    showArrows={false}
                    selectedItem={this.state.currentSlide}
                    onChange={this.changeHandler}
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

                    <div>
                        <img style={projectIcons} alt="tommyturtle" src={turtleIcon} />
                        <p className="legend">Tommy the Turtle</p>
                    </div>

                    <div>
                        <img style={projectIcons} alt="stemdashweb" src={StemdashWebIcon} />
                        <p className="legend">STEMDash Web</p>
                    </div>
                    <div>
                        <img style={projectIcons} alt="nighmare" src={nighmareIcon} />
                        <p className="legend">Nighmare of Frankie Stupidhead</p> 
                    </div>
                    <div>
                        <img style={projectIcons} alt="hallucination" src={hallucinationIcon} />
                        <p className="legend">Breaking the Wall</p> 
                    </div>
                </Carousel> 
                <div style={carouselButtons}>
                    <button style={prevStyle} onClick={this.prev} onMouseEnter={this.prevHover } onMouseLeave={this.prevHover} >
                        <img style={arrowStyle} src={leftArrow} alt="Previous" />
                    </button>
                    <button style={nextStyle} onClick={this.next} >
                        <img style={arrowStyle} src={rightArrow} alt="Next" />
                    </button>
                </div>
                <p>
                    {this.state.projectDescription} <br/>
                </p>

                <div style={webLinkStyle} >
                    <br />
                    <a href={this.state.webLink} style={anchorStyle} target="_blank">Visit</a>
                </div>

                <div style={badgeStyle}>
                    <a href={this.state.appleLink} target="_blank">
                        <img src={appleBadge} style={appleBadgeStyle} alt="Apple Badge" />
                    </a>
                    <a href={this.state.googleLink}  target="_blank">
                        <img src={googlePayBadge} alt="Google Play Badge"/>
                    </a>
                </div>
                <p style={downloadLinkStyle}>
                    <b>{this.state.downloadMessage}</b> 
                </p>
                    <button style= {downloadBtn} onClick={this.downloadFile}>
                        <img src={windowsDownloadBtn} alt="Windows Button"/>
                    </button>
                <br/>
            </section>
        );
    }

}

class Resume extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numPages: null,
            pageNumber: 1
        };
    }
     
      onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
      }
    render() {
        const pdfStyle = {
            "overflowY": "scroll",
            "width": "100%",
            "height": "400px"
        }
        return(
            <div style={pdfStyle}>
                <Document file={myResume} 
                onLoadSuccess={this.onDocumentLoad} 
                >
                <Page pageNumber={this.state.pageNumber} />
                </Document>
            </div>
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
        this.openGitHub  = this.openGitHub.bind(this);
        this.openLinkedIn  = this.openLinkedIn.bind(this);
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

    openGitHub() {
        window.open("https://github.com/rogueflynn", "_blank");
    }

    openLinkedIn() {
        window.open("https://www.linkedin.com/in/vgonzalez2/", "_blank");
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
                        <button onClick={this.openGitHub}>GitHub</button>
                        <button onClick={this.openLinkedIn}>LinkedIn</button>
                    </div>
                </div>
                
                <Modal show={this.state.isOpen} onClose={this.toggleModal} title={this.titles[this.state.modalName]}>
                    <ModalPage modalPage={this.state.modalName} />
                </Modal>

            </section>
        );
    }
}