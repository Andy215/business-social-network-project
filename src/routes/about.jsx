import Navbar from "../components/navbar";

export default function About() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="content">
          <h1 className="title">About</h1>
          <p>
            This is a project for a business social network. The project is
            built using React, React Router, and Bulma.
          </p>
        </div>
      </div>
    </>
  );
}
