import Navbar from "../components/navbar";

export default function Profile(props) {
  return (
    <>
      <Navbar />
      <div class="columns">
        <div class="column is-half is-offset-one-quarter">
          <div class="box p-0">
            <figure class="image banner">
              <img
                src={props.bannerimgsrc}
                alt="Banner image"
              />
            </figure>
            <div class="level">
              <div class="level-left">
                <div class="level-item">
                  <div class="columns">
                    <div class="column is-one-fifth ml-5 mt-5">
                      <figure class="image is-128x128">
                        {props.profileimgsrc}
                      </figure>
                    </div>
                  </div>
                  <div class="level-item">
                    <div class="column is-four-fifths is-flex-grow-1">
                      <div class="is-size-3">{props.username}</div>
                      <span class="content is-small">
                        <p>
                          {props.industry} - {props.location} -{" "}
                          {props.followers} -{props.employees}
                        </p>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="level-right mx-5">
                <div class="level-item">
                  <button class="button is-primary">Follow</button>
                </div>
                <div class="level-item">
                  <button class="button is-light">Learn more</button>
                </div>
              </div>
            </div>
            <div class="tabs">
              <ul>
                <li class="is-active">
                  <a>Home</a>
                </li>
                <li>
                  <a>About</a>
                </li>
                <li>
                  <a>Posts</a>
                </li>
                <li>
                  <a>Jobs</a>
                </li>
                <li>
                  <a>Life</a>
                </li>
                <li>
                  <a>People</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
