import "./free-play.style.css";
import cat from "../../assets/images/cat.png";
import dog from "../../assets/images/dog.png";
import elephant from "../../assets/images/elephant.png";
import lion from "../../assets/images/lion.png";
import horse from "../../assets/images/horse.png";
import panda from "../../assets/images/panda.png";
import rat from "../../assets/images/rat.png";
import croc from "../../assets/images/croc.png";
import green from "../../assets/images/green.png";
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
  setCurrentImg,
} from "../../store/game/game.action";
import {
  selectCounterValue,
  selectGameState,
  selectCurrentImg,
  selectShowingArray,
} from "../../store/game/game.selector";

const FreePlay = () => {
  const dispatch = useDispatch();
  const state = useSelector(selectGameState);
  const moves = useSelector(selectCounterValue);
  const currentImg = useSelector(selectCurrentImg);
  const showingArray = useSelector(selectShowingArray);
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
  const handleResetGame = () => {};
  const defaultValues = () => {
    setImgs([]);
    setImgs(suffleImages(unshuffledImg));
    dispatch(resetCounter(0));
    dispatch(removeItemFromShowingArray);
    dispatch(resetShowingArray([]));
  };
  const count = useSelector(selectCounterValue);
  const addCounter = () => {
    setShowImgs(!showImgs);
  };

  useEffect(() => {
    setImgs(suffleImages(unshuffledImg));
  }, []);
  const [imgs, setImgs] = useState([]);
  const [showImgs, setShowImgs] = useState(false);
  const [startBtn, setStartBtn] = useState(true);
  const [instuction, setInstuction] = useState(false);
  const [showMoves, setShowMoves] = useState(false);
  const imageClick = (e) => {
    // check game state
    if (!state) return;
    //clear instruction
    setInstuction(false);
    // assign current element
    dispatch(setCurrentImg(e.target.firstElementChild));
    // Add and display moves
    addMoves();
    // Display images
    e.target.closest("div").classList.add("imgDivTrans");
    e.target.firstElementChild.classList.add("showing");
    dispatch(addItemToShowingArray(e.target.firstElementChild.src));
    // Add game mechanics
    if (showingArray.length <= 1) return;
    if (showingArray.length >= 1) {
      for (let j = 0; j < showingArray.length; j++) {
        if (showingArray.length <= 1) return;
        if (showingArray[0] !== e.target.firstElementChild.src.src) {
          console.log("yes");
        }

        // this._diffImg();
        else {
          console.log("yes");
          // this._sameImg();
        }
      }
    }
  };
  const addMoves = () => {
    dispatch(incrementCounter(moves));
    setShowMoves(true);
  };
  const displayImg = () => {
    currentImg.classList.remove("hidden");
  };
  let i = 0;
  const unshuffledImg = [
    cat,
    dog,
    elephant,
    horse,
    lion,
    panda,
    croc,
    rat,
    cat,
    dog,
    elephant,
    horse,
    lion,
    panda,
    croc,
    rat,
  ];

  return (
    <>
      <button>
        {startBtn ? (
          <p onClick={handleStartGame}>start</p>
        ) : (
          <p onClick={handleResetGame}>start</p>
        )}
      </button>
      {instuction ? <p>click colunm to match the images</p> : ""}

      <button onClick={addCounter}>t</button>
      <p>{showMoves ? count : ""}</p>
      <div className="imagesDiv">
        {showImgs
          ? imgs.map((img) => {
              i++;
              return (
                <div
                  className="imgDivTrans transition"
                  key={i}
                  onClick={imageClick}
                >
                  <img src={img} alt="" className="tileImage" />
                </div>
              );
            })
          : imgs.map((img) => {
              i++;
              return (
                <div className="imgDiv transition" key={i} onClick={imageClick}>
                  <img src={img} alt="" className="tileImage hidden" />
                </div>
              );
            })}
      </div>
    </>
  );
};

export default FreePlay;
