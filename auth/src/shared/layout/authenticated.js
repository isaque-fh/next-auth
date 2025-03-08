'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import  useAuth  from "../../hooks/use-auth";

const ProtectedRoute = ({ children, requiredRole }) => {
  const { isAuthenticated, userRole } = useAuth();
  const router = useRouter();
  useEffect(() => {
    // Verifica se o usuário não está autenticado
    if (!isAuthenticated) {
      router.push("/"); // Redireciona para a página inicial
    }
  }, [isAuthenticated, router]); // Re-executa se a autenticidade mudar

  // Verifica se o usuário não tem a permissão necessária
  if (requiredRole && userRole !== requiredRole) {
    return <p>Você não tem permissão para acessar esta página.</p>;
  }

  if (isAuthenticated) {
    return children;
  }
  return null;
};

export default ProtectedRoute;
