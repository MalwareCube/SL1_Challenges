import React from 'react';
import { Link } from 'react-router-dom';

//FA
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

//Components
import ShortAnswer from './questions/ShortAnswer.jsx'

const Challenge = ({ data }) => {

    //Reset Local Storage for this challenge
    const handleReset = () => {
        // Confirm with the user
        if (window.confirm("Are you sure you want to reset this challenge? All progress and submitted questions will be lost.")) {
            // Remove the localStorage key that matches data.uid
            localStorage.removeItem(data.uid);
            window.location.reload(); // Refresh the page
        }
    };

    return (
    <>
        <div>
        <div className="container">

            <div className="header">
                <div className="header_breadcrumb">
                    <Link to={`/`} className="header_breadcrumb_item">SOC Level 1 Tickets</Link>
                    <Link to={`/${data.uid}`} className="header_breadcrumb_item">{data.uid}</Link>
                </div>
            </div>


            <div className="challenge_form">

                {/*Challenge Metadata*/}
                <div className="challenge_metadata">
                    <h1>{data.subject}</h1>
                    <div className="challenge_metadata_fields">
                    <div className="challenge_metadata_field">
                            <span className="metadata_label">Ticket Number</span>
                            <span className="metadata_value">{data.uid}</span>
                        </div>

                        <div className="challenge_metadata_field">
                            <span className="metadata_label">Assignee</span>
                            <span className="metadata_value"><FontAwesomeIcon icon={faCircleUser} title="User Avatar"/>&nbsp;&nbsp;You</span>
                        </div>

                        <div className="challenge_metadata_field">
                            <span className="metadata_label">Reporter</span>
                            <span className="metadata_value"><FontAwesomeIcon icon={faCircleUser} title="User Avatar"/>&nbsp;&nbsp;{data.reporter}</span>
                        </div>
                    </div>
                </div>


                {/*Challenge Instructions*/}
                <div
                className="challenge_instructions"
                dangerouslySetInnerHTML={{
                    __html: `<h2>Description:</h2> ${data.instructions}`
                }}
                />

                {/* Questions */}
                <div className="questions">
                    {data.questions.map((question, index) => (
                    <ShortAnswer 
                        key={index} 
                        data={question} 
                        index={index + 1} 
                        uid={data.uid}
                    />
                    ))}
                </div>

                {/* Reset Button */}
                <div className="reset_button">
                    <button 
                        type="button" 
                        className="challenge_question_reset_button" 
                        title="Reset" 
                        tabIndex="-1"
                        onClick={handleReset} // Add onClick handler
                    >
                        Reset Challenge
                    </button>
                </div>

            </div>
        </div>
        </div>
    </>
    );
};

export default Challenge;
