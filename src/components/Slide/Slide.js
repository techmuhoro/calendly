import {useState} from "react"
import BitlyAvatar from "./imgs/Bitly.webp"
import StudiesAvatar from "./imgs/Studies.webp";
import DecoAvatar from "./imgs/Deco.svg";
import "./Slide.css";

export function Slide() {
    const [isBitly, setIsBitly] = useState(true);
    
    return(
        <div className="slide">
            <div className="component">
                {
                    isBitly ? <Bitly /> : <Studies />
                }
            </div>
            <div className="controls">
                <button 
                    style={{ backgroundColor: isBitly ? "dodgerblue" : "rgb(224, 223, 223)" }}
                    onClick={function activateBitlyComponent(){
                        setIsBitly(true);
                    }}
                ></button>
                <button
                    style={{ backgroundColor: isBitly ? "rgb(224, 223, 223)" : "dodgerblue" }}
                    onClick={function activateStudiesComponent(){
                        setIsBitly(false);
                    }}
                ></button>
            </div>
        </div>
    );
}

// On of the slides
function Bitly() {
    return(
        <div className="bitly">
            <div className="slide-comp">
                <div className="component-left">
                    <div className="slide-image">
                        <img src={BitlyAvatar} alt="group of people" />
                    </div>
                </div>
                <div className="component-right">
                    <p className="sec-head">Bitly</p>
                    <p className="main-head">
                        "Not only do the SDRs come in with a whole calendar of prospects to speak with, they have more prospects show up to their meetings."
                    </p>
                    <p className="name">
                        James Douglas
                    </p>
                    <div className="teams">
                        <p>See how teams are using Calendly</p>
                        <p>
                            <span>
                                <i className="fas fa-arrow-right"></i>
                            </span>
                        </p>
                    </div>
                    <div className="deco">
                        <img src={DecoAvatar} alt="decoration avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
}

//Another slide
function Studies() {
    return(
        <div className="studies">
            <div className="slide-comp">
                <div className="component-left">
                    <div className="slide-image">
                        <img src={StudiesAvatar} alt="group of people" />
                    </div>
                </div>
                <div className="component-right">
                    <p className="sec-head">COLLEGE FOR CREATIVE STUDIES</p>
                    <p className="main-head">
                        "I was cobbling a system together before, whereas now the system already exists and I can just use it. Before, there were so many steps. Now, it's seamless."
                    </p>
                    <p className="name">
                        Eric Goodluck
                    </p>
                    <div className="teams">
                        <p>See how teams are using Calendly</p>
                        <p>
                            <span>
                                <i className="fas fa-arrow-right"></i>
                            </span>
                        </p>
                    </div>
                    <div className="deco">
                        <img src={DecoAvatar} alt="decoration avatar" />
                    </div>
                </div>
            </div>
        </div>
    );
}