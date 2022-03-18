import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import UserPrivateRoute from "./routes/UserPrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "./utils/AuthToken";
import { loadUserData } from "./redux/action/user";
import "./app.scss";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (localStorage.authToken) {
      console.log("if authtoken app");
      setAuthToken(localStorage.authToken);
      dispatch(loadUserData());
    }
  }, []);
  return (
    <Router>
      <Fragment>
        <Routes>
          <Route path="/" element={user ? <Home /> : <Login />} />
          <Route element={<UserPrivateRoute />}>
            <Route path="/profile" element={<Dashboard />} />
          </Route>
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
