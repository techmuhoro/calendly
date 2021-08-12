import VideoImage from "./imgs/video-image.webp";
import "./Action.css";

export function Action() {
    return(
        <div className="action">
            <div className="action-heading">
                <p>How it works</p>
                <h1>Calendly in action</h1>
            </div>
            <div className="action-video">
                <img src={VideoImage} alt="video" width="200" />
                <div className="play">
                    <span>
                        <i className="fas fa-play"></i>
                    </span>
                </div>
            </div>
            <div className="list">
                <div className="list-item">
                    <div className="number">
                        <p>1</p>
                    </div>
                    <div className="heading">
                        <p>Create <span>simple rules</span> </p>
                    </div>
                    <p className="p-body">
                        Let Calendly know your availability preferences and it’ll do the work for you.
                    </p>
                </div>
                <div className="list-item">
                    <div className="number">
                        <p>2</p>
                    </div>
                    <div className="heading">
                        <p>Share your <span>link</span></p>
                    </div>
                    <p className="p-body">
                        Let Calendly know your availability preferences and it’ll do the work for you.
                    </p>
                </div>
                <div className="list-item list-3">
                    <div className="number">
                        <p>3</p>
                    </div>
                    <div className="heading">
                        <p>Get booked</p>
                    </div>
                    <p className="p-body">
                        Let Calendly know your availability preferences and it’ll do the work for you.
                    </p>
                </div>
            </div>
        </div>
    );
}