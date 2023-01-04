import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import img from "../../assets/illustrator.svg";
import { Header } from '../header';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [state2, setState2] = useState({});
  const [state3, setState3] = useState([]);

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

  useEffect(() => {
    fetch(state2.repos_url)
      .then((response) => response.json())
      .then((data) => {
        let arr = Object.values(data);
        setState3(arr);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state2]);

  let ans = state3.map((st) => {
    return st.language;
  });

  let languages = new Set(ans);
  languages = Array.from(languages);
  languages = languages.filter(lang=> lang !== null)
  languages = languages.map((lang) => {
    return (
      <div
        key={lang}
        className={` text-white rounded-[2em] p-1 bg-black px-[1em] `}
      >
        {lang}
      </div>
    );
  });

  console.log(state3)

  return (
    <div className="font-mono">
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="github portfolio homepage" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Header />

      <main className=" flex flex-col flex-wrap min-h-[50vh] py-[5rem] gap-[4rem] sm:flex-row sm:gap-20 items-center justify-center ">
        <div>
          <section className="w-[10rem]  h-auto sm:w-[20rem]">
            <img src={img} alt="" className="h-[100%] w-[100%]" />
          </section>
        </div>

        <div className="flex flex-col gap-[2rem] sm:gap-[2rem]">
          <section className=" w-80">
            <h2 className="font-black text-center">About Me</h2>
            <div className="intro">
              Hi, i'm {state2.name}. Front-end daveloper from Lagos, Nigeria.
            </div>
            <div>
              <Link to="/github_repo" state={{ data: state3}}className="underline cursor-pointer hover:text-blue-500"
              >
                click here
              </Link>{" "}
              to see my repo
            </div>
            <div>
              view my{" "}
              <a
                href={state2.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline cursor-pointer hover:text-blue-500"
              >
                Github
              </a>
            </div>
          </section>
          <section className="">
            <h2 className="text-center font-black">SKILLS</h2>
            <div className="flex flex-row gap-2 items-center justify-center">
              {languages}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
