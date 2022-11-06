import "./homepage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

export const HomePage = () => {
  const [state2, setState2] = useState({});
  const navigate = useNavigate();

  const navigateToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const navigateToGithub = (e) => {
    e.preventDefault();
    navigate("/github_repo");
  };
  const goToRepo = (e) => {
    e.preventDefault();
    navigate("/github_repo");
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/THEDARKMAN007`)
      .then((response) => response.json())
      .then((data) => {
        setState2(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="github portfolio homepage" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div className="header">
        <div className="link" onClick={navigateToHome}>
          Home
        </div>
        <div className="link" onClick={navigateToGithub}>
          GitHub Repo.
        </div>
      </div>
      <main className="main">
        <img src={state2.avatar_url} alt="user_image" />
        <h1 className="intro">Hi, am {state2.name}</h1>
        <div className="redirect">
          <span onClick={goToRepo}>click here</span> to see my repo.
        </div>
        <div className="redirect">
          <a href={state2.html_url} target="_blank" rel="noopener noreferrer">
            click here
          </a>{" "}
          to view my profile on Github
        </div>
      </main>
    </div>
  );
};
