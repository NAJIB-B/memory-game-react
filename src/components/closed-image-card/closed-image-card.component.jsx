import "./closed-image-card.style.css";
import { useSelector } from "react-redux";
import { selectImagesState, selectGameState } from "../../store/game/game.selector";
import { setImagesState, setIdOfSelected } from "../../store/game/game.action";
import { useDispatch } from "react-redux";
import { fromClosed } from "../free-play/free-play.component";

const ClosedImageCard = ({ image }) => {
  const dispatch = useDispatch();
  
  const gameState = useSelector(selectGameState)
  //   const showImage = (image) => {
  //     const state = useSelector(selectImagesState);

  //     return state.map((item) =>
  //       item.id === image.id ? { ...item, showing: true } : item
  //     );
  //   };
  const { img, id, showing, match } = image;

  const handleClick = () => {
    if(!gameState)return
    dispatch(setIdOfSelected(id));
    // console.log(state);
    // const newState = state.map((img) =>
    //   id === img.id ? { ...img, showing: true } : img
    // );
    // dispatch(setImagesState(newState));
  };
  return (
    <div
      className={showing ? "imgDivTrans transition" : "imgDiv transition"}
      onClick={handleClick}
    >
      <img
        src={img}
        alt=""
        className={showing ? "tileImage" : "tileImage hidden"}
      />
    </div>
  );
};

export default ClosedImageCard;
