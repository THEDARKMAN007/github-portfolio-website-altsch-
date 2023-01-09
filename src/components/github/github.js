import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export const Github = () => {
  const [hide, setHide] = useState("hidden");
  const location = useLocation();
  const navigate = useNavigate();

  let repo = location.state.data.data;
  console.log(repo);
  const goToHomepage = (e) => {
    e.preventDefault();
    navigate(-2);
  };
  const goToRepo = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const goLoginPage = (e) => {
    e.preventDefault();
    navigate(-3);
  };

  const showDropDownMenu = (e) => {
    e.preventDefault();
    if (hide === "hidden") {
      setHide("block");
    } else {
      setHide("hidden");
    }
  };

  return (
    <div>
      <header>
        <div className="flex justify-between text-[max(1rem,2.13vw)] w-4/5 mx-auto flex-row h-[3em] ">
          <div className="flex flex-row items-center justify-center gap-[max(0.75rem,3.2vw)]">
            <img
              src={location.state.data.state2}
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
          <nav className="hidden items-center text-[max(1rem,2.13vw)] sm:flex justify-between flex-row w-[12em]">
            <div onClick={goLoginPage} className="hover:cursor-pointer">
              LogIn
            </div>
            <div onClick={goToHomepage} className="hover:cursor-pointer">
              Homepage
            </div>
            <div onClick={goToRepo} className="hover:cursor-pointer">
              Repository
            </div>
          </nav>
        </div>
      </header>
      {/*modal*/}
      <nav
        className={`flex flex-col border ${hide} border-1 w-[max(10em,40%)] absolute items-center justify-around left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white text-[max(1.5rem,6.4vw)] gap-[1em] font-bold py-[1em] sm:hidden z-10`}
      >
        <div onClick={goLoginPage} className="hover:cursor-pointer">
          LogIn
        </div>
        <div onClick={goToHomepage} className="hover:cursor-pointer">
          Homepage
        </div>
        <div onClick={goToRepo} className="hover:cursor-pointer">
          Repository
        </div>
      </nav>
      <hr />
      <main className="mx-auto border text-[max(0.6rem,1.5vw)] rounded-[1em] flex flex-col items-center justify-center w-[25em] my-[5em] p-[1em] gap-[1em] shadow-[0_5px_5px_0px_grey] ">
        <div>REPO_NAME: {repo.name}</div>
        <div>OWNER: {repo.owner.login}</div>
        <div>DESC.: {repo.description}</div>
        <div>FILE_SIZE: {repo.size}</div>
        <div>LANGUAGE: {repo.language}</div>
        <div>CREATED: {repo.created_at}</div>
        <div>
          view this repo on{" "}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="underline cursor-pointer hover:text-blue-500"
          >
            github
          </a>
        </div>
      </main>
    </div>
  );
};
