'use client'
import { useSession } from "next-auth/react";

const useAuth = () => {
  const { data: session } = useSession();

  const isAuthenticated = session !== null;
  const userRole = session?.user?.role;

  console.log(session);

  return {
    isAuthenticated,
    userRole,
  };
};

export default useAuth;
