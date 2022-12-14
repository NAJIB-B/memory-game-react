import "./modalContainer.style.jsx";
import { useNavigate } from "react-router-dom";


import { unlockLevel } from "../../utils/firebase/firebase.utils";
import { selectUid } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getData } from "../../utils/firebase/firebase.utils";
import { setUserLevels, setSpinner } from "../../store/levels/levels.action";
import { SignUpBtn } from "../home/home.style.jsx";
import { Stars } from "../unlockedLevelCard/unlockedLevelCard.style";
import { useState } from "react";

import { setModal } from "../../store/modal/modal.action.js";
import {
  Overlay,
  ModalContainerDiv,
  Message,
  ModalStars,
} from "./modalContainer.style.jsx";
const ModalContainer = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const uid = useSelector(selectUid);

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
      dispatch(setSpinner(false));
    }, 1500);
    dispatch(setModal(false));
    
    dispatch(setSpinner(true));
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
