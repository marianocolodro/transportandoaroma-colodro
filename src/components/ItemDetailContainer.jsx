import ItemDetail from "./ItemDetail";
import productos from "./Productos";
import { useState, useEffect } from "react";

const ItemDetailContainer = () => {
  const [productoDetalle, setProductoDetalle] = useState([]);

  useEffect(() => {
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        if (productoDetalle) {
          res(productos.filter((prod) => prod.id === 1));
        } else {
          rej(console.log("Producto no encontrado"));
        }
      }, 2000);
    });
    getItem.then((prod) => {
      setProductoDetalle(prod);
    });
  });

  return (
    <div>
      <ItemDetail productoDetalle={productoDetalle} />
    </div>
  );
};

export default ItemDetailContainer;