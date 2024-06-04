import React from "react";

import {
    BurgerIcon,
    ListIcon,
    ProfileIcon,
    Logo
} from "@ya.praktikum/react-developer-burger-ui-components";

import appHeaderStyle from "./app-header.module.css";

import AppHeaderItem from "../app-header-item/app-header-item";


function AppHeader() {
    const [active, setActive] = React.useState("Конструктор");

    return (
        <div className={appHeaderStyle.header}>
            <div className={appHeaderStyle.wrapper}>
                <AppHeaderItem
                    onClick={() => setActive("Конструктор")}
                    isActive={active === "Конструктор"}
                    text="Конструктор"
                    icon={<BurgerIcon/>}/>
                <AppHeaderItem
                    onClick={() => setActive("Лента Заказов")}
                    isActive={active === "Лента Заказов"}
                    text="Лента Заказов"
                    icon={<ListIcon/>}/>
                <div className={appHeaderStyle.logo}>
                    <Logo/>
                </div>
                <AppHeaderItem
                    onClick={() => setActive("Личный кабинет")}
                    isActive={active === "Личный кабинет"}
                    text="Личный кабинет"
                    icon={<ProfileIcon/>}/>
            </div>
        </div>
    );
}


export default AppHeader;