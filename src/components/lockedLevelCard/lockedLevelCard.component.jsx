import { Link } from "react-router-dom";

const LockedLevel = (props) => {
  const { levelName } = props;

  return (
    <div>
      <p>
        {levelName} <span>locked </span>
      </p>
      <p> 0 star</p>
    </div>
  );
};

export default LockedLevel;
