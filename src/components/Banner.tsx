"use client";
import styles from './banner.module.css';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

export default function Banner() {

  const { data: session } = useSession();

  return (
    <div className={styles.banner}>
      <Image src={'/img/banner.jpg'} 
      alt="Banner" 
      layout="fill" 
      objectFit="cover" />
      <div className={styles.bannerText}>
        <h1>Dentist Booking Center</h1>
        {
          session? <p>Welcome {session.user?.name}</p> : null
        }
        <p>make appointment with your dentist today!</p>
    </div>
    </div>
  );
}
