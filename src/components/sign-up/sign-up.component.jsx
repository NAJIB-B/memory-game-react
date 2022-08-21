import { async } from "@firebase/util";
import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocument,
  auth,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";

const SignUp = () => {
    const navigate = useNavigate();
  useEffect(() => {
    const redirect = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocument(response.user);
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

      await createUserDocument(user, { displayName });

      resetFields();
      navigate("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("cannot create user, email already in use");
      } else console.log(`failed ${error}`);
    }
  };
  const signInWithGoogle = () => {
    signInWithGoogleRedirect();
  };
  return (
    <div>
      <p>name</p>
      <input
        type="text"
        label="name"
        placeholder="name"
        name="displayName"
        onChange={handleChange}
        value={displayName}
        required
      />
      <p>email</p>
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
      <p>confirm password</p>
      <input
        type="password"
        label="confirm password"
        placeholder="confirm password"
        name="confirmPassword"
        onChange={handleChange}
        value={confirmPassword}
        required
      />
      <button onClick={signUp}>sign up</button>
      <p>or</p>
      <button onClick={signInWithGoogle}>sign in with google</button>
    </div>
  );
};

export default SignUp;
