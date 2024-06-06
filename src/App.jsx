import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";

function ProtectedRoute({ element }) {
  const { session } = useSupabaseAuth();
  return session ? element : <Login />;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ProtectedRoute element={<Index />} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;