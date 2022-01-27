import productos from "./Productos"
import Item from "./Item"

const ItemList = () => {
    const ItemListPromise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);  
    });
    
    ItemListPromise.then((value) => console.log(value))
    .catch((reason) => console.log("Ocurrió un error"))
    .finally((info) => console.log("Finalizó el proceso"))
    
    return (
        <ul>
            {productos.map((producto) => <li><Item key={producto.id} producto={producto}/></li>)}
        </ul>
    )
}

export default ItemList;
