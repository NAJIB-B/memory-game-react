import { async } from "@firebase/util";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { useState } from "react";
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
  DontHaveAccout,
  Or,
} from "../login/login.style";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
  auth,
  signInWithGoogleRedirect,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import { SignUpPageDiv, SignUpDiv } from "./sign-up.style";
import { setLoading } from "../../store/user/user.action";
import { useDispatch } from "react-redux";
const SignUp = () => {
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
  const defaultFormFields = {
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  const resetFields = () => setFormFields(defaultFormFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const login = () => {
    navigate("/login", { replace: true });
  };
  const signUp = async () => {
    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocument(user, levels, { displayName });

      resetFields();
      dispatch(setLoading(true));
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else console.log(`failed ${error}`);
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
    <SignUpPageDiv>
      <SignUpDiv>
        <FormFieldLabels>Name :</FormFieldLabels>
        <FormInputs
          type="text"
          label="name"
          placeholder="name"
          name="displayName"
          onChange={handleChange}
          value={displayName}
          required
        />
        <FormFieldLabels>Email :</FormFieldLabels>
        <FormInputs
          type="email"
          label="email"
          placeholder="email"
          name="email"
          onChange={handleChange}
          value={email}
          required
        />
        <FormFieldLabels>Password :</FormFieldLabels>
        <FormInputs
          type="password"
          label="password"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={password}
          required
        />
        <FormFieldLabels>Confirm password :</FormFieldLabels>
        <FormInputs
          type="password"
          label="confirm password"
          placeholder="confirm password"
          name="confirmPassword"
          onChange={handleChange}
          value={confirmPassword}
          required
        />
        <br />
        <SignUpBtn onClick={signUp}>sign up</SignUpBtn>
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
          Already have an account?<span onClick={login}>Log in</span>
        </DontHaveAccout>
      </SignUpDiv>
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
    </SignUpPageDiv>
  );
};

export default SignUp;
