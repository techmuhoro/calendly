import "./Demand.css";
import DemandAvatar from "./imgs/demand-avatar.webp"

export function Demand() {
    return(
        <div className="demand">
            <div className="demand-wrapper">
                <div className="demand-text">
                    <div className="text-heading">
                        <p className="sub-head">ON-DEMAND SCHEDULING</p>
                        <p className="main-head">
                            <span>Make more connections </span>
                            <span>and reduce cancellations</span>
                        </p>
                    </div>
                    <p className="body-text">
                        Prospects can schedule meetings in just a few clicks – whenever the moment is right. And cancellations go down because rescheduling is easy, fast, and on their terms
                    </p>
                </div>
                <div className="demand-display">
                    <img src={DemandAvatar} alt="on demand scheduling" />
                </div>
            </div>
        </div>
    );
}