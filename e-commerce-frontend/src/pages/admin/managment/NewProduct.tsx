import { ChangeEvent, useState } from "react";
import AdminSideBar from "../../../components/admin/AdminSidebar";

function NewProduct() {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>("");

  const changeImageHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const file: File | undefined = e.target.files?.[0];

    const reader: FileReader = new FileReader();

    if (file) {
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === "string") {
          setPhoto(reader.result);
        }
      };
    }
  };
  return (
    <div className="adminContainer">
      <AdminSideBar />
      <main className="product-management">
        <article>
          <form action="">
            <h2>New Products</h2>
            <div>
              <label>Name</label>
              <input
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
                type="number"
                placeholder="Price"
                required
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
                type="number"
                placeholder="Stock"
                required
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input
                type="file"
                placeholder="Photo"
                required
                onChange={changeImageHandler}
              />
            </div>

            {photo && <img src={photo} alt="New_Image" />}

            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
}

export default NewProduct;
