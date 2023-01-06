import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [state2, setState2] = useState({});
  const [state3, setState3] = useState([]);
  const [hide, setHide] = useState("hidden");

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

  const showDropDownMenu = (e) => {
    e.preventDefault();
    if (hide === "hidden") {
      setHide("block");
    } else {
      setHide("hidden");
    }
  };
  return (
    <div className="w-[max(375px,100%)]">
      <header>
        <div className="flex justify-between text-[max(1rem,2.13vw)] w-4/5 mx-auto flex-row h-[3em] ">
          <div className="flex flex-row items-center justify-center gap-[max(0.75rem,3.2vw)]">
            <img
              src={state2.avatar_url}
              alt="user_image"
              className="w-[max(1.8rem,3vw)] h-[max(1.8rem,3vw)] rounded-full"
            />
            <h1 className="font-black text-[max(1rem,2.13vw)]">Portfolio</h1>
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
          <nav className="hidden items-center text-[max(1rem,2.13vw)] sm:flex justify-between flex-row w-[25%]">
            <Link to="/" className="hover:cursor-pointer">
              Home
            </Link>
            <Link
              to="/github_repo"
              state={{ data: state3 }}
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
        <Link to="/" className="hover:cursor-pointer">
          Home
        </Link>
        <Link
          to="/github_repo"
          state={{ data: state3 }}
          className="hover:cursor-pointer"
        >
          Repository
        </Link>
      </nav>
      <hr />
    </div>
  );
};
