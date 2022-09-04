import "./free-play.style.css";
import ClosedImageCard from "../closed-image-card/closed-image-card.component";
import ImageCard from "../image-card/image-card.component";
import cat from "../../assets/images/cat.png";
import dog from "../../assets/images/dog.png";
import elephant from "../../assets/images/elephant.png";
import lion from "../../assets/images/lion.png";
import horse from "../../assets/images/horse.png";
import panda from "../../assets/images/panda.png";
import rat from "../../assets/images/rat.png";
import croc from "../../assets/images/croc.png";
import song from "../../assets/song/audio.wav";
import fail from "../../assets/song/fail.mp3";
import win from "../../assets/song/win.mp3";
import { suffleImages } from "../../utils/game/game.utils";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

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
  resetmatchedImages,
} from "../../store/game/game.action";
import BackBtn from "../backBtn/backBtn.component";
import {
  selectMatchedImages,
  selectCounterValue,
  selectIdOfSelected,
  selectGameState,
  selectCurrentImg,
  selectShowingArray,
  selectImagesState,
} from "../../store/game/game.selector";

const FreePlay = () => {
  const unshuffledImg = [
    { img: cat, id: "Lhe44LRTPy", showing: false },
    { img: dog, id: "m971yAiOJs", showing: false },
    { img: elephant, id: "wxzcrCbSgi", showing: false },
    { img: horse, id: "nGShQE14ka", showing: false },
    { img: lion, id: "sOPkRF9LUm", showing: false },
    { img: panda, id: "I1I3oVEoyW", showing: false },
    { img: croc, id: "ScBwLVxLEL", showing: false },
    { img: rat, id: "zMbvb3jAzg", showing: false },
    { img: cat, id: "jmFoEOuJK9", showing: false },
    { img: dog, id: "YKsATYt7xK", showing: false },
    { img: elephant, id: "sxhnT0Xyv6", showing: false },
    { img: horse, id: "Eg3CpNUzTd", showing: false },
    { img: lion, id: "fjC2mqoBdZ", showing: false },
    { img: panda, id: "NGNs7lup73", showing: false },
    { img: croc, id: "OtXc2HJ6Md", showing: false },
    { img: rat, id: "zfuyoTxNNl", showing: false },
  ];
  const myAudio = new Audio(song);
  const failSound = new Audio(fail);
  const winSound = new Audio(win);
  const [imgs, setImgs] = useState([]);

  const [showImgs, setShowImgs] = useState(false);
  const [startBtn, setStartBtn] = useState(true);
  const [instuction, setInstuction] = useState(false);
  const [showMoves, setShowMoves] = useState(false);
  const [showWinMessage, setWinMessage] = useState(false);
  const dispatch = useDispatch();
  const state = useSelector(selectGameState);
  const moves = useSelector(selectCounterValue);
  const currentImg = useSelector(selectCurrentImg);
  const showingArray = useSelector(selectShowingArray);
  const matchedImages = useSelector(selectMatchedImages);
  const imagesState = useSelector(selectImagesState);
  const idOfSelected = useSelector(selectIdOfSelected);

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
        if (showingArray.length + 1 <= 1) return;
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
    }
  }, [matchedImages]);

  const handleStartGame = () => {
    dispatch(changeGameState(true));
    defaultValues();
    setInstuction(true);

    setShowImgs(!showImgs);
    setTimeout(() => {
      setShowImgs(false);
    }, 3000);
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
    }, 3000);
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
                  <ClosedImageCard key={index} image={img}></ClosedImageCard>
                );
              })}
        </div>
      </div>
    </div>
  );
};

export default FreePlay;
