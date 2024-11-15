import React from "react";

type Props = {};

const CallToAction = (props: Props) => {
  return (
    <div className="py-12 text-light-grey">
      <h1 className="text-3xl font-bold text-center mb-4">
        Signup to our free Newsletter
      </h1>
      <div className="border-t-2 border-light-grey mx-auto w-20 mb-8"></div>

      <form className="flex flex-col items-center md:flex-row justify-center">
        {" "}
        <input
          type="email"
          placeholder="Enter your email"
          className="text-dark-grey px-4 py-2 mb-4 md:mb-0 md:mr-4 rounded"
        />{" "}
        <button
          type="submit"
          className="bg-dark-grey text-white px-4 py-2 rounded text-lg"
        >
          {" "}
          Subscribe{" "}
        </button>{" "}
      </form>
    </div>
  );
};

export default CallToAction;
