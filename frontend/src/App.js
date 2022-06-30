import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import CartPage from './pages/CartPage';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />}>
            {/* <Route path="/cart/" element={<CartPage />} /> */}
            <Route path="/cart/:id" element={<CartPage />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
