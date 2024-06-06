import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = ({ menu }) => {
  return (
    <header className={styles["container"]}>
      <Link href={`/`}>
        <Image
          className={styles.logo}
          src={"/images/logo-joa2-blanco.png"}
          alt="logo"
          width={78}
          height={30}
          priority
        />
      </Link>
      <nav>
        <ul className={styles.menu}>
          {menu.map((menuItem, index) => (
            <li key={index}>
              <a href={menuItem.link}>{menuItem.item}</a>
            </li>
          ))}
          <Image
            className={styles.usuario}
            src={"/images/usuario-blanco.png"}
            alt="logo"
            width={25}
            height={25}
            priority
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
