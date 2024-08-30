import { Fragment } from "react";
import './TitleStudyPlan.css';

function TitleStudyPlan({titleCareerStudyPlan}) {

    return (
        <>
            <div className="containerTitleStudyPlan">
                <h1 id="titleStudyPlan" style={{ whiteSpace: 'nowrap' }}>MALLA CURRICULAR</h1>
                <h3 id="titleCareerStudyPlan" style={{ textAlign: 'center' }}>({titleCareerStudyPlan})</h3>
                <div className="underlineStudyPlan"></div>
            </div>
        </>
    );
}

export default TitleStudyPlan;