import WorkflowImage from "./imgs/workflow-image.svg"
import "./Workflow.css";

export function Workflow() {
    return(
        <div className="workflow">
            <div className="workflow-wrapper">
                <div className="workflow-text">
                    <div className="text-heading">
                        <p className="sub-head">Workflow management</p>
                        <p className="main-head">
                            <span>Automate reminders and </span>
                            <span>follow-ups</span>
                        </p>
                    </div>
                    <p className="body-text">
                        Calendly puts your entire meeting workflow on autopilot, sending everything from reminder emails to thank you notes, so you can focus on the work only you can do. It’s like getting an assistant, even if you’re a business of one.
                    </p>
                </div>
                <div className="workflow-display">
                    <img src={WorkflowImage} alt="workflow display" />
                </div>
            </div>
        </div>
    );
}