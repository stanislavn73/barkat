import React, { useState, useEffect } from "react";
import { useRouter, useRouteMatch } from "next/router";
import cx from "classnames";
import Link from "next/link";

import Img from "../Img";
import { PAGES } from "../../../utils/pages";

import * as menu from "../../../assets/images/icons/menu.png";
import * as close from "../../../assets/images/icons/close.png";
import * as logo from "../../../assets/images/logo.png";
import * as logoU from "../../../assets/images/logo_u.png";
import * as logoVille from "../../../assets/images/logo-ville.png";
import * as geo from "../../../assets/images/icons/map.png";
import * as phone from "../../../assets/images/icons/phone.png";
import * as mail from "../../../assets/images/icons/mail.png";

import "./style.less";

const routes = {
  HOME: "/",
  ABOUT_US: "/about_us",
  FACADES: "/facades",
  SOFT: "/soft",
  EVENTS:"/events"
};

const LOGOS = {
  [routes.HOME]: logoU,
  [routes.ABOUT_US]: logoU,
  [routes.FACADES]: logo,
  [routes.SOFT]: logoVille,
  [routes.EVENTS]: logo
};

function Header({ location }) {
  const [isMenuActive, setIsMenuActive] = useState(false);
  const [shrinked, setShrinked] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);

    return () => window.removeEventListener("scroll", onPageScroll);
  }, []);

  function onPageScroll() {
    const scrollTop = window.pageYOffset;

    // if (scrollTop > 300 && !shrinked ||
    //     scrollTop <= 300 && shrinked) return;

    if (scrollTop > 300) {
      setShrinked(true);
    } else {
      setShrinked(false);
    }
  }

  function handleMenuClick() {
    setIsMenuActive(true);
  }

  function handleMenuItemClick() {
    setIsMenuActive(false);
  }

  function handleClose() {
    setIsMenuActive(false);
  }

  const logoPage = PAGES[0];
  const menuButtons = PAGES.filter((page) => page.isMenu);

  const menuCX = cx("menu-wrapper", {
    "menu-wrapper_active": isMenuActive,
  });

  const headerCX = cx({
    "header-wrapper": true,
    "header-wrapper_shrinked": shrinked,
    "header-wrapper_active": isMenuActive
  });

  return (
    <>
      <div className={headerCX}>
        <div className="orange-line" />
        <div className="header-contacts-wrapper">
          <Link href={logoPage.route}>
            <a>
              <Img className="logo" src={logo} />
              <Img className="logo logo-mobile" src={LOGOS[router.route]} />
            </a>
          </Link>
          <Img className="logo logo-ville" src={logoVille} />
          <Img className="menu-icon" src={menu} onClick={handleMenuClick} />
        </div>
        <div className={menuCX}>
          <div className="menu">
            {menuButtons.map((page) => {
              const menuItemCX = cx("menu-item", {
                "menu-item_active": router.route === page.route,
                "menu-item_disabled": page.disabled,
              });

              return (
                <Link key={page.id} href={page.route}>
                  <a className={menuItemCX} onClick={handleMenuItemClick}>
                    {page.name}
                  </a>
                </Link>
              );
            })}
          </div>
          <Img className="close-icon" src={close} onClick={handleClose} />
        </div>
      </div>
    </>
  );
}

export default Header;
