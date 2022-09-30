import LevelCard from "../level-card/level-card.component";
import { useSelector } from "react-redux";
import BackBtn from "../backBtn/backBtn.component";
import {
  selectUserLevels,
  selectSpinner,
} from "../../store/levels/levels.selector";
import { LevelPreviewDiv } from "./LevelsPreview.style";
import { Circles, CirclesLi } from "../home/home.style";
import Spinner from "../spinner/spinner.component";
const LevelsPreview = () => {
  const levels = useSelector(selectUserLevels);
  const spinner = useSelector(selectSpinner);
  if (!levels) return;
  const main = Object.entries(levels);
  //   const level = Object.entries(main[0][1]);
  return (
    <>
      {spinner ? (
        <Spinner></Spinner>
      ) : (
        <LevelPreviewDiv>
        
          {main.map((item, index) => {
            const data = item[1];

            return (
              <LevelCard
                key={index}
                levelName={item[0]}
                levelData={data}
              ></LevelCard>
            );
          })}
          <Circles>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
            <CirclesLi></CirclesLi>
          </Circles>
        </LevelPreviewDiv>
      )}
    </>
  );
};

export default LevelsPreview;
// const data = {
//     levels: {
//       1: { e: "here" },
//       2: { e: "there" },
//       3: { e: "mere" },
//     },
//   };
//   const breker = () => {
//     const cat = Object.entries(data);
//     const levels = Object.entries(cat[0][1]);
//     const items = levels.map((item) => console.log(item[1].e));
//   };
//   breker();
