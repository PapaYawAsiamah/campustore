import React from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import TelegramIcon from "@mui/icons-material/Telegram";
const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          
          <h1>Campustore</h1>
        </Link>
      </div>
      <div className={styles.search}>
        <form>
          <input type="text" placeholder="search product" />
        </form>
      </div>
      <div className={styles.icons}>
        <Link href="">
          <WhatsAppIcon />
        </Link>
        <Link href="">
          <Image src="/snapchat.png" width="20" height="20" alt="snapchat" />
        </Link>
        <Link href="">
          <TelegramIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
