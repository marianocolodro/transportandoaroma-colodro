import { Button, Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';

const Item = ({producto}) => {
    const navigate = useNavigate();    
    return (
        <Card>
            <div className="card textCenter" style={{width: "18rem", marginTop: "15px"}}>
                <img style={{width: "200px"}} src={producto.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h1 className="card-title h1">{producto.nombre}</h1>
                    <Button variant="primary" onClick={ () => (<ItemDetailContainer/>)}>Ver detalles</Button>
                </div>
            </div>
        </Card>
    )                                        
}    

export default Item;