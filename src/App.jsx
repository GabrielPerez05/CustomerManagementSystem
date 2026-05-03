import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Customers from "./pages/Customers";
import Sales from "./pages/Sales";
import Products from "./pages/Products";
import Admin from "./pages/Admin";
import DeletedCustomers from "./pages/DeletedCustomers";
import Login from "./pages/Login";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* All these are protected */}
        <Route
          path="/customers"
          element={
            <ProtectedRoute>
              <Customers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <Sales />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deleted-customers"
          element={
            <ProtectedRoute>
              <DeletedCustomers />
            </ProtectedRoute>
          }
        />

        {/* Redirect home to customers */}
        <Route path="/" element={<Navigate to="/customers" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
