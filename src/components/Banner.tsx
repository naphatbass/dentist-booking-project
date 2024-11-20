import styles from './banner.module.css';
import Image from 'next/image';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image src={'/img/banner.jpg'} 
      alt="Banner" 
      layout="fill" 
      objectFit="cover" />
      <div className={styles.bannerText}>
        <h1>Dentist Booking Center</h1>
        <p>make appointment with your dentist today!</p>
    </div>
    </div>
  );
}
