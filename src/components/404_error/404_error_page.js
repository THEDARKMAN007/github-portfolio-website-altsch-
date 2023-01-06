import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="relative h-[100vh] w-[100vw]">
      <div className="flex flex-col gap-6 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h1>Oops! You seem to be lost.</h1>
        <p>Here are some helpful links:</p>
        <Link to="/" className="underline hover:text-blue-600">
          Home
        </Link>
      </div>
    </div>
  );
}
