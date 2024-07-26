import React from "react";
import CoreTeamCard from "./CoreTeamCard";

type Props = {};
const coreTeam = [
  {
    id: 1,
    name: "name of employee",
    designation: "designation of employee",
    image: "",
  },
  {
    id: 2,
    name: "name of employee",
    designation: "designation of employee",
    image: "",
  },
  {
    id: 3,
    name: "name of employee",
    designation: "designation of employee",
    image: "",
  },
  {
    id: 4,
    name: "name of employee",
    designation: "designation of employee",
    image: "",
  },
  {
    id: 5,
    name: "name of employee",
    designation: "designation of employee",
    image: "",
  },
  {
    id: 6,
    name: "name of employee",
    designation: "designation of employee",
    image: "",
  },
];
const CoreTeam = (props: Props) => {
  return (
    <section className="core-team section-x-padding section-y-padding max-width">
      <h2 className="hero-section-title">Core Team</h2>
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 place-items-center xl:grid-cols-3 gap-8 lg:gap-20 mt-10 lg:mt-8">
        {coreTeam.map((member, index) => (
          <CoreTeamCard
            key={index}
            designation={member.designation}
            image={member.image}
            name={member.name}
          />
        ))}
      </div>
    </section>
  );
};

export default CoreTeam;
