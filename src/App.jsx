import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Link } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./components/Home/Home";
import Fruits from "./components/Fruits/Fruits";
import Dairy from "./components/Dairy/Dairy";
import Seafood from "./components/Seafood/Seafood";
import AllProducts from "./components/AllProducts/AllProducts";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Cart from "./components/Cart/Cart";
import Wishlist from "./components/Wishlist/Wishlist";
import Checkout from "./components/Checkout/Checkout";
import InfoPage from "./components/InfoPage/InfoPage";
import SearchResults from "./components/SearchResults/SearchResults";
import NotFound from "./components/NotFound/NotFound";
import Account from "./components/Account/Account";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/fruits",
        element: <Fruits />,
      },
      {
        path: "/dairy",
        element: <Dairy />,
      },
      {
        path: "/seafood",
        element: <Seafood />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      { path: "/products/:productId", element: <ProductDetails /> },
      { path: "/cart", element: <Cart /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/checkout", element: <Checkout /> },
      { path: "/about", element: <InfoPage type="about" /> },
      { path: "/process", element: <InfoPage type="process" /> },
      { path: "/contact", element: <InfoPage type="contact" /> },
      { path: "/account", element: <Account /> },
      { path: "/search", element: <SearchResults /> },
      { path: "/order-success", element: <div className="max-w-[1400px] mx-auto px-10 py-40 text-center"><h1 className="text-4xl font-bold text-zinc-800">Thank you for your order!</h1><p className="text-zinc-600 mt-4">Your fresh groceries are on their way.</p><Link to="/" className="inline-block mt-8 bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-lg">Continue Shopping</Link></div> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;