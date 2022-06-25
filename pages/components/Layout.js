import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./layout.module.css";
import { useMenu } from "../../context/MenuContext";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <nav className="navbar">
        <ul className="navbarItems">
          <Link
            href="/">
            <li
              className={
                router.pathname == "/" ? "navitem activeClass" : "navitem"
              }
            >
              Home
            </li>
          </Link>
          <Link href="/Projects">
            <li
              className={
                router.pathname == "/Projects" ? "navitem activeClass" : "navitem"
              }
            >
              Projects
            </li>
          </Link>
          <Link href="/Contact">
            <li
              className={
                router.pathname == "/Contact" ? "navitem activeClass" : "navitem"
              }
            >
              Contact
            </li>
          </Link>
        </ul>
      </nav>
      <div className="burger">
        <div id="allBurger">
          <div className="burgerLine"></div>
          <div className="burgerLine"></div>
          <div className="burgerLine"></div>
        </div>
        <div className="burgerMenu">
          <div className="menu"></div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
