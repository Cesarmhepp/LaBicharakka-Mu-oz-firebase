import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
import ItemDetailContainer from './components/Items/ItemDetailContainer'
import Cart from './components/Cart/Cart'
import Categories from './components/Category/Categories';
import Category from './components/Category/Category';
import { CartProvider } from './components/Context/CartContext';

const App = () => {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="/product/:id" element={<ItemDetailContainer />} />
            <Route path="/*" exact element={<NoPage />} />
            <Route path="/cart" exact element={<Cart />} />
            <Route path="/category/:id" element={<Category />} />
            <Route path="/categories" element={<Categories />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>

  );
}
export default App;
