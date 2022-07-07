import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import OrderPage from './pages/OrderPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import ShippingPage from './pages/ShippingPage';
import UserList from './pages/UserList';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin/user-list" element={<UserList />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />}>
            {/* <Route path="/cart/" element={<CartPage />} /> */}
            <Route path="/cart/:id" element={<CartPage />} />
          </Route>
          <Route path="/shipping" element={<ShippingPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/place-order" element={<PlaceOrderPage />} />
          <Route path="/orders/:id" element={<OrderPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
