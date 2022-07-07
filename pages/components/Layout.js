import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./layout.module.css";
import { useMenu } from "../../context/MenuContext";
import { useRouter } from "next/router";

const Layout = ({ children }) => {
  const router = useRouter();

  const [open, setOpen] = useState(false)
  const openMenu = () =>{
    setOpen(!open)
  }

  useEffect(()=>{
    if(router.pathname == '/'){
      setOpen(false)
    }
    if(router.pathname == '/Projects'){
      setOpen(false)
    }
    if(router.pathname == '/Contact'){
      setOpen(false)
    }
  },[router])


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
      <div className={`burger  ${open ? 'backgroundburger' : ''} `}>
        <div id="allBurger" onClick={()=>openMenu()}>
          <div className="burgerLine"></div>
          <div className="burgerLine"></div>
          <div className="burgerLine"></div>
        </div>
        <div className={open ? 'burgerMenu' : 'disabled'}>
          <div className={open ? 'menu backgroundburger' : 'disabled'}>
            <ul className={open ? 'menu' : 'disabled'}>
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/Projects">
                <a>Projects</a>
              </Link>
              <Link href="/Contact">
                <a>Contact</a>
              </Link>
            </ul>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default Layout;
