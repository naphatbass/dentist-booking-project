import styles from './card.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';
import { useState } from 'react';

export default function Card({ hospitalName, imgSrc, onRatingChange }: { hospitalName: string, imgSrc: string, onRatingChange: Function }) {
    const [ratingValue, setRatingValue] = useState<number | null>(0);

    const handleRatingChange = (event: React.ChangeEvent<{}>, newValue: number | null) => {
        setRatingValue(newValue); // Update the local rating state
        onRatingChange(hospitalName, newValue?.toString() || "0"); // Pass the rating to parent component
    };

    return (
        <InteractiveCard hospitalName={hospitalName}>
            <div className={styles.cardimg}>
                <Image 
                    src={imgSrc}
                    alt="card image"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <div className='p-[20px] text-xl'>
                <h2>{hospitalName}</h2>
            </div>
            <div className='pl-[20px]'>
                <Rating
                    value={ratingValue}
                    onChange={handleRatingChange}
                />
            </div>
        </InteractiveCard>
    );
}
