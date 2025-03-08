import ProtectedRoute from "../../shared/layout/authenticated";
export default function AdminPage() {
  return (
    <ProtectedRoute>
    <div>
      <h1>Página Administrativa</h1>
      <p>Bem-vindo!</p>
    </div>
    </ProtectedRoute>
  );
}
