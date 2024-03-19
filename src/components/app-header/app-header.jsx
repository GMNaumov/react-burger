import React from "react";

import {
    BurgerIcon,
    ListIcon,
    Logo,
    ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import appHeaderStyle from "./app-header.module.css";

import {temporaryUrl} from "../../utils/data"

const AppHeader = () => {
    return (
        <header>
            <nav className={appHeaderStyle.header}>
                <a href={temporaryUrl} className={appHeaderStyle.constructor}>
                    <BurgerIcon type="primary"/>
                    <p className={appHeaderStyle.text}>Конструктор</p>
                </a>
                <a href={temporaryUrl} className={appHeaderStyle.orders}>
                    <ListIcon type="secondary"/>
                    <p className={appHeaderStyle.text_type_orders}>Лента заказов</p>
                </a>
                <div className={appHeaderStyle.logo}>
                    <Logo/>
                </div>
                <a href={temporaryUrl} className={appHeaderStyle.account}>
                    <ProfileIcon type="secondary"/>
                    <p className={appHeaderStyle.text_type_account}>Личный кабинет</p>
                </a>
            </nav>
        </header>
    );
};

export default AppHeader;
