import LevelCard from "../level-card/level-card.component";
import { useSelector } from "react-redux";
import { selectUserLevels } from "../../store/levels/levels.selector";

const LevelsPreview = () => {
  const levels = useSelector(selectUserLevels);
  if (!levels) return;
  const main = Object.entries(levels);
  //   const level = Object.entries(main[0][1]);
  return (
    <>
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
