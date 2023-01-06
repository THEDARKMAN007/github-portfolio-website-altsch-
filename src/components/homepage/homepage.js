import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import img from "../../assets/illustrator.svg";
import { Header } from "../header";
import { Link } from "react-router-dom";

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
  languages = languages.filter((lang) => lang !== null);
  languages = languages.map((lang) => {
    return (
      <div
        key={lang}
        className={` text-white py-[0.05em] rounded-[2em] bg-black px-[0.5em] sm:text-[max(0.6rem,1.5vw)] `}
      >
        {lang}
      </div>
    );
  });

  return (
    <div className="font-mono relative">
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="github portfolio homepage" />
        <link rel="canonical" href="/" />
      </Helmet>
      <Header />
      <div>
        <main className=" flex flex-col py-[1rem] gap-[0.3rem] items-center justify-center sm:flex-row sm:gap-[max(1rem,2.5vw)] w-[max(375px,100%)] ">
          <div>
            <section className="w-[max(8rem,34.133vw)]  h-[max(8rem,34.133vw)] sm:w-[max(10rem,25vw)]">
              <img
                src={img}
                alt="programmer-illustrator"
                className="h-[100%] w-[100%]"
              />
            </section>
          </div>

          <div className="flex flex-col text-[max(0.8rem,3.4vw)] gap-[1em] sm:gap-[2em] sm:text-[max(0.72rem,1.8vw)]">
            <section className="flex flex-col items-center justify-center text-[max(0.8rem,3.4vw)] w-[20em] mx-auto sm:text-[max(0.72rem,1.8vw)]">
              <h2 className="font-black text-center">About Me</h2>
              <div className="text-center">
                Hi i'm {state2.name}, a front-end developer from Lagos, Nigeria.
              </div>
              <div>
                <Link
                  to="/github_repo"
                  state={{ data: state3 }}
                  className="underline cursor-pointer hover:text-blue-500"
                >
                  click here
                </Link>{" "}
                to see my repositories
              </div>
              <div>
                view my{" "}
                <a
                  href={state2.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline cursor-pointer hover:text-blue-500"
                >
                  Github profile
                </a>
              </div>
            </section>
            <section className="">
              <h2 className="text-center font-black">Technical Skills</h2>
              <div
                className="flex flex-row gap-[1em] items-center
            flex-wrap justify-center text-[max(0.6rem,2.56vw)]sm:text-[max(0.72rem,1.8vw)] w-[20em"
              >
                {languages}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};
