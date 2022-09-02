import { Link } from "react-router-dom";
import {
  LevelName,
  Stars,
  UnlockedLevelButton,
} from "./unlockedLevelCard.style";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const UnlockedLevel = (props) => {
  const navigate = useNavigate();
  const { star } = props;
  const { levelName } = props;
  const click = () => {
    navigate(levelName);
  };
  return (
    <UnlockedLevelButton onClick={click}>
      <LevelName>Level {levelName}</LevelName>
      {star === 0 ? (
        <span>
          <Stars icon="ant-design:star-filled" color="gray" />
          <Stars icon="ant-design:star-filled" color="gray" />
          <Stars icon="ant-design:star-filled" color="gray" />
        </span>
      ) : (
        ""
      )}
      {star === 1 ? (
        <span>
          <Stars icon="ant-design:star-filled" color="#ffe203" />
          <Stars icon="ant-design:star-filled" color="gray" />
          <Stars icon="ant-design:star-filled" color="gray" />
        </span>
      ) : (
        ""
      )}
      {star === 2 ? (
        <span>
          <Stars icon="ant-design:star-filled" color="#ffe203" />
          <Stars icon="ant-design:star-filled" color="#ffe203" />
          <Stars icon="ant-design:star-filled" color="gray" />
        </span>
      ) : (
        ""
      )}
      {star === 3 ? (
        <span>
          <Stars icon="ant-design:star-filled" color="#ffe203" />
          <Stars icon="ant-design:star-filled" color="#ffe203" />
          <Stars icon="ant-design:star-filled" color="#ffe203" />
        </span>
      ) : (
        ""
      )}
    </UnlockedLevelButton>
  );
};

export default UnlockedLevel;
