import { useDispatch } from "react-redux";
import { ChevronUp, ChevronDown } from "../icons";

const CartItem = ( { id, img, title, price, amount } ) => {
  const dispatch = useDispatch()
  console.log('item price', price);
  return (
    <article className="cart-item">
      <img src={ img } alt={ title } />
      <div>
        <h4>{ title }</h4>
        <h4 className="item-price">${ price }</h4>
        <button className='remove-btn' onClick={ ()=> dispatch()}>
          remove
        </button>
      </div>
      <div>
        <button className='amount-btn' onClick={ () => dispatch() }>
          <ChevronUp />
        </button>
        <p className="amount">{ amount }</p>
        <button className='amount-btn' onClick={ () => dispatch() }>
          <ChevronDown />
        </button>
      </div>
    </article>
  )
}

export default CartItem
