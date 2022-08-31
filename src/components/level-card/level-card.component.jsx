import { Link } from "react-router-dom";
import LockedLevel from "../lockedLevelCard/lockedLevelCard.component";
import UnlockedLevel from "../unlockedLevelCard/unlockedLevelCard.component";

const LevelCard = (props) => {
  const { star, unlocked } = props.levelData;
  const { levelName } = props;

  return (
    <div>
      {unlocked ? <UnlockedLevel star={star} levelName={levelName}></UnlockedLevel>:
       <LockedLevel levelName={levelName}></LockedLevel>}
    </div>
  );
};

export default LevelCard;
