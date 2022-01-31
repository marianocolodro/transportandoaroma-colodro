import productos from './Productos';
import Item from './Item';
import { Breadcrumb, Button, Card, Col, Container, Row } from 'react-bootstrap';

const ItemList = () => {
    const itemListStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: "center",
        maxWidth: 1200,
        margin: 'auto'
    }
    const ItemListPromise = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);  
    });
    
    ItemListPromise.then((value) => console.log(value))
    .catch((reason) => console.log("Ocurrió un error"))
    .finally((info) => console.log("Finalizó el proceso"))
    
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <ul style={{itemListStyle}}>
                        {productos.map((producto) => <li><Item key={producto.id} producto={producto}/></li>)}
                    </ul>
                </Col>
            </Row>    
        </Container>
    )
}

export default ItemList;
