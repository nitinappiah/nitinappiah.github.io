import React from "react";
import "../assets/flex_center.css";
import "../assets/scroll.css";
import { SiApachehive, SiApachehadoop, SiApachetomcat, SiSap, SiLangchain, SiPytorch, SiTensorflow, SiNumpy, SiKeras, SiOpencv, SiDatabricks, SiMysql, SiPostgresql, SiMongodb, SiPandas, SiGnubash, SiScikitlearn } from "react-icons/si";
import { VscAzure, VscAzureDevops } from "react-icons/vsc";
import { DiSqllite, DiDjango, } from "react-icons/di";
import { AiOutlineOpenAI } from "react-icons/ai";

function InfiniteScroll() {
  // const tools = [
  //   ["LLM", "Gen AI", "PyTorch", "Tensorflow", "Keras", "OpenCV", "RAG"],
  //   ["Git", "Slurm", "CICD", "BASH"],
  //   ["ETL", "Azure", "AWS", "Databricks", "SQL"],
  //   ["pandas", "Scikitlearn", "powerbi", "matplotlib", "seaborn"],
  //   ["React", "Node", "Django", "Flask", "Multithreading"],
  // ];

  const tool_icons = [
    [<VscAzure />, <VscAzureDevops />, <DiSqllite />, <DiDjango />, <AiOutlineOpenAI />],
    [<SiTensorflow />, <SiNumpy />, <SiKeras />, <SiOpencv />, <SiDatabricks />, <SiMysql />, <SiPostgresql />],
    [<SiMongodb />, <SiPandas />, <SiGnubash />, <SiScikitlearn />],
    [<SiApachehive />, <SiApachehadoop />, <SiApachetomcat />, <SiSap />, <SiLangchain />, <SiPytorch />]
  ];

  // const tools_elements = tools.map((t) => {
  //   let element_list = t.map((element) => {
  //     return <span>{element}</span>;
  //   });
  //   return (
  //     <div className="scroll" style={{ "--t": "30s" } as React.CSSProperties}>
  //       <div>{element_list}</div>
  //       <div>{element_list}</div>
  //     </div>
  //   );
  // });

  const tool_icons_elements = tool_icons.map((t) => {
    let element_icon_list = t.map((element) => {
      return (element);
    });
    return (
      <div className="scroll imgbx" style={{ "--t": "25s" } as React.CSSProperties}>
        <div>{element_icon_list}</div>
        <div>{element_icon_list}</div>
      </div>
    );
  });
  //   const tools1 = ["OpenCV", "PyTorch", "Tensorflow", "Keras"].map(
  //     (element) => {
  //       return <span>{element}</span>;
  //     }
  //   );

  //   const tools2 = ["Git", "Slurm", "CUDA", "Linux", "GenAI", "transformers", "RAG", "PowerBI"].map(
  //     (element) => {
  //       return <span>{element}</span>;
  //     }
  //   );

  //   const tools3 = ["pandas", "Scikitlearn", "matplotlib"].map(
  //     (element) => {
  //       return <span>{element}</span>;
  //     }
  //   );

  return (
    <div>
      {/* <div className="scroll" style={{ "--t": "20s" } as React.CSSProperties}>
        <div>{tools1}</div>
        <div>{tools1}</div>
      </div>
      <div className="scroll" style={{ "--t": "20s" } as React.CSSProperties}>
        <div>{tools2}</div>
        <div>{tools2}</div>
      </div>
      <div className="scroll" style={{ "--t": "20s" } as React.CSSProperties}>
        <div>{tools3}</div>
        <div>{tools3}</div>
      </div> */}
      {/* {tools_elements} */}
      {tool_icons_elements}
      {/* <div className="scroll imgbx" style={{ "--t": "25s" }}>
        <div>
          <FaGitAlt />
          <FaGitAlt />
          <FaGitAlt />
          <FaGitAlt />
          <FaGitAlt />
        </div>
        <div>
          <FaGitAlt />
          <FaGitAlt />
          <FaGitAlt />
          <FaGitAlt />
          <FaGitAlt />
        </div>
      </div> */}
    </div>
  );
}

export default InfiniteScroll;
