import "../assets/font.css";
import "bootstrap/js/src/collapse.js";

interface prop_data {
  page:string;
  setPage:Function;
}

function NavBar(prop:prop_data) {

  // const url = window.location.href.split('/')
  let select = prop.page
  const changePage = (page:string) => {
    console.log(page)
    prop.setPage(page)
  }

  let menu_items = ["About", "Experience", "Publications", "Hire Me"].map(
    (item) => {
      console.log(item, select)
      return (
        <div className={`cursor nav-link ${select.replace("%20", " ") === item ? "active" : ""}`} onClick={()=>changePage(item)}>
          {item}
        </div>
      );
    }
  );
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg source-code-pro-font">
      <div className="container-fluid">
        <a className="navbar-brand red" href="/" style={{color:"#ea1414"}}>
          <b>அப்யா</b>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {menu_items}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
