import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { dataHandler } from "../DataManager/DataHandler";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { userSetter, loggedInSetter, attendedCoursesSetter } from "./State";
import { useAtom } from "jotai";
import { useAtomValue } from "jotai/utils";

export const Course = ({
  name,
  defaultPrice,
  description,
  schedule,
  courseId,
  owned,
}) => {
  const user = useAtomValue(userSetter);
  const loggedIn = useAtomValue(loggedInSetter);
  const attendedCourses = useAtomValue(attendedCoursesSetter);

  let params = useParams();

  const history = useHistory();

  const location = useLocation();

  const deleteEvent = async (e) => {
    e.preventDefault();
    const response = await dataHandler.deleteCourse(params.gymId, courseId);

    typeof response !== "undefined" && response.status === 204
      ? history.go(0)
      : history.push(location);
  };

  const joinCourse = (e) => {
    e.preventDefault();
    dataHandler.postParticipant(params.gymId, courseId);
  };

  const leaveCourse = (e) => {
    e.preventDefault();
    dataHandler.deleteParticipant(params.gymId, courseId);
  };

  return (
    <div className="card-item course">
      <img
        src={`${process.env.REACT_APP_BASEIMGURL}${process.env.REACT_APP_COURSEIMG}/${name}.png`}
        alt={name}
      />
      <div className="card-text">
        <span>
          {name}
          <NavLink
            className={`bi bi-pencil-square ms-3 btn-icon ${
              !loggedIn || !("Gyms" in user) || !owned ? "logout-display" : ""
            }`}
            exact
            to={`/gyms/${params.gymId}/courses/${courseId}/edit`}
          />
          <i
            className={`delete-icon bi bi-trash-fill ms-3 btn-icon ${
              !loggedIn || !("Gyms" in user) || !owned ? "logout-display" : ""
            }`}
            onClick={(e) => deleteEvent(e)}
          />
        </span>
        <p>$ {defaultPrice}/month</p>
        <h4>{description}</h4>
        <p>Monday to Sunday: {schedule}</p>
        <p>
          <NavLink to={`/gyms/${params.gymId}/courses/${courseId}/exercises`}>
            Exercises
          </NavLink>
        </p>
        <p>
          <NavLink to={`/gyms/${params.gymId}/courses/${courseId}/trainers`}>
            Trainers
          </NavLink>
        </p>

        {"CourseParticipants" in user ? (
          !attendedCourses.includes(courseId) ? (
            <div className="btn-2" onClick={(e) => joinCourse(e)}>
              <em>JOIN</em> this course
            </div>
          ) : (
            <div className="btn-2" onClick={(e) => leaveCourse(e)}>
              <em>LEAVE</em> this course
            </div>
          )
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
