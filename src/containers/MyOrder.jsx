import React, { useContext } from 'react';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import '../styles/MyOrder.scss';

import arrowIcon from '@icons/flechita.svg'

const MyOrder = () => {
	const { state } = useContext(AppContext);

	const getTotal = () => {
		const reducer = (acc, curr) => acc + curr.price;
		const total = state.cart.reduce(reducer, 0)
		return total;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrowIcon} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.length > 0 
					? <React.Fragment>
						{state.cart.map((item, index) => (<OrderItem key={`myOrderItem-${index}`} product={item}/>))}
						<div className="order">
							<p>
								<span>Total</span>
							</p>
							<p>${getTotal()}</p>
						</div>
						<button className="primary-button">
							Checkout
						</button>
					</React.Fragment>	
					: <div>No items added</div>
				}
			</div>
		</aside>
	);
}

export default MyOrder;
