import "../assets/font.css";
import "bootstrap/js/src/collapse.js";

function NavBar() {

  const url = window.location.href.split('/')
  let select = url[url.length-1]

  let menu_items = ["About", "Experience", "Publications", "Hire Me"].map(
    (item) => {
      console.log(item, select)
      return (
        <a className={`nav-link ${select.replace("%20", " ") === item ? "active" : ""}`} href={item}>
          {item}
        </a>
      );
    }
  );
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg source-code-pro-font">
      <div className="container-fluid">
        <a className="navbar-brand red" href="/">
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
