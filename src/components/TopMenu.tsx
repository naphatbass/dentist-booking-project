// src/components/TopMenu.tsx

import Image from 'next/image';
import styles from './topmenu.module.css';
import { getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default async function TopMenu() {
  // Fetch session using getServerSession with inline configuration
  const session = await getServerSession({
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text", placeholder: "username" },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials) {
          const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };
          if (user) return user;
          return null;
        },
      }),
    ],
    session: { strategy: "jwt" },
    secret: process.env.NEXTAUTH_SECRET,
  });

  console.log('Session:', session); // Logs session for debugging

  return (
    <div className={styles.topmenu}>
      <h1 className="text-3xl tracking-wide">CU Dentist</h1>
      <div className="flex flex-row items-center space-x-8">
        <a href="./booking" className="text-lg">Booking</a>
        {session ? (
          <a href="./api/auth/signout" className="text-lg">
            {session.user?.name} Logout
          </a>
        ) : (
          <a href="./api/auth/signin" className="text-lg">Login</a>
        )}
        <Image src="/img/logo.png" alt="logo" width={75} height={75} />
      </div>
    </div>
  );
}
