"use client";

import React, { useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import styles from "../../styles/gallery.module.css";
import { db } from "../../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

import { useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

export default function Page() {
  const router = usePathname();
  const [gallery, setGallery] = useState([]);
  const [filtered, setFilterd] = useState([]);
  const [Gstate, setGstate] = useState(false);
  useEffect(() => {
    const reference = collection(db, "gallery");
    const dbQuery = query(reference, orderBy("id", "asc"));

    onSnapshot(dbQuery, (querySnapshot) => {
      let i = 1;

      // Load data to Array
      setGallery(
        querySnapshot.docs.map((doc) => {
          let data = doc.data();

          return {
            id: doc.id,
            index: i++,
            ...data,
          };
        })
      );
    });
   
  }, []);
  useEffect(() => {
    setFilterd(
      gallery.filter((user) => user.index === router)
      //  setStudents(filtered)
    );
    
  }, [gallery]);
  useEffect(() => {
    if (filtered.length === 0) {
      setGstate(true);
    } else if (filtered.length > 0) {
      setGstate(false);
    }
  },[filtered])
  console.log(filtered)
  return (
    <>
      <Head>
        <title>Gallery</title>
      </Head>

      {!Gstate ? (
        <div className={styles.gallery}>
          {filtered.map((gall) => {
            return (
              <div className={styles.pics} key={gall.id}>
                <Image
                  width="224"
                  height="176"
                  alt="product"
                  src={gall.image}
                  priority
                  className={styles.gallimg}
                ></Image>
              </div>
            );
          })}
        </div>
      ) : (
        <p className={styles.Gstatetext}>No images</p>
      )}
    </>
  );
}
