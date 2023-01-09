import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const [state1, setState1] = useState({ username: "" });
  const navigate = useNavigate();

  useEffect(() => {
    console.log(state1);
    if (state1.username !== "") {
      setTimeout(() => {
        navigate("/homepage", {
          state: {
            formData: state1,
          },
        });
      }, 4000);
    }
  }, [state1, navigate]);

  const submitHandler = (e) => {
    e.preventDefault();
    const { username, name, profession, state, country } = e.target.elements;

    setState1({
      username: username.value,
      name: name.value,
      profession: profession.value.toLowerCase(),
      state: state.value.toLowerCase(),
      country: country.value.toLowerCase(),
    });
  };

  return (
    <div className="flex items-center justify-center h-[100vh] w-[100vw]">
      <form
        onSubmit={submitHandler}
        className="border items-center justify-center flex flex-col text-[max(0.8rem,2.42vw)] w-[15em] rounded-[0.5em] gap-[0.8em] py-[1em] sm:w-[20em] sm:py-[0.5em] sm:text-[max(1rem,1.8vw)] "
      >
        <div className="flex flex-col items-center justify-center sm:flex-row sm:w-[100%] sm:justify-around gap-[0.2em]">
          <label htmlFor="username">Github Username:</label>
          <input
            type="text"
            className="border-[2px] border-t-0 border-x-0 rounded-xl placeholder:text-center text-center outline-none"
            id="username"
            name="githubUserName"
            placeholder="e.g THEDARKMAN007"
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:gap-[0.05em] sm:w-[100%] sm:justify-around gap-[0.2em]">
          <label htmlFor="name">name:</label>
          <input
            type="text"
            className="border-[2px] border-t-0 border-x-0 rounded-xl placeholder:text-center text-center outline-none"
            id="name"
            name="name"
            placeholder="e.g Abdulsamad"
          />
        </div>
        <div className="flex items-center justify-center flex-col sm:flex-row sm:w-[100%] sm:justify-around gap-[0.2em]">
          <label htmlFor="profession">profession:</label>
          <input
            type="text"
            id="profession"
            name="profession"
            className="border-[2px] border-t-0 border-x-0 rounded-xl placeholder:text-center text-center outline-none"
            placeholder="e.g Frontend developer"
          />
        </div>
        <div className="flex items-center justify-center flex-col sm:flex-row sm:w-[100%] sm:justify-around gap-[0.2em]">
          <label htmlFor="state">city/state:</label>
          <input
            type="text"
            id="state"
            name="state"
            className="border-[2px] border-t-0 border-x-0 rounded-xl placeholder:text-center text-center outline-none"
            placeholder="e.g Lagos"
          />
        </div>
        <div className="flex flex-col items-center justify-center sm:flex-row sm:w-[100%] sm:justify-around gap-[0.2em]">
          <label htmlFor="country">country:</label>
          <input
            type="text"
            id="country"
            name="country"
            className="border-[2px] border-t-0 border-x-0 rounded-xl placeholder:text-center text-center outline-none"
            placeholder="e.g Nigeria"
          />
        </div>
        <input
          type="submit"
          value="submit"
          className="border flex items-center justify-center flex-col sm:flex-row rounded-3xl w-[5em] p-[0.1em] hover:cursor-pointer hover:bg-black hover:text-white "
        />
      </form>
    </div>
  );
};
