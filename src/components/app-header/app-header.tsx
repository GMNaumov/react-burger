import AppHeaderItem from "../app-header-item/app-header-item";
import {
  BurgerIcon,
  ListIcon,
  ProfileIcon,
  Logo,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { useNavigate } from "react-router-dom";

function AppHeader() {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <AppHeaderItem
          path="/"
          text="Конструктор"
          icon={<BurgerIcon type="primary" />}
        />

        <AppHeaderItem
          path="/feed"
          text="Лента Заказов"
          icon={<ListIcon type="primary" />}
        />

        <div className={styles.logo} onClick={() => navigate("/")}>
          <Logo />
        </div>

        <AppHeaderItem
          path="/profile"
          text="Личный кабинет"
          icon={<ProfileIcon type="primary" />}
        />
      </div>
    </div>
  );
}

export default AppHeader;
