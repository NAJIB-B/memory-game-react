import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";

import { signOutUser } from "../../utils/firebase/firebase.utils";
const Home = () => {
  const currentUser = useSelector(selectCurrentUser);
  const logOut = async () => {
    signOutUser();
  };
  return (
    <div>
      {currentUser ? (
        <button onClick={logOut}>logout</button>
      ) : (
        <div>
          <Link to={"login"}>
            <button>login</button>
          </Link>
          <Link to={"signUp"}>
            <button>sign up</button>
          </Link>
        </div>
      )}

      <h1>memory game</h1>

      <Link to={"/freePlay"}>
        <button>free play</button>
      </Link>
      <Link to={"/levels"}>
        {" "}
        <button>levels</button>
      </Link>
    </div>
  );
};

export default Home;
