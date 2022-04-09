import React from "react";
import useFirebase from "../../Hooks/useFirebase";

const Login = () => {
  const { signWithGoogle } = useFirebase();
  return (
    <div className="text-2xl w-1/3 mt-10 mx-auto">
      <h1 className="text-3xl">Please Login</h1>
      <br />
      <input type="email" placeholder="Email Address" />
      <br /> <br />
      <input type="email" placeholder="Password" />
      <br />
      <button className="bg-orange-400 mt-12 p-2 mr-3">Submit</button>
      <button onClick={signWithGoogle} className="bg-orange-400 mt-12 p-2">
        Google
      </button>
    </div>
  );
};

export default Login;
