import React from "react";
import { Link } from "react-router-dom";
import useFirebase from "../../Hooks/useFirebase";

const Header = () => {
  const { user, SignOut } = useFirebase();
  return (
    <div className="text-xl mt-2 text-center flex justify-center items-center">
      <Link className="mr-3" to="/">
        Home
      </Link>
      <Link className="mr-3" to="/products">
        Products
      </Link>
      <Link className="mr-3" to="/orders">
        Orders
      </Link>
      {user?.uid ? user.displayName : ""}
      {!user?.uid ? (
        <Link className="mr-3" to="/login">
          Login
        </Link>
      ) : (
        <img className="ml-3 rounded-full w-12" src={user.photoURL} alt="" />
      )}
      {!user?.uid ? (
        <Link className="mr-3" to="/registration">
          Registration
        </Link>
      ) : (
        <button onClick={() => SignOut()} className="ml-3">
          Signout
        </button>
      )}
    </div>
  );
};

export default Header;
