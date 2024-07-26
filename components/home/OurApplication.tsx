import React from "react";
import MarqueSlider from "../reusables/MarqueSlider";

type Props = {};

const OurApplication = (props: Props) => {
  const data = [
    "/assets/projects/img2.jpeg",
    "/assets/projects/img3.jpeg",
    "/assets/projects/img4.jpeg",
    "/assets/projects/img5.jpeg",
    "/assets/projects/img6.jpg",
    "/assets/projects/img7.jpg",
    "/assets/projects/img8.jpg",
    "/assets/projects/img9.jpg",
    "/assets/projects/img10.jpg",
    "/assets/projects/img11.png",
    "/assets/projects/img12.png",
    "/assets/projects/img13.png",
  ];

  return (
    <div className="flex flex-col justify-between items-center gap-8  section-y-padding">
      <h4>Our Application</h4>

      <MarqueSlider data={data} />
    </div>
  );
};

export default OurApplication;
