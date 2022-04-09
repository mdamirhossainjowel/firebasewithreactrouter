import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Component/Home/Home";
import Login from "./Component/Login/Login";
import Orders from "./Component/Orders/Orders";
import Products from "./Component/Products/Products";
import Registration from "./Component/Registration/Registration";
import Header from "./Component/Header/Header";
import useFirebase from "./Hooks/useFirebase";

function App() {
  const { user } = useFirebase();
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        {user?.uid ? (
          <Route path="/products" element={<Products></Products>}></Route>
        ) : (
          <Route
            path="/products"
            element={<Navigate replace to="/login" />}
          ></Route>
        )}
        {user?.uid ? (
          <Route path="/orders" element={<Orders></Orders>}></Route>
        ) : (
          <Route
            path="/orders"
            element={<Navigate replace to="/login" />}
          ></Route>
        )}

        {!user?.uid ? (
          <Route path="/login" element={<Login></Login>}></Route>
        ) : (
          <Route path="/login" element={<Navigate replace to="/" />} />
        )}
        {!user?.uid ? (
          <Route
            path="/registration"
            element={<Registration></Registration>}
          ></Route>
        ) : (
          <Route
            path="/registration"
            element={<Navigate replace to="/" />}
          ></Route>
        )}
      </Routes>
    </div>
  );
}

export default App;
