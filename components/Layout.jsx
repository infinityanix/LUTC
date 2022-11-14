import Head from "next/head";
import Link from "next/link";

export const Layout = (props) => {
  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <nav className="navbar sticky-top navbar-expand-sm navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" href="/">
            <img height="55px" src="/images/logo.png" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="navbar-nav top-nav">
              <Link className="nav-link" aria-current="page" href="/">
                Home
              </Link>
              <Link className="nav-link" aria-current="page" href="/event">
                Event
              </Link>
              <Link className="nav-link" aria-current="page" href="/vision">
                Vision
              </Link>
              <Link className="nav-link" aria-current="page" href="/gallary">
                Gallary
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="main-content">{props.children}</main>
      <footer>
        <div className="container-fluid">
          <div className="row d-flex justify-content-center">
            <div className="col-sm-3">
              <div>
                <img width="80%" src="/images/logo.png" alt="logo" />
              </div>
            </div>
            <div className="col-sm-3">
              <h3 className="text-center">Find Us</h3>
              <p className="text-center">
                <a href="http://facebook.com/">
                  <i className="bi bi-facebook"></i> Facebook
                </a>
              </p>
              <p className="text-center">
                <a href="http://instagram.com">
                  <i className="bi bi-instagram"></i> Instagram
                </a>
              </p>
              <p className="text-center">
                <a href="http://linkedin.com/">
                  <i className="bi bi-linkedin"></i> Linkedin
                </a>
              </p>
              <p className="text-center">
                <a href="http://twitter.com">
                  <i className="bi bi-twitter"></i> Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <small className="text-center">
            &copy; LUTC - {new Date().getFullYear()}
          </small>
        </div>
      </footer>
    </>
  );
};
