import "./github_repo.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate,useLocation } from "react-router-dom";
import { Github } from './../github/github';
import { Helmet } from "react-helmet-async";


export const GithubRepo = () => {
  const [state4, setState4] = useState([
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
    { name: "" },
  ]);
  const [state5, setState5] = useState(0);
  const [state6, setState6] = useState(0);
  const [state3, setState3] = useState("");
  const [state7, setState7] = useState("");
  const [visible, setVisible] = useState(true);
  const navigate = useNavigate();
  const location = useLocation()

  const navigateToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const navigateToGithub = (e) => {
    e.preventDefault();
    navigate("/github_repo");
  };


  useEffect(() => {
    fetch(`https://api.github.com/users/THEDARKMAN007`)
      .then((response) => response.json())
      .then((data) => {
        setState3(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const url = state3.repos_url;
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        const data = res.data;
        setState4(data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [url]);

  useEffect(() => {
    if (location.pathname === '/github_repo') {
    setVisible(true);
    }
  }, [location.pathname]);

  const seeRepoInfo = (e) => {
    e.preventDefault();
    navigate("github");
    setVisible(false)
    let sum = -1
  
    do {
        sum = sum + 1;
      if (e.target.innerHTML === state4[state5 + sum].name) {
        setState7(state4[state5 + sum]);
      } 
    } while (!(e.target.innerHTML === state4[state5 + sum].name));
  };

  const repo1 = state4[state5].name;
  const repo2 = state4[state5 + 1].name;

  const prev = (e) => {
    e.preventDefault();
    setState6((st) => {
      if (state6 === 0) {
        return 0;
      } else {
        return st - 1;
      }
    });
  };
  const next = (e) => {
    e.preventDefault();
    setState6((st) => {
      if (state6 >= Math.floor(state4.length / 2 - 4)) {
        return Math.floor(state4.length / 2 - 4);
      } else {
        return st + 1;
      }
    });
  };
  const one = (e) => {
    e.preventDefault();
    let st = Number(e.target.innerHTML) * 2 - 2;
    setState5(st);
  };
  const two = (e) => {
    e.preventDefault();
    let st = Number(e.target.innerHTML) * 2 - 2;
    setState5(st);
  };
  const three = (e) => {
    e.preventDefault();
    let st = Number(e.target.innerHTML) * 2 - 2;
    setState5(st);
  };
  const four = (e) => {
    e.preventDefault();
    let st = Number(e.target.innerHTML) * 2 - 2;
    setState5(st);
  };

  return (
    <div>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="github repository list" />
        <link rel="canonical" href="/github_repo" />
      </Helmet>
      <div className="header">
        <div className="link" onClick={navigateToHome}>
          Home
        </div>
        <div className="link" onClick={navigateToGithub}>
          GitHub Repo.
        </div>
      </div>
      <div className={visible ? "post" : "invisible"}>
        <main>
          <div className="github_repo_container" onClick={seeRepoInfo}>
            {repo1}
          </div>
          <div className="github_repo_container" onClick={seeRepoInfo}>
            {repo2}
          </div>
        </main>
        <div className="pagination_buttons">
          <div onClick={prev}>prev</div>
          <div onClick={one}>{1 + state6}</div>
          <div onClick={two}>{2 + state6}</div>
          <div onClick={three}>{3 + state6}</div>
          <div onClick={four}>{4 + state6}</div>
          <div onClick={next}>next</div>
        </div>
      </div>
      <Github visible={visible} state7={state7} />
    </div>
  );
};
