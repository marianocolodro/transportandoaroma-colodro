import { useState } from "react";

const Item = ({producto}) => {
const [itemsQty, setItemsQty] = useState(1);    
    return (
        <div className="card textCenter" style={{width: "18rem"}}>
            <img style={{width: "150px"}} src={producto.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title h1">{producto.nombre}</h5>
                <p className="card-text">Precio: {producto.precio}</p>
                <p className="card-text">Unidades disponibles: {producto.stock}</p>
                <button className="btn btn-primary">Ver detalles</button>
                <button onClick={() => itemsQty > 1 ? setItemsQty(itemsQty - 1) : null}> - </button>
                <button onClick={() => (producto.stock) > itemsQty ? setItemsQty(itemsQty + 1) : null}> + </button>
                <h1> {itemsQty} </h1>
            </div>
        </div>
    )
}    

export default Item;