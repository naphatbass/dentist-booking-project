import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Define your NextAuth configuration directly in the handler
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Replace this logic with actual user validation
        const user = { id: "1", name: "J Smith", email: "jsmith@example.com" };

        if (user) {
          return user;
        } else {
          return null; // Invalid credentials
        }
      },
    }),
  ],
  session: { strategy: "jwt" },
  secret: process.env.NEXTAUTH_SECRET
});

// Export the handler for both GET and POST methods
export { handler as GET, handler as POST };
