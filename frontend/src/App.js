import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import OrderListPage from './pages/OrderListPage';
import OrderPage from './pages/OrderPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import ProductEditPage from './pages/ProductEditPage';
import ProductListPage from './pages/ProductListPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import ShippingPage from './pages/ShippingPage';
import UserEditPage from './pages/UserEditPage';
import UserList from './pages/UserList';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:keyword" element={<Home />} />
          <Route path="/page/:page" element={<Home />} />
          <Route path="/search/:keyword/page/:page" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin/user-list" element={<UserList />} />
          <Route path="/admin/user-list/:id/edit" element={<UserEditPage />} />
          <Route path="/admin/product-list" element={<ProductListPage />} />
          <Route
            path="/admin/product-list/page/:page"
            element={<ProductListPage />}
          />
          <Route
            path="/admin/product-list/:id/edit"
            element={<ProductEditPage />}
          />
          <Route path="/admin/order-list" element={<OrderListPage />} />
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
