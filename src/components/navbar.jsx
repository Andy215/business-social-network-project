export default function Navbar() {
  return (
    <>
      <div className="container">
        <section class="section">
          <nav class="navbar" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <div class="content is-small">
                  <h1>Business Social Network Project</h1>
                </div>
              </a>

              <a
                role="button"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarHomePage"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarHomePage" class="navbar-menu">
              <div class="navbar-start">
                <a class="navbar-item" href="/">
                  {" "}
                  Home{" "}
                </a>

                <a class="navbar-item" href="/profiles">
                  {" "}
                  Profiles{" "}
                </a>

                <div class="navbar-item has-dropdown is-hoverable">
                  <a class="navbar-link"> More </a>

                  <div class="navbar-dropdown">
                    <a class="navbar-item" href="/about">
                      {" "}
                      About{" "}
                    </a>
                    <a class="navbar-item"> Jobs </a>
                    <a class="navbar-item"> Contact </a>
                    <hr class="navbar-divider" />
                    <a class="navbar-item"> Report an issue </a>
                  </div>
                </div>
              </div>

              <div class="navbar-end">
                <div class="navbar-item">
                  <div class="buttons">
                    <a class="button is-primary">Sign up</a>
                    <a class="button is-light">Log in</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </section>
      </div>
    </>
  );
}
