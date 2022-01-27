import { useState } from "react";

function ItemCount () {
const [itemsQty, setItemsQty] = useState(1);
const [stock, setStock] = useState(10)    
return (
    <div>
        <button onClick={() => itemsQty > 1 ? setItemsQty(itemsQty - 1) : null}> - </button>
        <button onClick={() => stock > itemsQty ? setItemsQty(itemsQty + 1) : null} > + </button>
        <h1> {itemsQty} </h1>
    </div>
)

}

export default ItemCount;