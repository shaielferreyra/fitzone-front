import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

// Context / Auth
import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

// Componentes públicos
import Navbar from "./components/Navbar";
import SecondaryNavbar from "./components/SecondaryNavbar";
import Slider from "./components/Slider";
import RoutinePacks from "./components/RoutinePacks";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import CategoryPage from "./components/CategoryPage";
import Profesores from "./components/Profesores";
import ScrollToTop from "./components/ScrollToTop";
import MarcasScroll from "./components/MarcasScroll";
import NotFound from "./components/NotFound";
import CategoriasLanding from "./components/CategoriasLanding";

// Encuesta y profesores (protegidos)
import EncuestaRutina from "./components/EncuestaRutina";
import JuanMartinez from "./components/JuanMartinez";
import CarlaLopez from "./components/CarlaLopez";
import LuisRamirez from "./components/LuisRamirez";

// Paneles de administración
import AdminPacksPanel from "./components/AdminPacksPanel";
import AdminProfPanel from "./components/AdminProfPanel";
import AdminBookingsPanel from "./components/AdminBookingsPanel";
import AdminRoute from "./components/AdminRoute";

// Wrapper para parámetro de categoría
const CategoryPageWrapper = () => {
  const { categoria } = useParams();
  return <CategoryPage categoria={categoria} />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <ScrollToTop />
          <Navbar />
          <SecondaryNavbar />

          <Routes>
            {/* Home */}
            <Route
              path="/"
              element={
                <>
                  <Slider />
                  <Profesores />
                  <MarcasScroll />
                  <RoutinePacks />
                  <ContactSection />
                </>
              }
            />

            {/* Públicos */}
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Register />} />

            {/* Categorías */}
            <Route path="/categoria/:categoria" element={<CategoryPageWrapper />} />
            <Route path="/categorias" element={<CategoriasLanding />} />

            {/* Protegidos por sesión */}
            <Route
              path="/encuesta"
              element={
                <PrivateRoute>
                  <EncuestaRutina />
                </PrivateRoute>
              }
            />
            <Route
              path="/profesores/juan-martinez"
              element={
                <PrivateRoute>
                  <JuanMartinez />
                </PrivateRoute>
              }
            />
            <Route
              path="/profesores/carla-lopez"
              element={
                <PrivateRoute>
                  <CarlaLopez />
                </PrivateRoute>
              }
            />
            <Route
              path="/profesores/luis-ramirez"
              element={
                <PrivateRoute>
                  <LuisRamirez />
                </PrivateRoute>
              }
            />

         {/* Paneles ADMIN (requieren rol admin) */}
          <Route
            path="/admin/packs"
            element={
         <AdminRoute>
         <AdminPacksPanel />
        </AdminRoute>
  }
/>
          <Route
           path="/admin/profesores"
           element={
           <AdminRoute>
           <AdminProfPanel />
            </AdminRoute>
  }
/>
<Route
  path="/admin/turnos"
  element={
    <AdminRoute>
      <AdminBookingsPanel />
    </AdminRoute>
  }
/>

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
