import React from "react";

const Ragistration = () => {
  return (
    <div className="text-2xl w-1/3 mt-10 mx-auto">
      <h1 className="text-3xl">Please Register</h1>
      <br />
      <input type="text" placeholder="Your Name" />
      <br /> <br />
      <input type="email" placeholder="Email Address" />
      <br /> <br />
      <input type="email" placeholder="Password" />
      <br />
      <button className="bg-orange-400 mt-12 p-2">Submit</button>
    </div>
  );
};

export default Ragistration;
