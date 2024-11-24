import Image from 'next/image';
import styles from './topmenu.module.css';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

export default async function TopMenu() {

    const session = await getServerSession(authOptions);
    console.log('Session:', session);

    return (
        <div className={styles.topmenu}>
            <h1 className="text-3xl tracking-wide">CU Dentist</h1>
            <div className="flex flex-row items-center space-x-8">
                <a href="./" className="text-lg">Home</a>
                { session ? <a href="./booking" className="text-lg">Booking</a> : null }
                {
                    session ? (
                        <a href="./api/auth/signout" className="text-lg">{ session.user?.name } Logout</a>
                    ) : (
                        <a href="./api/auth/signin" className="text-lg">Login</a>
                    )
                }
                <Image src="/img/logo.png" alt="logo" width={75} height={75} />
            </div>
        </div>
    );
}
