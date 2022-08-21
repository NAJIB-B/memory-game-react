import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import thunk from "redux-thunk";

const middlewares = [process.env.NODE_ENV !== "production" &&  logger,thunk].filter(Boolean)

const  composedEnhancers =compose(applyMiddleware(...middlewares))

export const store = createStore(rootReducer, undefined, composedEnhancers)


