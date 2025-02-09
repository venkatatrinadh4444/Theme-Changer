import React from "react";
import "./App.css";
import { createContext, useEffect, useReducer } from "react";
import Navbar from "./components/navbar/index";
import TopSection from "./components/topSection";
import BottomSection from "./components/bottomSection";

export const StoreContext = createContext();

const actionTypes = {
  mode: "modeChange",
  bgChange: "bgChange",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.mode:
      return { ...state, mode: action.payload };
    case actionTypes.bgChange:
      return { ...state, bgChange: action.payload };
    default:
      return state;
  }
};

const initialState = () => {
  const language = localStorage.getItem("language");
  const background = localStorage.getItem("bg");
  if (language && background)
    return {
      mode: JSON.parse(language),
      bgChange: JSON.parse(background),
    };
  else
    return {
      mode: "telugu",
      bgChange: "light",
    };
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState());

  const newClass = state.bgChange === "light" ? "lightBg" : "darkBg";

  useEffect(() => {
    localStorage.setItem("bg", JSON.stringify(state.bgChange));
    localStorage.setItem("language", JSON.stringify(state.mode));
  }, [state]);
  return (
    <div className={newClass}>
      <StoreContext.Provider value={{ state, dispatch }}>
        <Navbar />
        <TopSection />
        <BottomSection />
      </StoreContext.Provider>
    </div>
  );
};
export default App;
