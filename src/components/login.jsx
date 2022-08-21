import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  updateName,
  getData,
  auth,
  createUserDocument,
  signInWithGoogleRedirect,
  createAuthUserWithEmailAndPassword,
} from "../utils/firebase/firebase.utils";
import { async } from "@firebase/util";
const Login = () => {
  const data = {
    levels: {
      1: { e: "here" },
      2: { e: "there" },
      3: { e: "mere" },
    },
  };
  const breker = () => {
    const cat = Object.entries(data);
    const levels = Object.entries(cat[0][1]);
    const items = levels.map((item) => console.log(item[1].e));
  };
  breker();

  useEffect(() => {
    const redirect = async () => {
      const response = await getRedirectResult(auth);
      if (response) {
        const userDocRef = await createUserDocument(response.user);
      }
    };
    redirect();
  }, []);

  const submit = async () => {
    const email = "me@gmail.com";
    const password = "passwoord";
    const displayName = "najib";
    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      const userDocRef = await createUserDocument(response.user, {
        displayName,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h2>login</h2>
      <p>name</p>
      <input type="text" />
      <p>email</p>
      <input type="email" />
      <p>password</p>
      <input type="password" />
      <button onClick={submit}>sign up </button>
      <button onClick={getData}>getData</button>
      <button onClick={updateName}>update</button>
      <button onClick={signInWithGoogleRedirect}> login with redirect</button>
    </>
  );
};


