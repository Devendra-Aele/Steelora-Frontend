// import Image from "next/image";
// import React from "react";

// type Props = {
//   name: string;
//   designation: string;
//   image: string;
// };

// const CoreTeamCard = (Props: Props) => {
//   return (
//     <div className="flex flex-col justify-between items-start gap-4">
//       <div className="w-[300px] h-[18.75rem] object-cover object-top border-[3px] border-white  ">
//         <Image
//           src={Props.image || "/assets/navbar/hero-img2.png"}
//           alt="img"
//           width={300}
//           height={300}
//           className="w-full h-full"
//         />
//       </div>
//       <div>
//         <p className="font-normal text-base lg:text-xl text-primary-text leading-5">
//           {Props.name}
//         </p>
//         <p className="font-normal text-sm  leading-4 text-para-text mt-1">
//           {Props.designation}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CoreTeamCard;

import Image from "next/image";
import React from "react";

type Props = {
  name: string;
  designation: string;
  image: string;
};

const CoreTeamCard = (props: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-[3px] border-white flex items-center justify-center">
        <Image
          src={props.image || "/assets/navbar/hero-img2.png"}
          alt="img"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>
      <div className="text-center">
        <p className="font-normal text-lg lg:text-xl text-primary-text leading-5">
          {props.name}
        </p>
        <p className="font-normal text-sm leading-4 text-para-text mt-1">
          {props.designation}
        </p>
      </div>
    </div>
  );
};

export default CoreTeamCard;

