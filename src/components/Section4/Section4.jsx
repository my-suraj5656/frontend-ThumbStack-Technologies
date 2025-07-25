import React from "react";
import "./Section4.css";

const stages = [
  {
    title: "Stage 1",
    heading: "Cloud infrastructure",
    button: "Book a demo",
  },
  {
    title: "Stage 2",
    heading: "Collaboration",
    description: "EU alternative to GoogleWorkspace Teams, Meet a.o.",
    button: "Try it",
    highlight: true,
    status: "In Pilot",
  },
  {
    title: "Stage 3",
    heading: "Communication",
    description:
      "Apura IaaS is our service allowing customers to develop applications on our secured data ownership focused platform.",
    status: "Coming soon",
  },
  {
    title: "Stage 4",
    heading: "Connectivity",
    description: "EU alternative to LinkedIn, Instagram",
    status: "Coming soon",
  },
  {
    title: "Stage 5",
    heading: "Entertainment",
    description: "EU alternative to Youtube, Tiktok",
    status: "Coming soon",
  },
];

const Section4 = () => {
  return (
    <div className="container">
      <div className="heading">
        Our Road to Creating Data <br /> Ownership and Security
      </div>
      <div className="allcards">
        {stages.map((stage, index) => (
          <div
            key={index}
            className={`section4-card ${stage.highlight ? "highlight" : ""}`}
          >
            <div className="left-content">
              <h2>{stage.title}</h2>
              <h1>{stage.heading}</h1>
              {stage.description && <p>{stage.description}</p>}
            </div>
            <div className="right-content">
              {stage.button ? (
                <>
                  <button className={index === 1 ? "trybtn" : "stage-button"}>
                    {stage.button}
                  </button>
                  <span className="arrow">→</span>
                </>
              ) : (
                <span className="status coming">{stage.status}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section4;


// import React from "react";
// import "./Section4.css";

// const stages = [
//   {
//     title: "Stage 1",
//     heading: "Cloud infrastructure",
//     description: "",
//     button: "Book a demo",
//   },
//   {
//     title: "Stage 2",
//     heading: "Collaboration",
//     description: "EU alternative to GoogleWorkspace Teams, Meet a.o.",
//     button: "Try it",
//     highlight: true,
//     status: "In Pilot",
//   },
//   {
//     title: "Stage 3",
//     heading: "Communication",
//     description:
//       "Apura IaaS is our service allowing customers to develop applications on our secured data ownership focused platform.",
//     status: "Coming soon",
//   },
//   {
//     title: "Stage 4",
//     heading: "Connectivity",
//     description: "EU alternative to LinkedIn, Instagram",
//     status: "Coming soon",
//   },
//   {
//     title: "Stage 5",
//     heading: "Entertainment",
//     description: "EU alternative to Youtube, Tiktok",
//     status: "Coming soon",
//   },
// ];

// const Section4 = () => {
//   return (
//     <div className="container">
//       <div className="heading">
//         Our Road to Creating Data <br /> Ownership and Security
//       </div>
//       <div className="allcards">
//         {stages.map((stage, index) => (
//           <div
//             key={index}
//             className={`section4-card ${stage.highlight ? "highlight" : ""}`}
//           >
//             <div className="left-content">
//               <h2>{stage.title}</h2>
//               <h1>{stage.heading}</h1>
//               <p>{stage.description}</p>
//               {stage.button && (
//                 <div className="button-row">
//                   <button className={index === 1 ? "trybtn" : "stage-button"}>
//                     {stage.button}
//                   </button>
//                   <span className="arrow">→</span>
//                 </div>
//               )}
//               {!stage.button && (
//                 <div className="right-content">
//                   <span className="status coming">{stage.status}</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Section4;
