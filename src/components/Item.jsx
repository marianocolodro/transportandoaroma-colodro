import { Button, Card} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import productos from './Productos';

const Item = ({producto}) => {
    return (
        <Card>
            <div className="card textCenter" style={{width: "18rem", marginTop: "15px"}}>
                <img style={{width: "200px"}} src={producto.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h1 className="card-title h1">{producto.nombre}</h1>
                    <Button as={Link} variant= "primary" to={/producto/producto.id}>Ver detalles</Button>
                </div>
            </div>
        </Card>
    )                                        
}    

export default Item;