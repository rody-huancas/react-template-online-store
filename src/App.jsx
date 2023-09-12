import { StoreRoutes } from "@routes/StoreRoutes";
import { TiendaProvider } from "@context/TiendaProvider";

const App = () => {
  return (
    <>
      <TiendaProvider>
        <StoreRoutes />
      </TiendaProvider>
    </>
  );
};

export default App;
