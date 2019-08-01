import React, {useState} from 'react'
import './projects.css'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import project from '../../projects.json'
import img1 from '../../assets/ssb.PNG'
import img2 from '../../assets/porcelain.PNG'
import img3 from '../../assets/dayout.jpg'
import img4 from '../../assets/rpg.png'

const Projects = _ => {
    const [portfolioState, setportfolioState] = useState({
        images: [img1, img2, img3, img4],
        projects: project
    })
    return (
        <div id="projects">
            <div className="container1">
                <h2 className="subtitle">Projects</h2>
                <div className="projectcontainer">
                    <VerticalTimeline>
                        {project.map(({name, description, technologies, github, site, date }, i) => (
                            <>
                                <VerticalTimelineElement
                                    className="vertical-timeline-element--work"
                                    date={date}
                                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#a38658' }}    
                                    >
                                    <div className="projectinfo">
                                        <h3 className="vertical-timeline-element-title">{name}</h3>
                                        <img className='projectimg' src={portfolioState.images[i]} alt={name}/>
                                        <p className='projectdesc'>{description}</p>
                                        <p className='projectdesc'>Technologies used: {technologies}</p>
                                    </div>
                                    <a href={github}>
                                        <AwesomeButton
                                            size="small"
                                            type="primary"
                                            >
                                            Github
                                        </AwesomeButton>
                                    </a>
                                    <a href={site}>
                                        <AwesomeButton
                                            className="projectbtn"
                                            size="small"
                                            type="primary"
                                            >
                                            View
                                        </AwesomeButton>
                                    </a>
                                </VerticalTimelineElement>
                            </>
                        ))}
                    </VerticalTimeline>
                </div>
            </div>
        </div>
    )
}

export default Projects