import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const Product = lazy(() => import("./pages/admin/Product"));
const Customer = lazy(() => import("./pages/admin/Customer"));
const Transaction = lazy(() => import("./pages/admin/Transaction"));
const NewProduct = lazy(() => import("./pages/admin/managment/NewProduct"));
const ProductManagment = lazy(
  () => import("./pages/admin/managment/ProductManagment")
);
const TransactionManagment = lazy(
  () => import("./pages/admin/managment/TransactionManagment")
);

const BarCharts = lazy(() => import("./pages/admin/charts/BarCharts"));

const PieCharts = lazy(() => import("./pages/admin/charts/PieCharts"));

const LineCharts = lazy(() => import("./pages/admin/charts/LineCharts"));

const StopWatch = lazy(() => import("./pages/admin/apps/StopWatch"));
const Coupon = lazy(() => import("./pages/admin/apps/Coupon"));
const Toss = lazy(() => import("./pages/admin/apps/Toss"));

const Home = lazy(() => import("./pages/home"));
const Cart = lazy(() => import("./pages/cart"));
const Search = lazy(() => import("./pages/search"));

const Header = lazy(() => import("./components/Header"));
const Shipping = lazy(() => import("./pages/shipping"));
const Orders = lazy(() => import("./pages/orders"));
const Login = lazy(() => import("./pages/login"));

function App() {
  return (
    <Router>
      {/* Header */}

      <Header />

      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/search" element={<Search />}></Route>

          {/* Not Logged in Route */}
          <Route path="/login" element={<Login />}></Route>

          {/* Logged in user routes */}
          <Route>
            <Route path="/shipping" element={<Shipping />}></Route>
            <Route path="/orders" element={<Orders />}></Route>
          </Route>

          {/* Admin Route */}
          <Route path="/admin/dashboard" element={<Dashboard />}></Route>
          <Route path="/admin/product" element={<Product />}></Route>
          <Route path="/admin/customer" element={<Customer />}></Route>
          <Route path="/admin/transaction" element={<Transaction />}></Route>

          {/* Charts */}
          <Route path="/admin/chart/bar" element={<BarCharts />}></Route>
          <Route path="/admin/chart/pie" element={<PieCharts />}></Route>
          <Route path="/admin/chart/line" element={<LineCharts />}></Route>

          {/* App */}
          <Route path="/admin/app/stopwatch" element={<StopWatch />}></Route>
          <Route path="/admin/app/coupon" element={<Coupon />}></Route>
          <Route path="/admin/app/toss" element={<Toss />}></Route>

          {/* Managment */}

          <Route path="/admin/product/new" element={<NewProduct />}></Route>
          <Route
            path="/admin/product/:id"
            element={<ProductManagment />}
          ></Route>
          <Route
            path="/admin/transaction/:id"
            element={<TransactionManagment />}
          ></Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
