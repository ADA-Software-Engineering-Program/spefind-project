import React from "react";
import "./JoinSite.css";
import JoinCard from "./JoinCard";

const details = [
  {
    id: 1,
    title: "Better Access To Events",
    detail:
      "By joining our platform, you will gain access to an exclusive range of event opportunities that event organizers will be posting on our platform which are not publicly advertised.",
  },
  {
    id: 2,
    title: "Profesional Development",
    detail:
      "By joining our platform, you will learn from other communicators and have access to resources that can help you improve your skill as a communicator.",
  },
  {
    id: 3,
    title: "Marketing and Promotion",
    detail:
      "By joining our platform, we can market you, promote you, and give you premium recommendations for high-profile events.",
  },
  {
    id: 4,
    title: "Increased Visibility",
    detail:
      "Joining SPEFIND will increase your visibility and help you get discovered and booked for events.",
  },
];

export default function JoinSite() {
  return (
    <div className="joinSite text-center px-lg-5 px-md-4 px-3">
      <h3 className="findHead fw-bolder">
        Why join our site as a <span className="heroColor">communicator?</span>
      </h3>

      <div className="row joinRow justify-content-center mx-auto">
        {details.map((item) => (
          <div key={item.id} className="col-md-6">
            <JoinCard title={item.title} detail={item.detail} />
          </div>
        ))}
      </div>
    </div>
  );
}
