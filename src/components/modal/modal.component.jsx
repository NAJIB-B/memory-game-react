import "./modal.style.css";
import ModalContainer from "../modalContainer/modalContainer.component";
import { selectUserLevels } from "../../store/levels/levels.selector";
import { selectLevelStar } from "../../store/game/game.selector";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Modal = () => {
  const { level } = useParams();

  const star = useSelector(selectLevelStar);
  const userLevels = useSelector(selectUserLevels);

  const next = userLevels[level].nextLevel;
  const previous = userLevels[level].previousLevel;
  const retry = level;
  return (
    <ModalContainer
      star={star}
      previous={previous}
      next={next}
      retry={retry}
      data={"data"}
    ></ModalContainer>
  );
};

export default Modal;
