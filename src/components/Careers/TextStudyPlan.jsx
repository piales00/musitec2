import { Fragment } from "react";
import './TextStudyPlan.css';

function TextStudyPlan({textCareerStudyPlan}) {

    return (
        <>
            <div id="textStudyPlan">
                <p>
                    {textCareerStudyPlan}
                </p>
            </div>
        </>
    );
}

export default TextStudyPlan;