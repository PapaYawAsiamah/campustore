"use client";
import React, { useContext, useState } from "react";
import styles from "../styles/navbar.module.css";
import Link from "next/link";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Image from "next/image";
import TelegramIcon from "@mui/icons-material/Telegram";
import AppContext from "@/context";

const Navbar = () => {
  const context = useContext(AppContext);
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <h1>Campustore</h1>
        </Link>
      </div>
      <div className={styles.search}>
        <form>
          <input
            type="text"
            placeholder="search product"
            onChange={(e) => {
              context.setFind(e.target.value);
            }}
            value={context.find} 
          />
        </form>
      </div>
      <div className={styles.icons}>
        <Link href="https://wa.me/+233209851044">
          <WhatsAppIcon />
        </Link>
        <Link href="https://t.snapchat.com/Ewki30kR">
          <Image src="/snapchat.png" width="20" height="20" alt="snapchat" />
        </Link>
        <Link href="https://t.me/thecampustore">
          <TelegramIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
