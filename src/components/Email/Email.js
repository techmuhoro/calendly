import "./Email.css";

export function Email() {
    return(
        <div className="email">
            <div className="heading">
                <p>
                    <span>Schedule meetings without</span>
                    <span>the back-and-forth emails</span>
                </p>
            </div>
            <div className="text">
                <p>
                    <span>Calendly uncomplicates scheduling by only offering times</span>
                    <span>that work with your availability across all of your calendars.</span>
                </p>
            </div>
            <div className="decoration"></div>
            <div className="list">
                <div className="list-item list-1">
                    <div className="list-heading">
                        <p>Meet the way you want</p>
                    </div>
                    <div className="list-text">
                        <p>
                            Open your schedule only to the days and times that work for you. When your invitee chooses a meeting slot, it’s instantly confirmed.
                        </p>
                    </div>
                </div>
                <div className="list-item list-2">
                    <div className="list-heading">
                        <p>Calendly coordinates it all</p>
                    </div>
                    <div className="list-text">
                        <p>
                            Meetings are scheduled without calendar conflicts, reminders go out automatically, and rescheduling is a breeze for everyone
                        </p>
                    </div>
                </div>
            </div>
            <div className="email-btn">
                <button>See how teams are using Calendly</button>
            </div>
        </div>
    );
}