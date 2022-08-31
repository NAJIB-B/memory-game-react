import { async } from "@firebase/util";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { levels } from "../../utils/game/levels-data";
import { Circles, CirclesLi, Area } from "../home/home.style";
import { LoginDiv,FormFieldLabels } from "./login.style";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
  auth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const redirect = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocument(response.user, levels);
        navigate("/");
      }
    };
    redirect();
  }, []);
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
  const signInWithGoogle = () => {
    signInWithGoogleRedirect();
  };
  return (
    <Area>
      <LoginDiv>
        <FormFieldLabels>email</FormFieldLabels>
        <input
          type="email"
          label="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <p>password</p>
        <input
          type="password"
          label="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />

        <button onClick={loginUser}>login</button>
        <p>or</p>
        <button onClick={signInWithGoogle}>sign in with google</button>
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
