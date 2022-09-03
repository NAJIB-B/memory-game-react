import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  selectCurrentUser,
  selectLoading,
} from "../../store/user/user.selector";
import { setLoading } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
import Spinner from "../spinner/spinner.component";
import {
  Area,
  Circles,
  CirclesLi,
  HomeH1,
  GameBtn,
  GameBtnDiv,
  LoginBtnLink,
  SignUpBtnLink,
  SignUpBtn,
  LogOutBtn,
  TopBtnDiv,
} from "./home.style";
import { signOutUser } from "../../utils/firebase/firebase.utils";
const Home = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isLoading = useSelector(selectLoading);
  useEffect(() => {
    if (!currentUser) return;
    dispatch(setLoading(false));
  }, []);
  const logOut = async () => {
    signOutUser();
  };
  const login = () => {
    navigate("login");
  };
  const signUp = () => {
    navigate("signUp");
  };
  const freePlay = () => {
    navigate("freePlay");
  };
  const levels = () => {
    navigate("levels");
  };
  return (
    <div>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <Area>
          <TopBtnDiv>
            {currentUser ? (
              <LogOutBtn onClick={logOut}>logout</LogOutBtn>
            ) : (
              <div>
                <LogOutBtn onClick={login}>Log in</LogOutBtn>

                <SignUpBtn onClick={signUp}>Sign Up</SignUpBtn>
              </div>
            )}
          </TopBtnDiv>
          <HomeH1>memory game</HomeH1>
          <GameBtnDiv onClick={freePlay}>Free Mode</GameBtnDiv>
          <GameBtnDiv onClick={levels}>Levels</GameBtnDiv>

          <Circles>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
          </Circles>
        </Area>
      )}
    </div>
  );
};

export default Home;
