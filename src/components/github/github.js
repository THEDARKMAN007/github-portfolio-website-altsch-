import { Header } from "./../header";
import { useLocation } from "react-router-dom";

export const Github = (props) => {
  const location = useLocation();

  let repo = location.state;
  console.log(repo);

  return (
    <div>
      <Header />
      <main className="mx-auto border text-[max(0.6rem,1.5vw)] rounded-[1em] flex flex-col items-center justify-center w-[25em] my-[5em] p-[1em] gap-[1em] shadow-[0_5px_5px_0px_grey] ">
        <div>REPO_NAME: {repo.data.name}</div>
        <div>OWNER: {repo.data.owner.login}</div>
        <div>DESC.: {repo.data.description}</div>
        <div>FILE_SIZE: {repo.data.size}</div>
        <div>LANGUAGE: {repo.data.language}</div>
        <div>CREATED: {repo.data.created_at}</div>
        <div>
          view this repo on{" "}
          <a
            href={repo.data.html_url}
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
