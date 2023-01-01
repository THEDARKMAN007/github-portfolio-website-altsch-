import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";


export const Header = () => {
  const [state2, setState2] = useState({});
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



  const navigate = useNavigate();

  const navigateToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const navigateToGithub = (e) => {
    e.preventDefault();
    navigate("/github_repo");
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
          <div className="flex justify-between w-4/5 mx-auto flex-row p-3">
            <div className="flex flex-row items-center justify-center gap-3">
              <img
                src={state2.avatar_url}
                alt="user_image"
                className="w-8 h-8 rounded-full"
              />
              <h1 className="font-black">Portfolio</h1>
            </div>
            <nav
              className="flex flex-col gap-1 justify-center hover:cursor-pointer  sm:hidden"
              onClick={showDropDownMenu}
            >
              <div className="w-8 h-1 bg-black "></div>
              <div className="w-8 h-1 bg-black"></div>
              <div className="w-8 h-1 bg-black"></div>
            </nav>
            <nav className="hidden items-center  sm:flex justify-between w-100 flex-row w-[25%]">
              <h1 onClick={navigateToHome} className="hover:cursor-pointer">
                Home
              </h1>
              <h1 onClick={navigateToGithub} className="hover:cursor-pointer">
                Repository
              </h1>
            </nav>
          </div>
        </header>
        <nav
          className={`flex flex-col border ${hide} border-1 w-[20%] absolute h-[40vh] items-center justify-around `}
        >
          <h1 onClick={navigateToHome} className="hover:cursor-pointer">
            Home
          </h1>
          <h1 onClick={navigateToGithub} className="hover:cursor-pointer">
            Repository
          </h1>
        </nav>
        <hr />
      </div>
    );
}