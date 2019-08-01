import React from 'react'
import './projects.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import img1 from '../../assets/ssb.PNG'
import img2 from '../../assets/porcelain.PNG'
import img3 from '../../assets/dayout.jpg'
import img4 from '../../assets/rpg.png'
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

const Projects = _ => {
    return (
        <div id="projects">
            <div className="container1">
                <h2 className="subtitle">Projects</h2>
                <div className="projectcontainer">
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="July 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#a38658' }}    
                            >
                            <div className="projectinfo">
                                <h3 className="vertical-timeline-element-title">Super Street Battle</h3>
                                <img className='projectimg' src={img1} alt="Super Street Battle"/>
                                <p className='projectdesc'>A strategy game for car enthusiasts, to battle others to game money and upgrade car stats</p>
                                <p className='projectdesc'>Technologies used: MERN stack application, Firebase Auth, Javascript, Bootstrap and CSS</p>
                            </div>
                            <a href="https://github.com/super-street-battle/super-street-battle">
                                <AwesomeButton
                                    size="small"
                                    type="primary"
                                    >
                                    Github
                                </AwesomeButton>
                            </a>
                            <a href="https://superstreetbattle.herokuapp.com/Login">
                                <AwesomeButton
                                    className="projectbtn"
                                    size="small"
                                    type="primary"
                                    >
                                    View
                                </AwesomeButton>
                            </a>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="June 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#a38658' }}
                            >
                            <div className="projectinfo">
                                <h3 className="vertical-timeline-element-title">Porcelain</h3>
                                <img className='projectimg' src={img2} alt="Porcelain"/>
                                <p className='projectdesc'>A Yelp/Instagram inspired restroom finder application. Because when you gotta go you gotta know!</p>
                                <p className='projectdesc'>Technologies used: MySQL, Node.js, React, Express, AWS, Google Map API, Javascript, and Bootstrap</p>
                            </div> 
                            <a href="https://github.com/mjanders6/porcelain">
                                <AwesomeButton
                                    size="small"
                                    type="primary"
                                    >
                                    Github
                                </AwesomeButton>
                            </a>
                            <a href="https://sheltered-cliffs-91931.herokuapp.com">
                                <AwesomeButton
                                    className="projectbtn"
                                    size="small"
                                    type="primary"
                                    >
                                    View
                                </AwesomeButton>
                            </a>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="April 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#a38658' }}
                            >
                            <div className="projectinfo">
                                <h3 className="vertical-timeline-element-title">Day Out</h3>
                                <img className='projectimg' src={img3} alt="Day Out"/>
                                <p className='projectdesc'>Want to plan your day in a specific area but don't know what to do, where to go, or how to get there? Well then this app is just what you need!</p>
                                <p className='projectdesc'>Technologies used: Javascript, Firebase Auth, Firestore, Yelp API, Mapquest API, and Materialize</p>
                            </div> 
                            <a href="https://github.com/fliptosideb/ACSO6OASO1T10">
                                <AwesomeButton
                                    size="small"
                                    type="primary"
                                    >
                                    Github
                                </AwesomeButton>
                            </a>
                            <a href="https://day-out-7bc8d.firebaseapp.com/">
                                <AwesomeButton
                                    className="projectbtn"
                                    size="small"
                                    type="primary"
                                    >
                                    View
                                </AwesomeButton>
                            </a>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="March 2019"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#a38658' }}
                            
                            >
                            <div className="projectinfo">
                                <h3 className="vertical-timeline-element-title">Harry Potter RPG</h3>
                                <img className='projectimg' src={img4} alt="RPG"/>
                                <p className='projectdesc'>An RPG game featuring key characters in the Harry Potter franchise. Where you must pick your hero and battle the 3 remaining characters</p>
                                <p className='projectdesc'>Technologies used: Javascript, HTML, and CSS</p>
                            </div> 
                            <a href="https://github.com/anniekpham/Harry-Potter-RPG">
                                <AwesomeButton
                                    size="small"
                                    type="primary"
                                    >
                                    Github
                                </AwesomeButton>
                            </a>
                            <a href="https://anniekpham.github.io/Harry-Potter-RPG/">
                                <AwesomeButton
                                    className="projectbtn"
                                    size="small"
                                    type="primary"
                                    >
                                    View
                                </AwesomeButton>
                            </a>
                        </VerticalTimelineElement>
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Projects