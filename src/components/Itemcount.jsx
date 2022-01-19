import React, { useState } from 'react';

const [clicks, setclicks] = useState(0);

const addclick = () => {
    setclicks(clicks + 1);
    stock =  5
    if (clicks = stock) {
        alert ("No hay más stock de este producto");
    }
}    

function Itemcount () {
return (
    <div>
        <button type="button" onclick={addclick}>Añadir al carrito</button>
        <br />
        <span style={{ color: "grey" }}>Productos en el carrito {clicks}</span>
    </div>
)
}

export default Itemcount