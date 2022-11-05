import "./homepage.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

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
      <header>
        <div className="link" onClick={navigateToHome}>
          Home
        </div>
        <div className="link" onClick={navigateToGithub}>
          GitHub Repo.
        </div>
      </header>
      <main className="main">
        <img src={state2.avatar_url} alt="user_image" />
        <div className="intro">Hi, am {state2.name}</div>
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
