import { useState } from "react";

const Item = ({producto}) => {
const [itemsQty, setItemsQty] = useState(1);    
    return (
        <div className="card textCenter" style="width: 18rem;">
            <img src={producto.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.precio}</p>
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