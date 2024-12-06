import { Fragment } from "react/jsx-runtime";
import "../assets/font.css";
import "../assets/scroll.css";
import "../assets/flex_center.css";
import publication_json from "../assets/json/publications.json";

function Publications() {
  const publications = publication_json;
  console.log(publications["publications"]);

  const publication_elements = publications["publications"].map((data) => {
    return (
      <li className="source-code-pro-font container-margin">
        <div>
        {data["authors"]}. {data["title"]};  {data["print"]}. 
          <a href={data["link"]}>
            <div className="inline red">[paper]</div>
          </a>
        </div>
      </li>
    );
  });

  return (
    <Fragment>
      <ol className="publication-margin card">{publication_elements}</ol>
    </Fragment>
  );
}

export default Publications;
