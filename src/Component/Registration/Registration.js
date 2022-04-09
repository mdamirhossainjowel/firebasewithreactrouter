import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Ragistration = () => {
  const { handleEmail, handlePassword, createWithEmailandPass } = useFirebase();
  return (
    <div className="text-2xl w-1/3 mt-10 mx-auto">
      <h1 className="text-3xl">Please Register</h1>
      <br />
      <input type="text" placeholder="Your Name" />
      <br /> <br />
      <input onBlur={handleEmail} type="email" placeholder="Email Address" />
      <br /> <br />
      <input onBlur={handlePassword} type="password" placeholder="Password" />
      <br />
      <button
        onClick={createWithEmailandPass}
        className="bg-orange-400 mt-12 p-2 mr-3"
      >
        Submit
      </button>
    </div>
  );
};

export default Ragistration;
