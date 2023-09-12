import { BrowserRouter, Route, Routes } from "react-router-dom";
/* Layout */
import { StoreLayout } from "@layouts/StoreLayout";
/* Paginas */
import { Home, About, Store, ProductDetail, Login } from "@pages";

export const StoreRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoreLayout />}>
            <Route index element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/tienda" element={<Store />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
