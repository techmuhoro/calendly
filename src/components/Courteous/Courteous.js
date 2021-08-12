import "./Courteous.css";
import CourteousAvatar from "./imgs/courteous-avatar.webp"

export function Courteous() {
    return(
        <div className="courteous">
            <div className="courteous-wrapper">
                <div className="courteous-text">
                    <div className="text-heading">
                        <p className="sub-head">THE COURTEOUS APPROACH</p>
                        <p className="main-head">
                            <span>Make more connections </span>
                            <span>and reduce cancellations</span>
                        </p>
                    </div>
                    <p className="body-text">
                        Prospects can schedule meetings in just a few clicks – whenever the moment is right. And cancellations go down because rescheduling is easy, fast, and on their terms
                    </p>
                </div>
                <div className="courteous-display">
                    <img src={CourteousAvatar} alt="courteous approach" />
                </div>
            </div>
        </div>
    );
}