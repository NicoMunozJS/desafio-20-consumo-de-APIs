import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Pizza from "./components/Pizza";

//import Home from "./components/Home";
import Cart from "./components/Cart";
// import LoginPage from "./components/LoginPage";
// import RegisterPage from "./components/RegisterPage";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* Descomenta la que quieras probar */}
      {/* <Home /> */}
      <Pizza/>
      {/* <Cart /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <Footer />
    </div>
  );
}
