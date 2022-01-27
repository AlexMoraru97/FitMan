import React from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { dataHandler } from "../DataManager/DataHandler";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { STATE } from "./State";
import { useAtom } from "jotai";

export const Trainer = ({ trainerId, name, experienceYears, dateOfBirth, owned }) => {
  const [loggedIn] = useAtom(STATE.LOGGED_IN);
  const [user] = useAtom(STATE.USER);

  let params = useParams();

  const history = useHistory();

  const location = useLocation();

  const deleteEvent = async (e) => {
    e.preventDefault();
    const response = await dataHandler.deleteTrainer(
      params.gymId,
      params.courseId,
      trainerId
    );

    typeof response !== "undefined" && response.status === 204
      ? history.go(0)
      : history.push(location);
  };

  return (
    <div className="card-item">
      <img
        src={`${process.env.REACT_APP_BASEIMGURL}${process.env.REACT_APP_TRAINERIMG}/${name}.png`}
        alt={name}
      />
      <div className="card-text">
        <span>
          {name},{" "}
          {new Date().getFullYear() - parseInt(dateOfBirth.split("-")[0])}
          <NavLink
            className={`bi bi-pencil-square ms-3 btn-icon ${
              loggedIn === false || "Gyms" in user === false || owned === false
                ? "logout-display"
                : ""
            }`}
            exact
            to={`/gyms/${params.gymId}/courses/${params.courseId}/trainers/${trainerId}/edit`}
          />
          <i
            className={`delete-icon bi bi-trash-fill ms-3 btn-icon ${
              loggedIn === false || "Gyms" in user === false || owned === false
                ? "logout-display"
                : ""
            }`}
            onClick={(e) => deleteEvent(e)}
          />
        </span>
        <p>Experience: {experienceYears} years</p>
      </div>
    </div>
  );
};
