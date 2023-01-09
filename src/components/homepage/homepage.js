import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import img from "../../assets/illustrator.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";

export const HomePage = () => {
  const [hide, setHide] = useState("hidden");
  const [state2, setState2] = useState({});
  const [state3, setState3] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { formData } = location.state;
  console.log(formData.username);
  useEffect(() => {
    fetch(`https://api.github.com/users/${formData.username}`)
      .then((response) => response.json())
      .then((data) => {
        setState2(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [formData]);

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
  const showDropDownMenu = (e) => {
    e.preventDefault();
    if (hide === "hidden") {
      setHide("block");
    } else {
      setHide("hidden");
    }
  };
  const goToLogin = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="font-mono relative">
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="github portfolio homepage" />
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <div className="w-[max(375px,100%)]">
          <header>
            <div className="flex justify-between text-[max(1rem,2.13vw)] w-4/5 mx-auto flex-row h-[3em] ">
              <div className="flex flex-row items-center justify-center gap-[max(0.75rem,3.2vw)]">
                <img
                  src={state2.avatar_url}
                  alt="user_image"
                  className="w-[max(1.8rem,3vw)] h-[max(1.8rem,3vw)] rounded-full"
                />
                <h1 className="font-black text-[max(1rem,2.13vw)]">
                  Portfolio
                </h1>
              </div>

              {/*mobile */}
              <nav
                className="flex flex-col gap-1 justify-center hover:cursor-pointer  sm:hidden"
                onClick={showDropDownMenu}
              >
                <div className="w-8 h-1 bg-black "></div>
                <div className="w-8 h-1 bg-black"></div>
                <div className="w-8 h-1 bg-black"></div>
              </nav>

              {/*desktop*/}
              <nav className="hidden items-center text-[max(1rem,2.13vw)] sm:flex justify-between flex-row w-[12em]">
                <div onClick={goToLogin} className="hover:cursor-pointer">
                  LogIn
                </div>
                <Link
                  to="/github_repo"
                  state={{ data: { data: state3, state2: state2 } }}
                  className="hover:cursor-pointer"
                >
                  Repository
                </Link>
              </nav>
            </div>
          </header>

          {/*modal*/}
          <nav
            className={`flex flex-col border ${hide} border-1 w-[max(10em,40%)] absolute items-center justify-around left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white text-[max(1.5rem,6.4vw)] gap-[1em] font-bold py-[1em] sm:hidden z-10`}
          >
            <div onClick={goToLogin} className="hover:cursor-pointer">
              LogIn
            </div>
            <Link
              to="/github_repo"
              state={{ data: { data: state3, state2: state2 } }}
              className="hover:cursor-pointer"
            >
              Repository
            </Link>
          </nav>
          <hr />
        </div>
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
                Hi i'm {formData.name}, a {formData.profession} from{" "}
                {formData.state}, {formData.country}.
              </div>
              <div>
                <Link
                  to="/github_repo"
                  state={{ data: { data: state3, state2: state2 } }}
                  className="underline cursor-pointer hover:text-blue-500"
                >
                  Click here
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
