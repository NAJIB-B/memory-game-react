import "./modalContainer.style.jsx";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ModalContext } from "../context/modal.context";
import { unlockLevel } from "../../utils/firebase/firebase.utils";
import { selectUid } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../../utils/firebase/firebase.utils";
import { setUserLevels } from "../../store/levels/levels.action";
import { SignUpBtn } from "../home/home.style.jsx";
import { Stars } from "../unlockedLevelCard/unlockedLevelCard.style";
import { useState } from "react";
import {
  Overlay,
  ModalContainerDiv,
  Message,
  ModalStars,
} from "./modalContainer.style.jsx";
const ModalContainer = (props) => {
  const [spinner, setSpinner] = useState(false);
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const uid = useSelector(selectUid);
  const { setModal } = useContext(ModalContext);
  const star = props.star;
  const next = props.next;
  const previous = props.previous;
  const fetchData = async () => {
    const data = await getData(uid);
   
    dispatch(setUserLevels(data.levels));
  };

  const handleNext = () => {
    unlockLevel(uid, next);
    setTimeout(() => {
      fetchData();
   
    }, 1500);
    setModal(false);
  
    navigate("/levels");
  };

  return (
    <div className="modal">
      <ModalContainerDiv>
        <Message>you got</Message>
        <br />
        {star === 0 ? (
          <span>
            <ModalStars icon="ant-design:star-filled" color="gray" />
            <ModalStars icon="ant-design:star-filled" color="gray" />
            <ModalStars icon="ant-design:star-filled" color="gray" />
          </span>
        ) : (
          ""
        )}
        {star === 1 ? (
          <span>
            <ModalStars icon="ant-design:star-filled" color="#ffe203" />
            <ModalStars icon="ant-design:star-filled" color="gray" />
            <ModalStars icon="ant-design:star-filled" color="gray" />
          </span>
        ) : (
          ""
        )}
        {star === 2 ? (
          <span>
            <ModalStars icon="ant-design:star-filled" color="#ffe203" />
            <ModalStars icon="ant-design:star-filled" color="#ffe203" />
            <ModalStars icon="ant-design:star-filled" color="gray" />
          </span>
        ) : (
          ""
        )}
        {star === 3 ? (
          <span>
            <ModalStars icon="ant-design:star-filled" color="#ffe203" />
            <ModalStars icon="ant-design:star-filled" color="#ffe203" />
            <ModalStars icon="ant-design:star-filled" color="#ffe203" />
          </span>
        ) : (
          ""
        )}
        <br />
        <SignUpBtn onClick={handleNext}>next</SignUpBtn>
      </ModalContainerDiv>
      <Overlay></Overlay>
    </div>
  );
};

export default ModalContainer;
