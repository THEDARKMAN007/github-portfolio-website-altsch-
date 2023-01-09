import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export const GithubRepo = () => {
  const [hide, setHide] = useState("hidden");
  const [buttons, setButtons] = useState([]);
  const [state, setState] = useState(0);
  // const [toggle, setToggle] = useState('')
  // const [value, setValue] = useState('block');
  const location = useLocation();
  const navigate = useNavigate();

  //// Main  control for pagination settings of the page
  let repoPerPage = 3;
  let MostNoOfPagButtons = 3;

  let repoList = location.state.data.data;
  ////api data collection, repo display
  let displayedRepo = repoList.map((repo) => {
    return (
      <Link
        to="/github_repo/github"
        state={{
          data: { data: repo, state2: location.state.data.state2.avatar_url },
        }}
        className="w-[100%]"
      >
        <div key={repo.id}>{repo.name}</div>
      </Link>
    );
  });

  let number = [];
  for (let i = repoPerPage - 1; i >= 0; i--) {
    number.push(i);
  }
  number = number.reverse();
  let reposOnPage = number.map((number) => {
    // if (typeof(displayedRepo[number + state] === null){
    //   setValue('hidden')
    // }else {
    //   setValue('block')
    // }

    return (
      <div
        key={number + state}
        className={`flex items-center justify-center border w-[18em] hover:bg-black hover:text-white  font-bold text-center mx-auto p-[0.5em] hover:cursor-pointer flex-wrap text-[max(1rem,1.8vw)] sm:text-[max(1rem,2vw)]`}
      >
        {displayedRepo[number + state]}
      </div>
    );
  });

  // button onclick event handlers
  const buttonHandler = (e) => {
    e.preventDefault();
    // console.log(e.target.innerHTML);
    let newState = e.target.innerHTML * repoPerPage - repoPerPage;
    setState(newState);
  };

  // // to highlight what paggg number the page is on
  // const colorChanger = (e) => {
  //   e.preventDefault();
  //   e.target.classList.add("bg-black");
  //   e.target.classList.add("text-white");
  //   setToggle(() => {
  //     let st = "bg-white text-black";
  //     return st;
  //   });
  // }

  ////pagination buttons
  const buttonList = buttons.map((element) => (
    <button
      key={element}
      className={`flex items-center justify-center border w-[6em] hover:cursor-pointer ${""} text-[max(0.6rem,1.5vw)] hover:bg-black hover:text-white hover:border-0 sm:text-[max(1rem,2vw)] `}
      onClick={buttonHandler}
    >
      {element}
    </button>
  ));

  ////prev/next event handlers
  const prev_next = (e) => {
    e.preventDefault();
    if (
      e.target.innerHTML === "next" &&
      buttons[buttons.length - 1] < maxButtonLength(repoPerPage)
    ) {
      setButtons((st) => st.map((st) => st + 1));
      // let newState = (buttonList[0].key ) * repoPerPage - repoPerPage;
      // setState(newState);
    } else if (e.target.innerHTML === "prev" && buttons[0] !== 1) {
      setButtons((st) => st.map((st) => st - 1));
    }
  };

  ////pagination engine
  const maxButtonLength = (repoPerPage) => {
    let a = Math.ceil(repoList.length / repoPerPage);
    return a;
  };
  useEffect(() => {
    let displayedButtonNo = Math.ceil(repoList.length / repoPerPage);
    let arr = [];

    if (displayedButtonNo >= MostNoOfPagButtons) {
      for (let i = MostNoOfPagButtons - 1; i >= 0; i--) {
        arr.push(i + 1);
      }
      arr = arr.reverse();
      setButtons(arr);
    } else {
      for (let i = displayedButtonNo - 1; i >= 0; i--) {
        arr.push(i + 1);
      }
      arr = arr.reverse();
      setButtons(arr);
    }
  }, [repoList, repoPerPage, MostNoOfPagButtons]);

  const goToHomepage = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const goLoginPage = (e) => {
    e.preventDefault();
    navigate(-2);
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
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="github repository list" />
        <link rel="canonical" href="/github_repo" />
      </Helmet>
      <header>
        <div className="flex justify-between text-[max(1rem,2.13vw)] w-4/5 mx-auto flex-row h-[3em] ">
          <div className="flex flex-row items-center justify-center gap-[max(0.75rem,3.2vw)]">
            <img
              src={location.state.data.state2.avatar_url}
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
      </nav>
      <hr />
      <main className="w-[max(375px,100%)] min-h-[85vh] relative">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="flex flex-col gap-[0.5em]">{reposOnPage}</div>
          <div className=" flex flex-row  mx-auto  items-center justify-center mt-[3em]">
            <button
              className="border w-[6em] hover:cursor-pointer text-[max(0.6rem,1.5vw)] hover:bg-black hover:text-white hover:border-0 sm:text-[max(1rem,2vw)]"
              onClick={prev_next}
            >
              prev
            </button>
            {buttonList}
            <button
              className="border w-[6em] hover:cursor-pointer text-[max(0.6rem,1.5vw)] hover:bg-black hover:text-white hover:border-0 sm:text-[max(1rem,2vw)]"
              onClick={prev_next}
            >
              next
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
