import "./github.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

export const Github = (props) => {
  const navigate = useNavigate();
  const [state8, setState8] = useState({
    name: "",
    description: "",
    size: "",
    language: "",
    created_at: "",
    owner: "",
    html_url: "",
  });

  useEffect(() => {
    setState8(props.state7);
  }, [props.state7]);

  const navigateToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const navigateToGithub = (e) => {
    e.preventDefault();
    navigate("/github_repo");
  };

  return (
    <div className={props.visible ? "invisible" : ""}>
      <header>
        <div>
          <div className="link" onClick={navigateToHome}>
            Home
          </div>
        </div>
        <div>
          <div className="link" onClick={navigateToGithub}>
            GitHub Repo.
          </div>
        </div>
      </header>
      <main className="repo_container">
        <div>REPO_NAME: {state8.name}</div>
        <div>DESC.: {state8.description}</div>
        <div>FILE_SIZE: {state8.size}</div>
        <div>LANGUAGE: {state8.language}</div>
        <div>CREATED:{state8.created_at}</div>
        <div>
          view this repo on{" "}
          <a href={state8.html_url} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
      </main>
    </div>
  );
};
