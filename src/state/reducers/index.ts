import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducers = combineReducers({
  repositories: repositoriesReducer,
});

export default reducers;

// * This get's the return type of the reducers function and assigns it to RootState
export type RootState = ReturnType<typeof reducers>;
