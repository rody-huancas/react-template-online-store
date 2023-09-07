import { BrowserRouter, Route, Routes } from "react-router-dom";
/* Layout */
import { StoreLayout } from "../layouts/StoreLayout";
/* Paginas */
import { Home, About, Store } from "../pages";

export const StoreRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoreLayout />}>
            <Route index element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/tienda" element={<Store />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
