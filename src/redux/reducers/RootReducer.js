import { combineReducers } from "redux";
import ThemeOptions from './ThemeOptions';
import UserReducer from "./UserReducer";

const RootReducer = combineReducers({
  ThemeOptions: ThemeOptions,
  UserReducer: UserReducer,
});

export default RootReducer;



