import { faCentercode } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from "/styles/Navbar.module.scss";
import Image from "next/image";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.nav}>
        <div className={styles.profile}>
          <Image
            className={styles.portimage}
            src="/portface.jpg"
            alt="picture of rafael"
            width={300}
            height={300}
          />
        </div>
        <ul className={styles.items}>
          <li className={styles.item}>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/portfolio">
              <a>Portfolio</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/skills">
              <a>Skills</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
        <footer className={styles.footers}>
          <p>@2021 Rafael Colon</p>
        </footer>
      </div>
    </div>
  );
}
