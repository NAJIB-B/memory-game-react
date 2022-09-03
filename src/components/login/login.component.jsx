import { async } from "@firebase/util";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import { getRedirectResult } from "firebase/auth";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import { setLoading } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { levels } from "../../utils/game/levels-data";
import {
  Circles,
  CirclesLi,
  Area,
  SignUpBtn,
  LogOutBtn,
} from "../home/home.style";
import {
  LoginDiv,
  FormFieldLabels,
  FormInputs,
  GoogleIcon,
  SignInwithgoogleTextDiv,
  Or,
  DontHaveAccout,
} from "./login.style";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
  auth,
  signInWithGoogleRedirect,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    const redirect = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocument(response.user, levels);
        dispatch(setLoading(true));
        navigate("/");
      }
    };
    redirect();
  }, []);
  const signUp = () => {
    navigate("/signUp", { replace: true });
  };
  // useEffect(() => {
  //   if (auth) navigate("/");
  // }, []);
  const defaultFormFields = {
    email: "",
    password: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const resetFields = () => setFormFields(defaultFormFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const loginUser = async () => {
    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFields();
      dispatch(setLoading(true));
      navigate("/");
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;

        default:
          console.error(`shit${error} tttt`);
      }
      // if (error.code === "auth/wrong-password") {
      //   alert("incorrect password");
    }
  };
  const signInWithGoogle = async () => {
    const response = await signInWithGooglePopup();
    if (response) {
      const userDocRef = await createUserDocument(response.user, levels);
      dispatch(setLoading(true));
      navigate("/");
    }
  };
  return (
    <Area>
      {" "}
      <LoginDiv>
        <FormFieldLabels>Email :</FormFieldLabels>
        <FormInputs
          type="email"
          label="email"
          placeholder="Email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormFieldLabels>password :</FormFieldLabels>
        <FormInputs
          type="password"
          label="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <br />
        <SignUpBtn onClick={loginUser}>login</SignUpBtn>
        <Or>or</Or>
        <LogOutBtn onClick={signInWithGoogle}>
          {" "}
          <SignInwithgoogleTextDiv>
            <div>
              <GoogleIcon icon="ant-design:google-outlined" color="white" />{" "}
            </div>
            <div>
              {" "}
              <span>sign in with google</span>
            </div>
          </SignInwithgoogleTextDiv>
        </LogOutBtn>
        <DontHaveAccout>
          Don't have an account?<span onClick={signUp}>Sign up</span>
        </DontHaveAccout>
      </LoginDiv>
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
  );
};

export default Login;
