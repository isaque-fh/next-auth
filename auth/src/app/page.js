'use client'
import { signIn } from "next-auth/react";
import ClientLayout from '../shared/layout/client-layout';

export default function Home() {
  return (
    <div>
      <h1>Login</h1>
      <button onClick={() => signIn("github", { callbackUrl: "/admin"  })}>Entrar com GitHub</button>
      </div>
  );
}
