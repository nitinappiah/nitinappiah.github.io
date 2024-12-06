// @ts-nocheck
import "../assets/chart.css";
import "../assets/font.css";
import { ResponsiveAreaBump } from "@nivo/bump";
import { ResponsiveRadar } from "@nivo/radar";
import InfiniteScroll from "../components/infinite_scroll";
import { Fragment } from "react/jsx-runtime";
import hexion from "../assets/imgs/hexion.png";
import ssn from "../assets/imgs/ssn.png";
import ohio_state from "../assets/imgs/ohio state.svg";
import synopsys from "../assets/imgs/synopsys.png";
import vue from "../assets/imgs/vue.png";

function Experience() {
  const area_bump_data = [
    {
      id: "Java",
      data: [
        { x: "Anna Univ", y: 10 },
        { x: "Vue.AI", y: 25 },
        { x: "Ohio St", y: 0 },
        { x: "Synopsys", y: 25 },
        { x: "Hexion", y: 20 },
      ],
    },
    {
      id: "C/ C++",
      data: [
        { x: "Anna Univ", y: 10 },
        { x: "Vue.AI", y: 10 },
        { x: "Ohio St", y: 50 },
        { x: "Synopsys", y: 25 },
        { x: "Hexion", y: 0 },
      ],
    },
    {
      id: "JS",
      data: [
        { x: "Anna Univ", y: 50 },
        { x: "Vue.AI", y: 50 },
        { x: "Ohio St", y: 0 },
        { x: "Synopsys", y: 0 },
        { x: "Hexion", y: 10 },
      ],
    },
    {
      id: "Python",
      data: [
        { x: "Anna Univ", y: 50 },
        { x: "Vue.AI", y: 15 },
        { x: "Ohio St", y: 50 },
        { x: "Synopsys", y: 60 },
        { x: "Hexion", y: 90 },
      ],
    },
    {
      id: "SQL",
      data: [
        { x: "Anna Univ", y: 5 },
        { x: "Vue.AI", y: 25 },
        { x: "Ohio St", y: 5 },
        { x: "Synopsys", y: 15 },
        { x: "Hexion", y: 50 },
      ],
    },
  ];

  const radar_data = [
    {
      domain: "DEVOPS & CLOUD",
      Experience: 40,
      Interest: 60,
    },
    {
      domain: "ANALYTICS",
      Experience: 100,
      Interest: 25,
    },
    {
      domain: "DATA ENG",
      Experience: 80,
      Interest: 75,
    },
    {
      domain: "FULL STACK DEV",
      Experience: 75,
      Interest: 90,
    },
    {
      domain: "DISTRI SYS",
      Experience: 75,
      Interest: 50,
    },
    {
      domain: "GEN AI",
      Experience: 80,
      Interest: 100,
    },
    {
      domain: "NLP/CV/ML",
      Experience: 75,
      Interest: 100,
    },
  ];

  const area_bump_props = {
    margin: { top: 40, right: 60, bottom: 40, left: 40 },
    spacing: 8,
    colors: { scheme: "category10" },
    motionConfig: "wobbly",
    theme: {
      axis: {
        ticks: {
          text: {
            fontFamily: "Source Code Pro, sans-serif", // Set your font family here
            fontSize: 12,
            fill: "#333",
          },
        },
        legend: {
          text: {
            fontFamily: "Source Code Pro, sans-serif", // Set for legends
            fontSize: 12,
            fill: "#333",
          },
        },
      },
      labels: {
        text: {
          fontFamily: "Source Code Pro, sans-serif", // Set for labels
          fontSize: 12,
          fill: "#333",
        },
      },
    },
  };

  const company_cards = [
    [hexion, "https://www.hexion.com/"],
    [ohio_state, "https://u.osu.edu/ning.104/"],
    [synopsys, "https://www.synopsys.com/"],
    [
      ssn,
      "https://www.ssn.edu.in/college-of-engineering/computer-science-and-engineering-department-ssn-institutions/",
    ],
    [vue, "https://vue.ai/"],
  ].map((element) => {
    return (
      <div className="flex-img-div item-margin hover card" style={{width:"13vh", height:"13vh"}}>
        <a href={element[1]}>
          <img
            src={element[0]}
            alt="Description of the image"
            style={{ width: "15vh", height: "auto", padding: "2vh" }}
          />
        </a>
      </div>
    );
  });

  const radar_props = {
    keys: ["Experience", "Interest"], // Must match keys in the data
    indexBy: "domain", // Ensure the `indexBy` value exists in the data
    margin: { top: 50, right: 50, bottom: 50, left: 50 },
    colors: { scheme: "category10" },
    borderWidth: 2,
    theme: {
      axis: {
        ticks: {
          text: {
            fontFamily: "Source Code Pro, sans-serif", // Set your font family here
            fontSize: 12,
            fill: "#333",
          },
        },
        legend: {
          text: {
            fontFamily: "Source Code Pro, sans-serif", // Set for legends
            fontSize: 12,
            fill: "#333",
          },
        },
      },
      labels: {
        text: {
          fontFamily: "Source Code Pro, sans-serif", // Set for labels
          fontSize: 12,
          fill: "#333",
        },
      },
    },
  };

  return (
    <Fragment>
      <div className="card chart-margin">
        <div className="source-code-pro-font flex-container">SKILLS</div>
        <div className="chart-container">
          <ResponsiveAreaBump data={area_bump_data} {...area_bump_props} />
        </div>
      </div>
      <div className="flex-container chart-margin">
        <div
          className="card flex-container chart-margin"
          style={{ width: "50vh", minHeight: "38vh" }}
        >
          <div className="source-code-pro-font">INDUSTRY AND INSTITUTIONS</div>
          <div className="flex-container">{company_cards}</div>
        </div>
        <div
          className="card chart-margin"
          style={{ width: "50vh", height: "38vh" }}
        >
          <ResponsiveRadar data={radar_data} {...radar_props} />
        </div>
        <div
          className="card flex-container chart-margin"
          style={{ width: "50vh", height: "38vh" }}
        >
          <div className="source-code-pro-font">TOOLS</div>
          <InfiniteScroll />
        </div>
      </div>
    </Fragment>
  );
}

export default Experience;
