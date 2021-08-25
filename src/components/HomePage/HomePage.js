import { useHistory, Redirect, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faKeyboard } from "@fortawesome/free-solid-svg-icons";
import shortid from "shortid";
import "./HomePage.scss";
import Header from "../UI/Header/Header";
import { useState } from "react";
// https://duomeet355.web.app/
const HomePage = () => {
  const [link, setLink] = useState("");
  const history = useHistory();

  const startCall = () => {
    const uid = shortid.generate();
    history.push(`/${uid}#init`);
  };

  const handleInputChange = (e) => {
    setLink(e.target.value);
  };

  return (
    <div className="home-page">
      <Header />
      <div className="body">
        <div className="left-side">
          <div className="content">
            <h2>Premium video meetings. Now free for everyone.</h2>
            <p>
              We re-engineered the service we built for secure business
              meetings, Google Meet, to make it free and available for all.
            </p>
            <div className="action-btn">
              <button className="btn green" onClick={startCall}>
                <FontAwesomeIcon className="icon-block" icon={faVideo} />
                New Meeting
              </button>
              <div className="input-block">
                <div className="input-section">
                  <FontAwesomeIcon className="icon-block" icon={faKeyboard} />
                  <input
                    placeholder="Enter meeting code"
                    value={link}
                    onChange={handleInputChange}
                  />
                </div>
                <button className="btn no-bg">
                  <Link to={link}>Join</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="help-text">
            <a href="####">Learn more</a> about Google Meet
          </div>
        </div>
        <div className="right-side">
          <div className="content">
            <img
              src="https://www.gstatic.com/meet/google_meet_marketing_ongoing_meeting_grid_427cbb32d746b1d0133b898b50115e96.jpg"
              alt="###"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
