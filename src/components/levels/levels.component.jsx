import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import LevelsPreview from "../levels-preview/LevelsPreview.component";
import { useSelector } from "react-redux";
import { selectUid } from "../../store/user/user.selector";
import { setUserLevels } from "../../store/levels/levels.action";
import { getData } from "../../utils/firebase/firebase.utils";
import Level from "../level/level.component";
import { useDispatch } from "react-redux";
const Levels = () => {
  const dispatch = useDispatch();
  const uid = useSelector(selectUid);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(uid);
      console.log(data);
      dispatch(setUserLevels(data.levels));
    };
    fetchData();
  }, []);
  return (
    <Routes>
      <Route index element={<LevelsPreview></LevelsPreview>}></Route>
      <Route path=":level" element={<Level></Level>}></Route>
    </Routes>
  );
};

export default Levels;
