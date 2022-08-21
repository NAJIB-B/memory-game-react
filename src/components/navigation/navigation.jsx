import { useNavigate, Outlet } from "react-router-dom";
import { setCurrentUser } from "../../store/user/user.action";
import { useDispatch } from "react-redux";

const Navigation = () => {
  const dispatch = useDispatch();
  // const { setIsAllow } = useContext(UserContext);
  const navigate = useNavigate();
  const click = () => {
    navigate("/shop");
  };
  const allow = () => {
    dispatch(setCurrentUser(true));
  };
  return (
    <div>
      <h2 onClick={click}>navigation</h2>
      <button onClick={allow}>allow</button>
      <Outlet></Outlet>
    </div>
  );
};
export default Navigation;
