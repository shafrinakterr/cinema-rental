import { useReducer, useState } from "react";
import { MovieContext, ThemeContext } from "./context";
import Page from "./Page";
import { cartReducer, initialSate } from "./reducers/CartReducer";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [state, dispatch]= useReducer(cartReducer, initialSate)
  return (
    <>
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Page></Page>
      </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
};

export default App;
