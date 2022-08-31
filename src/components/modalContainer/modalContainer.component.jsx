import "./modalContainer.style.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../context/modal.context";
import { unlockLevel } from "../../utils/firebase/firebase.utils";
import { selectUid } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../../utils/firebase/firebase.utils";
import { setUserLevels } from "../../store/levels/levels.action";
const ModalContainer = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const uid = useSelector(selectUid);
  const { setModal } = useContext(ModalContext);
  const star = props.star;
  const next = props.next;
  const previous = props.previous;
  const fetchData = async () => {
    const data = await getData(uid);
    console.log("new level data", data);
    dispatch(setUserLevels(data.levels));
  };

  const handleNext = () => {
    unlockLevel(uid, next);
    fetchData();
    setModal(false);

    navigate("/levels");
  };

  return (
    <div className="modal">
      <div className="modalContainer">
        <p>
          your star is <span>{star}</span>
        </p>

        <p onClick={handleNext}>next</p>
      </div>
      <div className="overlay"></div>
    </div>
  );
};

export default ModalContainer;
