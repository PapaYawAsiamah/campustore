"use client";
import Image from 'next/image'
import styles from "../styles/page.module.css"
import Link from 'next/link'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { db } from '../../firebase';
import {
  collection,
  onSnapshot,
  orderBy,
  query,
  
} from "firebase/firestore";
import { useEffect, useState } from 'react';
import AppContext from "@/context";
import { useContext } from 'react';
import Head from 'next/head';



export default function Home() {
  const [customers, setCustomers] = useState([]);
  const [filtered, setFilterd] = useState(customers);
  const context = useContext(AppContext);
  const [resultState, setRstate] = useState(false)
 useEffect(() => {
    const reference = collection(db, "customers");
    const dbQuery = query(reference, orderBy("id", "asc"));

    onSnapshot(dbQuery, (querySnapshot) => {
      let i = 1;

      // Load data to Array
      setCustomers(
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
   
    
  },[])
 
  useEffect(() => {

    setFilterd(
      customers.filter((user) => user.descr.toLowerCase().includes(context.find.toLocaleLowerCase())),
      //  setStudents(filtered)
    
    );
    if(filtered.length === 0 && context.find){
      setRstate(true)
    } else if(filtered.length > 0 && context.find.length === 0){
      setRstate(false)
    }
  
    
  },[customers, context.find]);
  

  return (
    <>
    <Head>
    <title>Campustore</title>
    </Head>
   {!resultState ? 
    <div className={styles.wrapper}>

  {filtered.map((customer) =>   <div className={styles.card} key={customer.id}>
    <Link href={`/${customer.id}`}>  <Image className={styles.cardimg} width="224" height="176" alt="product" src={customer.image} priority></Image>
    </Link>
   <div className={styles.cardbody}>
     <h2 className={styles.cardtitle}>{customer.name}</h2>
     <h4>desc:</h4>
     <p className={styles.carddesc}>{customer.descr}</p>
     <h4>campus:</h4>
     <p className={styles.carddesc}>{customer.campus} </p>
     <h4>Current location:</h4>
     <p className={styles.carddesc}>{customer.CurrentLocation}</p>
     <div className={styles.contacts}>
        <Link href={customer.ig}><InstagramIcon/></Link>
        <Link href={customer.snap}><Image src="/snapchat.png" width="20" height="20" alt="snapchat" /></Link>
        <Link href={customer.whatsapp}><WhatsAppIcon/></Link>
     </div>

   </div>
    </div>
    )}
    </div> : <p className={styles.result}>no results</p>
    }
    </>
  )
}
