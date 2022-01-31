import ItemDetail from "./ItemDetail";
import productos from "./Productos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productoDetalle, setProductoDetalle] = useState(null);
  const { id } = useParams()

  useEffect(() => {
    const getItem = new Promise((res, rej) => {
      setTimeout(() => {
        res(productos.find((prod) => prod.id === Number(id)));
      }, 2000);
    });
    getItem.then((prod) => {
      setProductoDetalle(prod);
    });
  }, [id]);

  return (
    <div>
      {productoDetalle ? <ItemDetail producto={productoDetalle} /> : null }
    </div>
  );
};

export default ItemDetailContainer;