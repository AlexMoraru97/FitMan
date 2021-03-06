import React from "react";
import { NavLink } from "react-router-dom";
import { dataHandler } from "../DataManager/DataHandler";
import { ownedGymsSetter, userSetter, loggedInSetter } from "./State";
import { useUpdateAtom, useAtomValue } from "jotai/utils";
import { STATE } from "./State.js";

export const Gym = ({ gymId, name, address, description }) => {
  const user = useAtomValue(userSetter);
  const loggedIn = useAtomValue(loggedInSetter);
  const ownedGyms = useAtomValue(ownedGymsSetter);
  const setGyms = useUpdateAtom(STATE.GYMS);

  const deleteEvent = (e) => {
    e.preventDefault();
    dataHandler.deleteGym(gymId).then(() => setGyms());
  };

  return (
    <div className="card-item">
      <img
        src={`${process.env.REACT_APP_BASEIMGURL}${process.env.REACT_APP_GYMIMG}/${name}.png`}
        alt={name}
      />
      <div className="card-text">
        <span>
          <NavLink to={`/gyms/${gymId}/courses`}>{name}</NavLink>
          {ownedGyms.includes(gymId) && (
            <>
              <NavLink
                className={`bi bi-pencil-square ms-3 btn-icon ${
                  !loggedIn || !("Gyms" in user) ? "logout-display" : ""
                }`}
                exact
                to={`/gyms/${gymId}/edit`}
              />
              <i
                className={`delete-icon bi bi-trash-fill ms-3 btn-icon ${
                  !loggedIn || !("Gyms" in user) ? "logout-display" : ""
                }`}
                onClick={(e) => deleteEvent(e)}
              />
            </>
          )}
        </span>
        <p>{address}</p>
        <h4>{description}</h4>

        <ul className="social-icons">
          <li>
            <a className="icon" href={`${process.env.REACT_APP_FRONTEND}`}>
              <i className="bi bi-facebook"></i>
            </a>
          </li>
          <li>
            <a className="icon" href={`${process.env.REACT_APP_FRONTEND}`}>
              <i className="bi bi-instagram"></i>
            </a>
          </li>
          <li>
            <a className="icon" href={`${process.env.REACT_APP_FRONTEND}`}>
              <i className="bi bi-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
