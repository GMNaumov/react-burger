import { Routes, Route, useLocation } from "react-router-dom";
import AppHeader from "../app-header/app-header";

import { HomePage } from "../../pages/home-page/home-page";
import { LoginPage } from "../../pages/login-page/login-page";
import { RegisterPage } from "../../pages/register-page/register-page";
import { ResetPasswordPage } from "../../pages/reset-password-page/reset-password-page";
import { ForgotPasswordPage } from "../../pages/forgot-password-page/forgot-password-page";
import { ProfilePage } from "../../pages/profile/profile";
import { ProfileOrdersPage } from "../../pages/profile/profile-orders/profile-orders";

import { OrdersPage } from "../../pages/orders-page/orders-page";
import IngredientDetailsCard from "../ingredient-details-card/ingredient-details-card";
import { ProtectedRouteElement } from "../protected-route-element/protected-route-element";
import { UnProtectedRouteElement } from "../unprotected-route-element/unprotected-route-element";
import ProfileInfo from "../../pages/profile/profile-info/profile-info";
import Modal from "../modal-window/modal-window";
import OrderDetails from "../order-details/order-details";

import appStyles from "./app.module.css";


const App = () => {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <div className={appStyles.App}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="ingridients/:id" element={<IngredientDetailsCard />} />
        <Route element={<ProtectedRouteElement path="/order" element={<Modal>
          <OrderDetails />
        </Modal>
        } />}
        />

        <Route path="/profile" element={<ProtectedRouteElement element={<ProfilePage />} />}>
          <Route path="/profile" element={<ProfileInfo />} />
          <Route path=":orders" element={<ProfileOrdersPage />} />
        </Route>
        <Route path="/orders" element={<OrdersPage />} />

        <Route path="/login" element={<UnProtectedRouteElement element={<LoginPage />} />} />
        <Route path="/register" element={<UnProtectedRouteElement element={<RegisterPage />} />} />
        <Route path="/forgot-password" element={<UnProtectedRouteElement element={<ForgotPasswordPage />} />} />
        <Route path="/reset-password" element={<UnProtectedRouteElement element={<ResetPasswordPage />} />} />

      </Routes>
      {background &&
        <Routes>
          <Route path="/order" element={<ProtectedRouteElement element={<Modal>
            <OrderDetails />
          </Modal>
          } />}
          />
          <Route path="ingridients/:id" element={<Modal title={"Детали ингридиента"}>
            <IngredientDetailsCard />
          </Modal>}
          />
        </Routes>
      }
    </div >
  );
}

export default App;
