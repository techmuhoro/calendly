import {Signup} from "../index";
import HeroAvatar from "./imgs/hero-image.svg"
import "./Hero.css";

export const Hero = () => {
    return (
        <div className="hero">
            <div className="hero-wrapper">
                <div className="message"> 
                    <div className="headings">                        
                        <h1>Easy</h1>
                        <h1>Scheduling</h1>
                        <h1>Ahead</h1>
                    </div>
                    <p className="secondary-text">
                        Calendly is your hub for scheduling meetings
                        professionally and efficiently, eliminating the hassle
                        of back-and-forth emails so you can get back to work.
                    </p>
                    <Signup />      
                </div>
                <div className="hero-image">
                    <img src={HeroAvatar} alt="landing page" />
                </div>
            </div>
        </div>
    )
}
