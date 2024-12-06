import { useEffect, useState } from "react";
import Experience from "../pages/experience_page";
import Publications from "../pages/publications_page";
import Contact from "../pages/contact_page.js";
import HomePage from "../pages/home_page.tsx";
import NavBar from "../components/navbar.tsx";

function Parent() {
  const [page, setPage] = useState("About");
  console.log(page);
  function getPage() {
    if (page == "About") {
      console.log(page);
      return <HomePage />;
    } else if (page == "Experience") {
      return <Experience />;
    } else if (page == "Publications") {
        return <Publications />;
    } 
    else if (page == "Hire Me") {
      return <Contact />;
    }
  }
  return (
    <div>
      <NavBar page={page} setPage={setPage}/>
      {getPage()}
    </div>
  );
}

export default Parent;
