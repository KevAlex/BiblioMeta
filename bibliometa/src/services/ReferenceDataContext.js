import { createContext, useState } from "react";

const Provider = ({ children }) => {
  const [state, setState] = useState({});
  const [data, setData] = useState({});
  return (
    <AppContext.Provider
      value={{ user: [state, setState], books: [data, setData] }}
    >
      {" "}
      {children}{" "}
    </AppContext.Provider>
  );
};

export default Provider;
export const AppContext = createContext();
