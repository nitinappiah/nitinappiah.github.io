import { Fragment } from "react/jsx-runtime";
import Typewriter from "../components/type_out_intro";
import "../assets/flex_center.css"
import "../assets/font.css";
function HomePage() {
  return (
    <Fragment>
      <div className="container source-code-pro-font">
        <Typewriter
          textArray={[
            "Developer.",
            "Data Scientist.",
            "ML Researcher.",
          ]}
          period={2000}
        />
        <p className="justified">
          Nitin Appiah, a computer science engineer with a
          passion for solving complex problems using cutting-edge technologies.
          Currently, I work as a Data Analyst at Hexion Inc, where I lead a team
          of data scientists in developing advanced time-series forecasting
          tools. With a Master's degree in Computer Science from The Ohio State
          University, I specialize in data analysis, machine learning, and
          building scalable systems that drive impactful decision-making.
        </p>
        <p className="justified">
          Throughout my journey, I’ve contributed to diverse fields, including
          healthcare, computer vision, and natural language processing. My work
          ranges from designing federated learning models to enhance medical
          diagnoses, to creating innovative ETL workflows in cloud environments.
          I’m skilled in tools like Python, SQL, and Databricks, and adept at
          leveraging frameworks such as PyTorch and TensorFlow to deliver
          meaningful solutions.
        </p>
        <p className="justified">
          Outside of work, I thrive on innovation and exploration, whether it’s
          winning hackathons or presenting research at prestigious conferences
          like MIT IEEE and COLING. My ultimate goal is to build systems that
          bridge the gap between cutting-edge technology and real-world
          applications. Let's connect and create something extraordinary!
        </p>
        <p className="red" style={{textAlign:"right", fontSize:"20px"}}>- GPT</p>
      </div>
    </Fragment>
  );
}

export default HomePage;
