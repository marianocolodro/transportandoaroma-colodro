import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemDetail = ({producto}) => {
const [itemsQty, setItemsQty] = useState(1);        
    return (
        <div className="card textCenter" style={{width: "18rem"}}>
            <img style={{width: "150px"}} src={producto.img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h2 className="card-title h1">{producto.nombre}</h2>
                <p className="card-text"> {producto.texto} </p>
                <p className="card-text">Precio: {producto.precio}</p>
                <p className="card-text">Unidades disponibles: {producto.stock}</p>
                <Button className="btn btn-primary">Agregar al carrito</Button>
                <Button onClick={() => itemsQty > 1 ? setItemsQty(itemsQty - 1) : null}> - </Button>
                <Button onClick={() => (producto.stock) > itemsQty ? setItemsQty(itemsQty + 1) : null}> + </Button>
                <h3> {itemsQty} </h3>
            </div>
        </div>
)        
}

export default ItemDetail;