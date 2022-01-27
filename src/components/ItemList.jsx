import productos from "./Productos"

const ItemListPromise = new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
    }, 2000);   
});

ItemListPromise.then((value) => console.log(value))
.catch((reason) => console.log("Ocurrió un error"))
.finally((info) => console.log("Finalizó el proceso"))

let ItemList = productos.map((producto) => (producto.nombre, producto.precio, producto.stock, producto.precio))

export default ItemList;