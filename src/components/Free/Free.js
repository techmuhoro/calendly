import Try from "./imgs/free-try.svg"
import "./Free.css";

export function Free() {
    return(
        <div className="free">
            <div className="free-wrapper">
                <div className="free-heading">
                    <p className="head">Try Calendly free</p>
                    <div className="try-img">
                        <div className="hexagon"></div>
                        <div className="free-try">
                            <p>Try for free</p>
                            <p>
                                <i className="fas fa-arrow-right"></i>
                            </p>
                        </div>
                    </div>
                </div>
                <p className="subtext-1">
                    <span>After your 14-day trial of our Professional plan, enjoy </span>
                    <span>the Free version of Calendly – forever.</span>                     
                </p>
                <p className="subtext-2">
                    <span>
                        To inquire about our enterprise plans, click 
                    </span>
                    <a href="##"> here</a>
                </p>
            </div>
        </div>
    );
}