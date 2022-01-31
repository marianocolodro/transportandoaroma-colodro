import ItemDetail from './ItemDetail';
import productos from './Productos';

const ItemDetailContainer = () => {
    const ItemDetailPromise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);  
    });
    
    ItemDetailPromise.then((value) => console.log(value))
    .catch((reason) => console.log("Ocurrió un error"))
    .finally((info) => console.log("Finalizó el proceso"))
    
    return (
        <div>
            <ItemDetail/>
        </div>
    )
}

export default ItemDetailContainer;