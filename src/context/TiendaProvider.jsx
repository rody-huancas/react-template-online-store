import { createContext } from "react";

const TiendaContext = createContext();

const TiendaProvider = ({ children }) => {
  const hola = () => {
    console.log("hola");
  };

  return (
    <TiendaContext.Provider value={{ hola }}>{children}</TiendaContext.Provider>
  );
};

export { TiendaProvider };

export default TiendaContext;
