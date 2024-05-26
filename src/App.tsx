import "./App.css";
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Product = lazy(() => import("./pages/Product"));
const Customer = lazy(() => import("./pages/Customer"));
const Transaction = lazy(() => import("./pages/Transaction"));
const NewProduct = lazy(() => import("./pages/managment/NewProduct"));
const ProductManagment = lazy(
  () => import("./pages/managment/ProductManagment")
);
const TransactionManagment = lazy(
  () => import("./pages/managment/TransactionManagment")
);

const BarCharts = lazy(() => import("./pages/charts/BarCharts"));

const PieCharts = lazy(() => import("./pages/charts/PieCharts"));

const LineCharts = lazy(() => import("./pages/charts/LineCharts"));

const StopWatch = lazy(() => import("./pages/apps/StopWatch"));
const Coupon = lazy(() => import("./pages/apps/Coupon"));
const Toss = lazy(() => import("./pages/apps/Toss"));
function App() {
  return (
    <Router>
      <Suspense fallback="Loading...">
        <Routes>
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
