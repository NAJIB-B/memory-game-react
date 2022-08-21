import { Routes, Route } from "react-router-dom";

import Home from "./components/home/home.component";
import Shop from "./components/shop";
import SignUp from "./components/sign-up/sign-up.component";
import FreePlay from "./components/free-play/free-play.component";
import Login from "./components/login/login.component";
import Levels from "./components/levels/levels.component";
import {
  onAuthStateChangedListener,
  createUserDocument,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import PrivateRoute from "./private-routes/privateRoute";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocument(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubcribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="login/" element={<Login></Login>}></Route>
      <Route path="signUp/" element={<SignUp></SignUp>}></Route>
      <Route path="freePlay/" element={<FreePlay></FreePlay>}></Route>

      <Route
        path="levels/*"
        element={
          <PrivateRoute>
            <Levels></Levels>
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
}
export default App;
