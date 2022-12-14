import ClosedImageCard from "../closed-image-card/closed-image-card.component";
import ImageCard from "../image-card/image-card.component";

import { suffleImages } from "../../utils/game/game.utils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { updateLevelData } from "../../utils/firebase/firebase.utils";
import {
  changeGameState,
  incrementCounter,
  resetCounter,
  addItemToShowingArray,
  removeItemFromShowingArray,
  resetShowingArray,
  addItemToMatchedImages,
  setImagesState,
  setIdOfSelected,
  setLevelStar,
  resetmatchedImages,
} from "../../store/game/game.action";
import { selectUid } from "../../store/user/user.selector";

import {
  selectMatchedImages,
  selectCounterValue,
  selectIdOfSelected,
  selectShowingArray,
  selectImagesState,
  selectGameState,
} from "../../store/game/game.selector";
import { selectModal } from "../../store/modal/modal.selector";
import { setModal } from "../../store/modal/modal.action";
import song from "../../assets/song/audio.wav";
import fail from "../../assets/song/fail.mp3";
import win from "../../assets/song/win.mp3";
import { selectUserLevels } from "../../store/levels/levels.selector";
import Modal from "../modal/modal.component";

import BackBtn from "../backBtn/backBtn.component";
const Level = () => {
  const { level } = useParams();
  const myAudio = new Audio(song);
  const failSound = new Audio(fail);
  const winSound = new Audio(win);
  const userLevels = useSelector(selectUserLevels);

  const unshuffledImg = userLevels[level].Images;
  const [imgs, setImgs] = useState([]);

  const [showImgs, setShowImgs] = useState(false);
  const [startBtn, setStartBtn] = useState(true);
  const [instuction, setInstuction] = useState(false);
  const [showMoves, setShowMoves] = useState(false);
  const [showWinMessage, setWinMessage] = useState(false);

  const dispatch = useDispatch();

  const levelMoves = userLevels[level].levelMoves;
  const moves = useSelector(selectCounterValue);

  const userUid = useSelector(selectUid);
  const modal = useSelector(selectModal);
  const showingArray = useSelector(selectShowingArray);
  const matchedImages = useSelector(selectMatchedImages);
  const imagesState = useSelector(selectImagesState);
  const idOfSelected = useSelector(selectIdOfSelected);
  const state = useSelector(selectGameState);

  useEffect(() => {
    if (!idOfSelected) return;
    //clear instruction
    setInstuction(false);

    const newState = imagesState.map((item) =>
      item.id === idOfSelected ? { ...item, showing: true } : item
    );
    setImgs(newState);
    console.log(newState);
    dispatch(setImagesState(newState));
    // Add and display moves
    addMoves();
    //Add item to showing array
    imagesState.map((item) =>
      item.id === idOfSelected
        ? dispatch(addItemToShowingArray(item.img))
        : item
    );
    dispatch(setIdOfSelected(""));
  }, [idOfSelected]);
  useEffect(() => {
    if (showingArray.length <= 1) return;

    if (showingArray.length >= 1) {
      for (let j = 0; j < showingArray.length; j++) {
        if (showingArray.length <= 1) return;
        if (showingArray[0] !== showingArray[1]) {
          failSound.play();
          const newState = imagesState.map((item) =>
            item.img === showingArray[0] ? { ...item, showing: false } : item
          );
          dispatch(removeItemFromShowingArray(showingArray[0]));
          setImgs(newState);
          dispatch(setImagesState(newState));
        } else {
          myAudio.play();
          dispatch(addItemToMatchedImages(showingArray[0]));
          dispatch(addItemToMatchedImages(showingArray[1]));
          dispatch(removeItemFromShowingArray(showingArray[0]));
          dispatch(removeItemFromShowingArray(showingArray[0]));

          // this._sameImg();
        }
      }
    }
  }, [showingArray]);
  useEffect(() => {
    if (matchedImages.length === unshuffledImg.length * 2) {
      winSound.play();
      dispatch(changeGameState(false));

      setWinMessage(true);

      setShowMoves(false);
      console.log("you won");
      const playerStar = getStar(levelMoves, moves);
      dispatch(setLevelStar(playerStar));

      updateLevelData(userUid, level, playerStar, moves);
      dispatch(resetmatchedImages([]));
      dispatch(resetShowingArray([]));
      dispatch(setModal(true));
      // setModal(true);
    }
  }, [matchedImages]);
  const getStar = (levelMoves, moves) => {
    let star;

    if (levelMoves === moves) star = 3;
    if (moves > levelMoves && moves <= levelMoves + levelMoves * 0.5) star = 2;
    if (moves > levelMoves && moves > levelMoves + levelMoves * 0.5) star = 1;
    return star;
  };
  const handleStartGame = () => {
    dispatch(changeGameState(true));
    defaultValues();

    setInstuction(true);

    setShowImgs(!showImgs);
    setTimeout(() => {
      setShowImgs(false);
    }, 1000 * userLevels[level].showingTime);
    setStartBtn(false);
  };

  const handleResetGame = () => {
    console.log("clicked reset");
    setWinMessage(false);
    const images = suffleImages(unshuffledImg);
    console.log("new images", images);
    setImgs(images);
    dispatch(setImagesState(images));
    dispatch(changeGameState(true));
    dispatch(resetCounter(0));
    dispatch(resetmatchedImages([]));
    dispatch(resetShowingArray([]));
    setInstuction(true);
    setShowImgs(true);
    setTimeout(() => {
      setShowImgs(false);
    }, 1000 * userLevels[level].showingTime);
    setStartBtn(false);
  };

  const defaultValues = () => {
    setImgs([]);
    setImgs(imagesState);
    dispatch(resetCounter(0));

    dispatch(resetmatchedImages([]));
    dispatch(resetShowingArray([]));
  };
  const count = useSelector(selectCounterValue);
  const addCounter = () => {
    setShowImgs(!showImgs);
  };

  useEffect(() => {
    setImgs(imagesState);
  }, []);
  // useEffect(() => {
  //   if (!playSong) return;
  //   console.log("playing audio");
  //   myAudio.play();
  // }, [state]);
  useEffect(() => {
    const images = suffleImages(unshuffledImg);
    setImgs(images);
    dispatch(setImagesState(images));
  }, []);

  const addMoves = () => {
    dispatch(incrementCounter(moves));
    setShowMoves(true);
  };

  return (
    <>
      {modal ? (
        <Modal></Modal>
      ) : (
        <div className="mainGameDiv">
          <BackBtn></BackBtn>
          <button className="startBtn">
            {startBtn ? (
              <p onClick={handleStartGame}>start</p>
            ) : (
              <p onClick={handleResetGame}>reset</p>
            )}
          </button>

          {instuction ? <p>click colunm to match the images</p> : ""}
          {showWinMessage ? <p>you won with {count}</p> : ""}

          <p>{showMoves ? `Moves : ${count}` : ""}</p>
          <div className="imagesDiv">
            <div className="innerImagesDiv">
              {showImgs
                ? imgs.map((img, index) => {
                    return <ImageCard key={index} image={img}></ImageCard>;
                  })
                : imgs.map((img, index) => {
                    return (
                      <ClosedImageCard
                        key={index}
                        image={img}
                      ></ClosedImageCard>
                    );
                  })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Level;
