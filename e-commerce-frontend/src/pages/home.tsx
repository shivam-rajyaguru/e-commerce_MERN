import { Link } from "react-router-dom";
import ProductCard from "../components/Product-card";

function Home() {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section></section>

      <h1>
        Latest Products
        <Link to="/search" className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="bakmdfs"
          name="Macbook"
          stock={5}
          handler={addToCartHandler}
          photo="https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
          price={45000}
        />
      </main>
    </div>
  );
}

export default Home;
