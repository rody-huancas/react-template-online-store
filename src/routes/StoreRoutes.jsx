import { BrowserRouter, Route, Routes } from "react-router-dom";
import { StoreLayout } from "../layouts/StoreLayout";
import { Home } from "../pages/Home";

export const StoreRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StoreLayout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
