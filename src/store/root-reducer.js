import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { gameReducer } from "./game/game.reducer";
import { levelsReducer } from "./levels/levels.reducer";
import { modalReducer } from "./modal/modal.reducer";
export const rootReducer = combineReducers({
    user: userReducer,
    game: gameReducer,
    levels: levelsReducer,
    modal: modalReducer,
});
