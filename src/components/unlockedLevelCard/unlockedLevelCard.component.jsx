import { Link } from "react-router-dom";
import { UnlockedLevelDiv } from "./unlockedLevelCard.style";

const UnlockedLevel = (props) => {
  const { star } = props;
  const { levelName } = props;

  return (
    <UnlockedLevelDiv>
      <Link to={levelName}>
        <p>{levelName}</p>
        {star === 0 ? <p>0 star</p> : ""}
        {star === 1 ? <p>1 star</p> : ""}
        {star === 2 ? <p>2 star</p> : ""}
        {star === 3 ? <p>3 star</p> : ""}
      </Link>
    </UnlockedLevelDiv>
  );
};

export default UnlockedLevel;
