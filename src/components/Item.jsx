import { Button, Card} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const Item = ({producto}) => {
    return (
        <Card>
            <div className="card textCenter" style={{width: "18rem", marginTop: "15px"}}>
                <img style={{width: "200px"}} src={producto.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h1 className="card-title h1">{producto.nombre}</h1>
                   <Link to={<ItemDetail/>}><Button variant="primary">Ver detalles</Button></Link>
                </div>
            </div>
        </Card>
    )                                        
}    

export default Item;