"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth"; // Import Session type from next-auth

// Properly typed NextAuthProvider component
export default function NextAuthProvider({
  children,
  session,
}: {
  children: ReactNode;
  session: Session | null; // More specific type for session
}) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  );
}
