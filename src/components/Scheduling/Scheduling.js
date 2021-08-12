import Compass from "./imgs/Compass.svg";
import Drop from "./imgs/drop.svg";
import Ebay from "./imgs/ebay.svg";
import Lazboy from "./imgs/Lazboy.svg";
import Twilio from "./imgs/twilio.svg";
import "./Scheduling.css";

export function Scheduling() {
    return(
        <div className="scheduling">
            <div className="scheduling-heading">
                <p>Simplified scheduling for more than</p>
                <p><span>200,000,000</span> meetings</p>
            </div>
            <div className="patners">
                <img src={Compass} alt="compass" />
                <img src={Drop} alt="compass" />
                <img src={Ebay} alt="compass" />
                <img src={Lazboy} alt="compass" />
                <img src={Twilio} alt="compass" />
            </div>
        </div>
    );
}