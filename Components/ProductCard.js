import React, {useContext, useEffect, useReducer, useState} from 'react';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import { Button, Modal, Header, Icon, Image } from 'semantic-ui-react';
import { GlobalContext } from '../Context/GlobalState';
import { CartReducer } from '../Context/CartReducer';
import { Link } from 'react-router-dom';
import '../CSS/product.css';

export default function ProductCard({product, history}) {

  const {state, addToCart} = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const router = useHistory();


  const {imgPath, title, id, inCart, brand, cost, specs } = product;

  return  <div className="column">
  <div className="ui card">
    <div className="image" >
      <img className="product-img" src={imgPath} onClick={()=>{setIsOpen(true);}}/>
    </div>
    <div className="content">
      <div className="header">{title}</div>
      <div className="meta">
        <a>{brand}</a>
      </div>
      <div className="description">
      </div>
    </div>
    <div className="extra content">
      
      <span className="right floated">
       { inCart ?  <Button onClick={()=>{router.push('/cart')}} >Go To Cart</Button>:<Button className="" onClick={() => { addToCart(product) }}>Add To Cart</Button>
          } 
      </span>
      <span>
        <i className="dollar sign icon"></i>
         {cost}
      </span>
    </div>
    </div>
    <Modal open={isOpen}>
     <Modal.Header>{title}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size='medium' src={imgPath} />
      <Modal.Description>
        <Header></Header>
        {
          specs.map((spec, index)=>{
            return <p key={index}>{spec}</p>
          })
        }
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <span>
      <Button onClick={()=>{setIsOpen(false)}}> Cancel</Button>
      </span>
      <span>
      { inCart ?  <Button onClick={()=>{router.push('/cart')}}>Go To Cart</Button>:<Button className="" onClick={() => { addToCart(product) }}>Add To Cart</Button>
      } 
      </span>
    </Modal.Actions>
    </Modal>
  </div>
  
    }