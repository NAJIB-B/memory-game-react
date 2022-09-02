import { Link } from "react-router-dom";
import { LevelName, Stars } from "../unlockedLevelCard/unlockedLevelCard.style";
import { LockedLevelButton, Lock } from "./lockedLevelCard.style";

const LockedLevel = (props) => {
  const { levelName } = props;

  return (
    <LockedLevelButton>
      <LevelName>Level {levelName}</LevelName>
      <span>
        <Stars icon="ant-design:star-filled" color="gray" />
        <Stars icon="ant-design:star-filled" color="gray" />
        <Stars icon="ant-design:star-filled" color="gray" />
      </span>
      <Lock icon="ant-design:lock-twotone" color="black" />
    </LockedLevelButton>
  );
};

export default LockedLevel;
