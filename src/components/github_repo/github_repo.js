import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "./../header";

export const GithubRepo = () => {
  const [buttons, setButtons] = useState([]);
  const [state, setState] = useState(0);
  const [toggle, setToggle] = useState('')
  // const [value, setValue] = useState('block');
  const location = useLocation();

  //// Main  control for pagination settings of the page
  let repoPerPage = 4;
  let MostNoOfPagButtons = 3;

  ////api data collection, repo display
  const repoList = location.state.data;
  let displayedRepo = repoList.map((repo) => {
    return (
      <Link to="/github_repo/github" state={{ data: repo }}
      >
        <div key={repo.id}>{repo.name}</div>
      </Link>
    );
  });
  console.log(displayedRepo);

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
        className={`items-center justify-center border w-[max(10rem,50vw)] hover:bg-black hover:text-white  font-bold text-center mx-auto p-5 hover:cursor-pointer`}
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

  // const colorChanger = (e) => {
  //   e.preventDefault();
  //   setToggle("bg-white text-black")
  //   e.target.classList.add("bg-black");
  //   e.target.classList.add("text-white");

  // }

  ////pagination buttons
  const buttonList = buttons.map((element) => (
    <button
      key={element}
      className={`flex items-center justify-center border w-[max(4rem,10vw)] hover:cursor-pointer ${toggle}`}
      onClick={(buttonHandler)}
    >
      {element}
    </button>
  ));
// console.log(buttonList[0].key);

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

  return (
    <div>
      <Helmet>
        <title>Homepage</title>
        <meta name="description" content="github repository list" />
        <link rel="canonical" href="/github_repo" />
      </Helmet>
      <Header />
      <main>
        {reposOnPage}
        <div className=" flex flex-row  mx-auto  items-center justify-center">
          <button
            className="border w-[max(4rem,10vw)] hover:cursor-pointer"
            onClick={prev_next}
          >
            prev
          </button>
          {buttonList}
          <button
            className="border w-[max(4rem,10vw)] hover:cursor-pointer"
            onClick={prev_next}
          >
            next
          </button>
        </div>
      </main>
    </div>
  );
};
