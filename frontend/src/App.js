import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import ShippingPage from './pages/ShippingPage';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />}>
            {/* <Route path="/cart/" element={<CartPage />} /> */}
            <Route path="/cart/:id" element={<CartPage />} />
          </Route>
          <Route path="/shipping" element={<ShippingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
