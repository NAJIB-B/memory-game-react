import { Route, Routes } from "react-router-dom";
import LevelsPreview from "../levels-preview/LevelsPreview.component";
const Levels = () => {
  return (
    <Routes>
      <Route index element={<LevelsPreview></LevelsPreview>}></Route>
      {/* <Route path=":level" element={<Level></Level>}></Route> */}
    </Routes>
  );
};

export default Levels;
